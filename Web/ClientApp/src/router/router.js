import { createWebHistory, createRouter } from 'vue-router';

import store from '@/store'

import Home from '@/pages/Template/Home.vue';
import Counter from '@/pages/Template/Counter.vue';
import FetchData from '@/pages/Template/FetchData.vue';

import DataBinding from '@/pages/TheBasics/DataBinding.vue';
import Events from '@/pages/TheBasics/Events.vue';
import DynamicStyling from '@/pages/TheBasics/DynamicStyling.vue';
import ConditionalContentAndLists from '@/pages/TheBasics/ConditionalContentAndLists.vue';
import MonsterSlayer from '@/pages/TheBasics/MonsterSlayer.vue';
import BehindTheScenes from '@/pages/TheBasics/BehindTheScenes.vue';

import FriendDirectory_NeedsChildComponents from '@/pages/WorkingWithComponents/FriendDirectory_NeedsChildComponents.vue'
import FriendDirectory_UsingChildComponents from '@/pages/WorkingWithComponents/FriendDirectory_UsingChildComponents.vue'
import KnowledgeBase_ComponentsPassingOnVariables from '@/pages/WorkingWithComponents/KnowledgeBase_ComponentsPassingOnVariables.vue'
import KnowledgeBase_InjectingComponents from '@/pages/WorkingWithComponents/KnowledgeBase_InjectingComponents.vue'
import UsingSlots from '@/pages/WorkingWithComponents/UsingSlots.vue'
import DynamicComponents from '@/pages/WorkingWithComponents/DynamicComponents.vue'
import LearningResourcesApp from '@/pages/WorkingWithComponents/LearningResourcesApp.vue'

import UsingForms from '@/pages/AdvancedFeatures/UsingForms.vue'
import HttpRequests from '@/pages/AdvancedFeatures/HttpRequests.vue'
import UsingRouting from '@/pages/AdvancedFeatures/UsingRouting.vue'
import NestedRoutes from '@/pages/AdvancedFeatures/NestedRoutes.vue'

import TeamsList from '@/components/AdvancedFeatures/nested-routes/teams/TeamsList.vue'
import UsersList from '@/components/AdvancedFeatures/nested-routes/users/UsersList.vue';
import TeamMembers from '@/components/AdvancedFeatures/nested-routes/teams/TeamMembers.vue';
import TeamsFooter from '@/components/AdvancedFeatures/nested-routes/teams/TeamsFooter.vue';
import UsersFooter from '@/components/AdvancedFeatures/nested-routes/users/UsersFooter.vue';

import AnimationsAndTransitions from '@/pages/AdvancedFeatures/AnimationsAndTransitions';
import AnimatedRoutingPageOne from '@/components/AdvancedFeatures/animated-stuff/AnimatedRoutingPageOne'
import AnimatedRoutingPageTwo from '@/components/AdvancedFeatures/animated-stuff/AnimatedRoutingPageTwo'

import VuexStateManagement from '@/pages/AdvancedFeatures/VuexStateManagement';

import FindACoachBase from '@/pages/AdvancedFeatures/find-a-coach/FindACoachBase';
import CoachList from '@/pages/AdvancedFeatures/find-a-coach/coaches/CoachList';
import CoachDetails from '@/pages/AdvancedFeatures/find-a-coach/coaches/CoachDetails';
import CoachRegistration from '@/pages/AdvancedFeatures/find-a-coach/coaches/CoachRegistration';

//import ContactCoach from '@/components/AdvancedFeatures/coach-project/Requests/ContactCoach';
import RequestsReceived from '@/components/AdvancedFeatures/coach-project/Requests/RequestsReceived';
import UserAuth from '@/pages/AdvancedFeatures/find-a-coach/auth/UserAuth';

// Async component - only loads it when used
const ContactCoach = () => import('@/components/AdvancedFeatures/coach-project/Requests/ContactCoach')

import IntroductionToTheCompositionApi from '@/pages/TheComposotionApi/IntroductionToTheCompositionApi'

import NotFound from '@/pages/NotFound.vue'

const routes = [
    {
        path: '/',
        redirect: '/Home'
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        //alias: '/'
    },
    {
        path: '/Template/Counter',
        name: 'Counter',
        component: Counter,
    },
    {
        path: '/Template/FetchData',
        name: 'FetchData',
        component: FetchData,
    },

    // Section 2
    {
        path: '/TheBasics/DataBinding',
        name: 'DataBinding',
        component: DataBinding,
    },
    {
        path: '/TheBasics/Events',
        name: 'Events',
        component: Events,
    },
    {
        path: '/TheBasics/DynamicStyling',
        name: 'DynamicStyling',
        component: DynamicStyling,
    },

    // Section 3
    {
        path: '/TheBasics/ConditionalContentAndLists',
        name: 'ConditionalContentAndLists',
        component: ConditionalContentAndLists,
    },

    // Section 4
    {
        path: '/TheBasics/MonsterSlayer',
        name: 'MonsterSlayer',
        component: MonsterSlayer,
    },

    // Section 5
    {
        path: '/TheBasics/BehindTheScenes',
        name: 'BehindTheScenes',
        component: BehindTheScenes,
    },

    // Section 6
    {
        path: '/WorkingWithComponents/FriendDirectory_NeedsChildComponents',
        name: 'FriendDirectory_NeedsChildComponents',
        component: FriendDirectory_NeedsChildComponents,
    },
    {
        path: '/WorkingWithComponents/FriendDirectory_UsingChildComponents',
        name: 'FriendDirectory_UsingChildComponents',
        component: FriendDirectory_UsingChildComponents,
    },
    // Section 8
    {
        path: '/WorkingWithComponents/KnowledgeBase_ComponentsPassingOnVariables',
        name: 'KnowledgeBase_ComponentsPassingOnVariables',
        component: KnowledgeBase_ComponentsPassingOnVariables,
    },
    {
        path: '/WorkingWithComponents/KnowledgeBase_InjectingComponents',
        name: 'KnowledgeBase_InjectingComponents',
        component: KnowledgeBase_InjectingComponents,
    },
    // Section 9
    {
        path: '/WorkingWithComponents/UsingSlots',
        name: 'UsingSlots',
        component: UsingSlots,
    },
    {
        path: '/WorkingWithComponents/DynamicComponents',
        name: 'DynamicComponents',
        component: DynamicComponents,
    },
    // Section 10
    {
        path: '/WorkingWithComponents/LearningResourcesApp',
        name: 'LearningResourcesApp',
        component: LearningResourcesApp
    },
    
    // Section 11
    {
        path: '/AdvancedFeatures/UsingForms',
        name: 'UsingForms',
        component: UsingForms
    },
    // Section 12
    {
        path: '/AdvancedFeatures/HttpRequests',
        name: 'HttpRequests',
        component: HttpRequests
    },
    // Section 13
    {
        path: '/AdvancedFeatures/UsingRouting/:activePage?',
        name: 'UsingRouting',
        component: UsingRouting,
        children: [
            {
                path: 'team-members/:teamId',
                component: UsingRouting,
            },
        ]
    },
    // Section 14
    {
        path: '/AdvancedFeatures/NestedRoutes',
        name: 'NestedRoutes',
        component: NestedRoutes,
        children: [
            {
                path: 'Teams',
                name: 'TeamsList',
                components: { default: TeamsList, footer: TeamsFooter },
                children: [
                    {
                        path: ':teamId',
                        name: 'team-members',
                        component: TeamMembers,
                        props: true
                    }
                ]
            },
            {
                path: 'Users',
                name: 'UsersList',
                meta: { needsAuth: true },
                components: { default: UsersList, footer: UsersFooter },
                beforeEnter(to, from, next) {
                    //console.log('users route beforeEnter');
                    //console.log(to, from)
                    next();
                }
            }
        ]
    },
    {
        path: '/AdvancedFeatures/AnimationsAndTransitions/',
        name: 'AnimationsAndTransitions',
        component: AnimationsAndTransitions,
        children: [
            {
                path: '',
                alias: ['/'],
                name: 'AnimatedRoutingPageOne',
                component: AnimatedRoutingPageOne
            },
            {
                path: 'AnimatedRoutingPageTwo',
                name: 'AnimatedRoutingPageTwo',
                component: AnimatedRoutingPageTwo
            },
        ]
    },
    // Section 15
    {
        path: '/AdvancedFeatures/VuexStateManagement/',
        name: 'VuexStateManagement',
        component: VuexStateManagement
    },
    
    // Section 16 - Coach Project
    {
        path: '/AdvancedFeatures/FindACoachBase/',
        name: 'FindACoachBase',
        component: FindACoachBase,
        children: [
            {
                path: 'Coaches',
                alias: ['Coaches'],
                name: 'CoachList',
                component: CoachList
            },
            {
                path: 'Coaches/:id', // /coaches/c1/contact
                name: 'CoachDetails',
                component: CoachDetails,
                props: true,
                children: [
                    {
                        path: 'Contact',
                        name: 'ContactCoach',
                        component: ContactCoach
                    }
                ]
            },
            {
                path: 'Register',
                name: 'CoachRegistration',
                component: CoachRegistration,
                meta: { requiresCoachAuth: true }
            },
            {
                path: 'Requests',
                name: 'RequestsReceived',
                component: RequestsReceived,
                meta: { requiresCoachAuth: true }
            },
            {
                path: 'Auth',
                name: 'UserAuth',
                component: UserAuth,
                meta: { requiresCoachUnAuth: true }
            },
        ]
    },

    {
        path: '/IntroductionToTheCompositionApi',
        name: 'IntroductionToTheCompositionApi',
        component: IntroductionToTheCompositionApi,
    },    
    {
        path: '/:notFound(.*)',
        component: NotFound,
        //redirect: '/Home'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'router-link-active active-link active', // overrides default active class 
    linkExactActiveClass: 'active-link-exact',
    scrollBehavior(to, from, savedPosition) {
        //console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    },
});

router.beforeEach((to, from, next) => {    
    if (to.meta.requiresCoachAuth && !store.getters.isAuthenticated) {
        store.dispatch('tryLogin');
        if (!store.getters.isAuthenticated) {
            next({name: 'UserAuth'});    
        } else {
            next();
        }
    } else if (to.meta.requiresCoachUnAuth && store.getters.isAuthenticated) {
        next({name: 'CoachList'});
    } else if (to.meta.needsAuth) {
        console.log('PAGE NEEDS AUTH', to, from)
        next();
    } else {
        next();
    }
    
    // next(false);
    // next('/url')
    // next({name: 'pathName', params: { param1: '123'}});
})

router.afterEach((to, from) => {
    // console.log('GLOBAL AFTER-EACH')
    // console.log(to, from)
})

export default router;