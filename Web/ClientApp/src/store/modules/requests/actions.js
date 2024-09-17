import axios from "axios";

export default {
    async contactCoach(context, payload) {
        const newRequest = {
            //id: new Date().toISOString(), // firebase will create ID automatically
            //coachId: payload.coachId, // not necessary because it's going to be put in a folder
            userEmail: payload.email,
            message: payload.message
        }
        
        // const response = await fetch(`https://udemy-vue-e734c-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
        //     method: 'POST',
        //     body: JSON.stringify(newRequest)
        // });
        // const responseData = await response.json();
        // if (!response.ok) {
        //     throw new Error(responseData.message || 'Failed to send request!');
        // }
        
        const response = await axios.post(
            `https://udemy-vue-e734c-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
            newRequest
        );
        const responseData = await response.data;
        if (response.statusText !== 'OK') {
            throw new Error(responseData.message || 'Failed to send request!');
        }
        
        newRequest.id = responseData.name; // name is automatically created as an id
        newRequest.coachId = payload.coachId;
        
        context.commit('addRequest', newRequest)
    },
    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        
        //const response = await fetch(`https://udemy-vue-e734c-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`);
        //const responseData = await response.json();
        
        const response = await axios.get(`https://udemy-vue-e734c-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`);
        const responseData = await response.data;

        // if (!response.ok) {
        //     throw new Error(responseData.message || 'Failed to fetch requests!');
        // }
        if (response.statusText !== 'OK') {
            throw new Error(responseData.message || 'Failed to fetch requests!');
        }
        
        const requests = [];
        for (const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message,
            }
            requests.push(request);
        }
        
        context.commit('setRequests', requests);
    }
}