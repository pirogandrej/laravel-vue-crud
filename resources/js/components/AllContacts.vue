<template>
    <div class="container-fluid" style="width: 100vw; height: 80vh;overflow-y: auto;">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <add-contact></add-contact>
                <table class="table table-striped">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                    <tr v-for="(contact, index) in allcontacts">
                        <td>{{ contact.id }}</td>
                        <td>{{ contact.name }}</td>
                        <td>{{ contact.address }}</td>
                        <td>{{ contact.email }}</td>
                        <td>{{ contact.phone }}</td>
                        <td>
                            <router-link :to="{name: 'single-contact', params: {id: contact.id}}" class="btn btn-primary">Show</router-link>
                            <router-link :to="{name: 'edit-contact', params: {id: contact.id}}" class="btn btn-info">Edit</router-link>
                            <button class="btn btn-danger" @click="deletecontact(contact.id,index)">Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import AddContact from './AddContact.vue';
    export default {
        components: {
            AddContact
        },
        created(){
            axios.get('contacts')
                .then(response => {
                    this.$store.commit('allcontacts', response.data);
            })
        },
        computed: {
            allcontacts(){
                return this.$store.getters.allcontacts
            }
        },
        methods: {
            deletecontact(id, index){
                if(confirm('Удалить запись ?')){
                    axios.delete('contacts/' + id)
                    .then(response => {
                        this.$store.commit('deletecontact', index);
                    })
                }
            }
        },
        mounted() {
        }
    }
</script>
