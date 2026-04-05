import { v4 as uuidv4 } from "uuid";
const coffee = {
    state: {
        coffee: [
            {
                id: uuidv4(),
                image: '',
                name: 'Presto Coffee Beans 1kg',
                price: 10.73
            },
            {
                id: uuidv4(),
                image: '',
                name: 'Presto Coffee Beans 2kg',
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
        setCoffeeData(state, data) {
            state.coffee = data
        }
    },
    actions: {
        setCoffeeData({ commit }, data) {
            // console.log(data);  
            commit('setCoffeeData', data)
        }
    },
    getters: {
        getCoffee(state) {
            return state.coffee
        },
        getProductCoffeeById(state) {
            return (id) => {
                return state.coffee.find((card) => card.id === id)
            }
        }
    }
}

export default coffee