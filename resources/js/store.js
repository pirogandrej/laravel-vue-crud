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
            console.log('state.contact '+state.contact);
        },
        deletecontact (state, payload){
            console.log('payload = ' + payload);
            state.allcontacts.splice(payload, 1);
        }
    },
    actions: {}
}