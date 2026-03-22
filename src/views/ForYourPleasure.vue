<template>
    <main>
        <div class="banner goodspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component />
                    </div>
                </div>
                <h1 class="title-big">For your pleasure</h1>
            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>

                <div class="line"></div>

                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <!-- <product-card-component />
                            <product-card-component />
                            <product-card-component />
                            <product-card-component />
                            <product-card-component />
                            <product-card-component /> -->

                            <div class="shop__item">
                                <img :src="require(`@/assets/img/${cardItem[0].img}`)" :alt="cardItem[0].img">
                                <div class="best__item-title">
                                    {{ cardItem[0].title }}
                                </div>
                                <div class="best__item-price">{{ cardItem[0].price }}</div>
                            </div>
                            <div class="shop__item">
                                <img :src="require(`@/assets/img/${cardItem[1].img}`)" :alt="cardItem[1].img">
                                <div class="best__item-title">
                                    {{ cardItem[1].title }}
                                </div>
                                <div class="best__item-price">{{ cardItem[1].price }}</div>
                            </div>
                            <div class="shop__item">
                                <img :src="require(`@/assets/img/${cardItem[2].img}`)" :alt="cardItem[2].img">
                                <div class="best__item-title">
                                    {{ cardItem[2].title }}
                                </div>
                                <div class="best__item-price">{{ cardItem[2].price }}</div>
                            </div>
                            <div class="shop__item">
                                <img :src="require(`@/assets/img/${cardItem[3].img}`)" :alt="cardItem[3].img">
                                <div class="best__item-title">
                                    {{ cardItem[3].title }}
                                </div>
                                <div class="best__item-price">{{ cardItem[3].price }}</div>
                            </div>
                            <div class="shop__item">
                                <img :src="require(`@/assets/img/${cardItem[4].img}`)" :alt="cardItem[4].img">
                                <div class="best__item-title">
                                    {{ cardItem[4].title }}
                                </div>
                                <div class="best__item-price">{{ cardItem[4].price }}</div>
                            </div>
                            <div class="shop__item">
                                <img :src="require(`@/assets/img/${cardItem[5].img}`)" :alt="cardItem[5].img">
                                <div class="best__item-title">
                                    {{ cardItem[5].title }}
                                </div>
                                <div class="best__item-price">{{ cardItem[5].price }}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import ProductCardComponent from '@/components/ProductCardComponent.vue';

export default {
    components: { NavBarComponent, ProductCardComponent },
    data() {
        return {
            cardItem: [
                {
                    id: 0,
                    img: 'coffee-1.jpg',
                    title: 'Solimo Coffee Beans 2kg',
                    price: '10.73$'
                },
                {
                    id: 1,
                    img: 'coffee-2.jpg',
                    title: 'Presto Coffee Beans 1kg',
                    price: '15.99$'
                },
                {
                    id: 2,
                    img: 'coffee-3.jpg',
                    title: 'AROMISTICO Coffee 2kg',
                    price: '16.99$'
                },
                {
                    id: 3,
                    img: 'coffee-3.jpg',
                    title: 'Solimo Coffee Beans 2kg',
                    price: '15.73$'
                },
                {
                    id: 4,
                    img: 'coffee-3.jpg',
                    title: 'Presto Coffee Beans 1kg',
                    price: '5.99$'
                },
                {
                    id: 5,
                    img: 'coffee-3.jpg',
                    title: 'AROMISTICO Coffee 1kg',
                    price: '6.99$'
                },
            ],
        }
    }
}
</script>