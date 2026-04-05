import { v4 as uuidv4 } from "uuid";
const goods = {
    state: {
        goods: [
            {
                id: uuidv4(),
                image: '',
                name: 'Solimo Coffee Beans 2kg',
                price: 10.73
            },
            {
                id: uuidv4(),
                image: '',
                name: 'Presto Coffee Beans 1kg',
                price: 15.99
            },
            {
                id: uuidv4(),
                image: '',
                name: 'AROMISTICO Coffee 2kg',
                price: 16.99
            },
            {
                id: uuidv4(),
                image: '',
                name: 'Solimo Coffee Beans 2kg',
                price: 15.73
            },
            {
                id: uuidv4(),
                image: '',
                name: 'Presto Coffee Beans 1kg',
                price: 5.99
            },
            {
                id: uuidv4(),
                image: '',
                name: 'AROMISTICO Coffee 1kg',
                price: 6.99
            },
        ],
    },
    mutations: {
        setGoodsData(state, data) {
            state.goods = data
        }
    },
    actions: {
        setGoodsData({ commit }, data) {
            commit('setGoodsData', data)
        }
    },
    getters: {
        getGoods(state) {
            return state.goods
        },
        getProductGoodsById(state) {
            return (id) => {
                return state.goods.find((card) => card.id === id)
            }
        }
    }
}

export default goods