<template>
    <div>
        <div id="side_block">
            <nav id="mobile_menu" @click="toggleMenu()">
                <ul>
                    <li>
                        <router-link to="/about" class="menu_link"><sup>(1)</sup>About</router-link>
                    </li>
                     <li>
                        <router-link to="/projects" class="menu_link"><sup>(2)</sup>Projects</router-link>
                    </li>
                    <li>
                        <router-link to="/clients" class="menu_link"><sup>(3)</sup>Clients</router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="menu_link"><sup>(4)</sup>Contact</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <header id="header" :class="{'scroll': isScroll}">
                <router-link to="/" >
                    <div class="logo_wrap">
                        <img v-if="isMenuOpen || isScroll" src='@/assets/images/INTERVIEW_logo_black.png' alt="logo"/>
                        <img v-else :src="require('@/assets/images/'+logo)" alt="logo"/>  
                    </div>
                </router-link>
                       
                <nav class="burger_menu">
                    <button class="hamburger hamburger--spin" type="button" @click="toggleMenu()">
                        <span class="hamburger-box">
                            <span class="hamburger-inner" :style="'background-color:' + color" v-if="!isScroll"></span> 
                            <span class="hamburger-inner" :style="'background-color: #000;'" v-else></span> 
                        </span>
                    </button>
                </nav>
        </header>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isScroll : false,
            isMenuOpen: false
        }
    },
    props: {
        logo: {
            type: String,
            dafault: ''
        },
        color: {
            type: String,
            default: ''
        }
    },
    created(){
        window.addEventListener('scroll', this.toggleFixedHeader);
    },
    methods: {
        toggleFixedHeader(){
            if(document.querySelector('section').offsetHeight !== null){
                this.isScroll = window.scrollY > document.querySelector('section').offsetHeight
            }
            
        },
        toggleMenu(){
             document.querySelector('.hamburger').classList.toggle('is-active');
             document.getElementById('side_block').classList.toggle('open');
             document.querySelector('body').classList.toggle('lock');
             this.isMenuOpen = !this.isMenuOpen
        }
    }
}
</script>

<style lang="scss">
@media screen and (max-width: 500px) {
    #mobile_menu ul li a {
        font-size: 4rem;
    }
}
</style>