<template>
    <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Детальная информация о пользователе</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closemodal()">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Name: {{singlecontact.name}} </p>
                        <p>Address: {{singlecontact.address}} </p>
                        <p>Email: {{singlecontact.email}} </p>
                        <p>Phone: {{singlecontact.phone}} </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closemodal()">Ok</button>
                    </div>
                </div>
            </div>
        </div>

        <!--<p>Name: {{singlecontact.name}} </p>-->
        <!--<p>Address: {{singlecontact.address}} </p>-->
        <!--<p>Email: {{singlecontact.email}} </p>-->
        <!--<p>Phone: {{singlecontact.phone}} </p>-->
    </div>
</template>

<script>
    export default {
        created(){
            axios.get('contact/' + this.$route.params.id)
            .then(response=>{
                this.$store.commit('singlecontact', response.data);
                $('#exampleModal').modal('show');
             })
        },
        computed: {
            singlecontact(){
                return this.$store.getters.singlecontact
            }
        },
        methods: {
            closemodal(){
                this.$router.push('/');
            }
        }
    }
</script>
