import ContactUs from '@/views/ContactUs.vue'
import ForYourPleasure from '@/views/ForYourPleasure.vue'
import HeroView from '@/views/HeroView.vue'
import OurCoffeeView from '@/views/OurCoffeeView.vue'
import ThankYouPage from '@/views/ThankYouPage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffeeView },
    { path: '/for-your', component: ForYourPleasure },
    { path: '/contact', component: ContactUs },
    { path: '/thank-you', component: ThankYouPage },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;