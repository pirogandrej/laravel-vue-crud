export default {
    state: {
        allcontacts: [],
        contact: ''
    },
    getters: {
        allcontacts(state){
            return state.allcontacts
        },
        singlecontact(state){
            return state.contact
        }
    },
    mutations: {
        allcontacts (state, payload){
            state.allcontacts = payload
        },
        addcontact (state, payload){
            state.allcontacts.push(payload)
        },
        singlecontact (state, payload){
            state.contact = payload
        },
        deletecontact (state, payload){
            state.allcontacts.splice(payload, 1);
        }
    },
    actions: {}
}