<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div class="container">
                <a class="navbar-brand">Vue JS Template for .NET 5</a>
                <button class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-label="Toggle navigation"
                        @click="toggle">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse"
                     v-bind:class="{show: isExpanded}">
                    <ul class="navbar-nav flex-grow">
                        <li class="nav-item">
                                <router-link :to="{ name: 'Home' }" class="nav-link text-dark">Home</router-link>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link text-dark dropdown-toggle">Template</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item">
                                    <router-link :to="{ name: 'Counter' }" class="nav-link text-dark">Counter</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'FetchData' }" class="nav-link text-dark">Fetch Data</router-link>
                                </li>
                            </ul>
                        </li>
                        
                        <!-- Section 1-3 -->
                        <li class="nav-item dropdown">
                            <a class="nav-link text-dark dropdown-toggle">The Basics</a>
                            <ul class="dropdown-menu">
                                <li class="nav-link">
                                    <router-link :to="{ name: 'DataBinding' }" class="nav-link text-dark">Data Binding</router-link>
                                </li>
                                <li class="nav-link">
                                    <router-link :to="{ name: 'Events' }" class="nav-link text-dark">Events</router-link>
                                </li>
                                <li class="nav-link-item">
                                    <router-link :to="{ name: 'DynamicStyling' }" class="nav-link text-dark">Dynamic Styling</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'ConditionalContentAndLists' }" class="nav-link text-dark">Conditional Content & Lists</router-link>
                                </li>
                                <!-- Section 4 -->
                                <li class="nav-item">
                                    <router-link :to="{ name: 'MonsterSlayer' }" class="nav-link text-dark"><span class="project">Project: Monster Slayer</span></router-link>
                                </li>
                                <!-- Section 5 -->
                                <li class="nav-item">
                                    <router-link :to="{ name: 'BehindTheScenes' }" class="nav-link text-dark">Behind the Scenes</router-link>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link text-dark dropdown-toggle">Components</a>
                            <ul class="dropdown-menu">
                                <!-- Section 6 -->
                                <li class="nav-item">
                                    <router-link :to="{ name: 'FriendDirectory_NeedsChildComponents' }" class="nav-link text-dark">Problem: Child Components Needed</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'FriendDirectory_UsingChildComponents' }" class="nav-link text-dark">Solution: Talking to Child Components</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'KnowledgeBase_ComponentsPassingOnVariables' }" class="nav-link text-dark">Problem: Components Passing on variables</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'KnowledgeBase_InjectingComponents' }" class="nav-link text-dark">Solution: Injecting Components</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'UsingSlots' }" class="nav-link text-dark">Slots</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'DynamicComponents' }" class="nav-link text-dark">Dynamic Components, Dialogs, Teleporting</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'LearningResourcesApp' }" class="nav-link text-dark project"><span class="project">Project: The Learning Resources App</span></router-link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link text-dark dropdown-toggle">Advanced</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item">
                                    <router-link :to="{ name: 'UsingForms' }" class="nav-link text-dark">Forms</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'HttpRequests' }" class="nav-link text-dark">HttpRequests</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'UsingRouting' }" class="nav-link text-dark">Routing</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'NestedRoutes' }" class="nav-link text-dark">Nested Routes</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'AnimatedRoutingPageOne' }" class="nav-link text-dark">Animations & Transitions</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'VuexStateManagement' }" class="nav-link text-dark">Vuex</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: 'CoachList' }" class="nav-link text-dark"><span class="project">Find a Coach Project</span></router-link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link text-dark dropdown-toggle">The Composition API</a>
                            <ul class="dropdown-menu">
                                <li class="nav-item">
                                    <router-link :to="{ name: 'IntroductionToTheCompositionApi' }" class="nav-link text-dark">Introduction to the Composition API</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    import $ from 'jquery'

    export default {
        name: "NavMenu",
        data() {
            return {
                isExpanded: false,
                selectedMenu: ''
            }
        },
        methods: {
            collapse() {
                this.isExpanded = false;
            },
    
            toggle() {
                this.isExpanded = !this.isExpanded;
            },
        },
        mounted() {
            $(":not('.nav-link')").on('click', function(e) {
                e.stopPropagation();
                $('.dropdown-menu').hide();
            });
            
            $(".nav-link.dropdown-toggle").on('click', function(e) {
                e.stopPropagation();
                
                let dropdown = $(e.target).next();
                if (dropdown.css('display') === 'none') {
                    $('.dropdown-menu').hide();
                    dropdown.show();
                } else {
                    $('.dropdown-menu').hide();
                    dropdown.hide();
                }
            });
        }
    }
</script>

<style>
a.navbar-brand {
    white-space: normal;
    text-align: center;
    word-break: break-all;
}

.dropdown-toggle {
    cursor: pointer;
}

html {
    font-size: 14px;
}

@media (min-width: 768px) {
    html {
        font-size: 16px;
    }
}

.box-shadow {
    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);
}
</style>