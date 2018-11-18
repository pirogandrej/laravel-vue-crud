<template>
    <div>
        <p>Name: {{singlecontact.name}} </p>
        <p>Address: {{singlecontact.address}} </p>
        <p>Email: {{singlecontact.email}} </p>
        <p>Phone: {{singlecontact.phone}} </p>
    </div>
</template>

<script>
    export default {
        created(){
            axios.get('contact/' + this.$route.params.id)
            .then(response=>{
                this.$store.commit('singlecontact', response.data);
            })
        },
        computed: {
            singlecontact(){
                return this.$store.getters.singlecontact
            }
        }
    }
</script>
