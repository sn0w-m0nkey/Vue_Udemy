let timer;

export default {
    async signup(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        })
    },
    async login(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        })
    },
    async auth(context, payload) {
        const mode = payload.mode;
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAx3A9nMeiZCnXkOb9pWmQW7MJZTSuZUMg';
        if (mode === 'signup') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAx3A9nMeiZCnXkOb9pWmQW7MJZTSuZUMg'
        }
        
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })

        const responseData = await response.json();

        if (!response.ok) {
            console.log('auth error', responseData);
            throw new Error(responseData.message || 'Failed to authenticate');
        }

        const expiresIn = +responseData.expiresIn * 1000;
        //const expiresIn = 5000; // use to test auto logout and redirect
        const expirationDate = new Date().getTime() + expiresIn;
        
        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);
        
        timer = setTimeout(() => {
            context.dispatch('autoLogout');
        }, expiresIn);
        
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
        })
    },
    tryLogin(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        
        const expiresIn = +tokenExpiration - new Date().getTime();
        if (expiresIn < 0) {
            return;
        }
        
        timer = setTimeout(() => {
            context.dispatch('autoLogout');
        }, expiresIn)
        
        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId,
            })
        }
    },
    logout(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');
        
        clearTimeout(timer);
        
        context.commit('setUser', {
            token: null,
            userId: null,
        })
    },
    autoLogout(context) {
        console.log('auto logout');
        
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
}