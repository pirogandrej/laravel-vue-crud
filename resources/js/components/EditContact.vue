<template>

    <div>

        <all-contacts></all-contacts>

        <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Изменить данные</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closemodal()">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="updatecontact">
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" name="name"  placeholder="Name" v-model="formData.name">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" name="email"  placeholder="Email" v-model=" formData.email">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="address" name="address"  placeholder="Address" v-model="formData.address">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="phone" name="phone"  placeholder="Phone" v-model="formData.phone">
                            </div>
                            <div class="form-group">
                                <!--<input type="submit" class="btn btn-primary" placeholder="Edit">-->
                                <button type="submit" class="btn btn-primary">Изменить</button>
                                <button type="button" class="btn btn-primary" @click="closemodal()">Отмена</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AllContacts from './AllContacts.vue';
    export default {
        components: {
            AllContacts
        },
        created(){
            axios.get('contacts/' + this.$route.params.id)
                .then(response=>{
                    this.formData.name = response.data.name,
                    this.formData.address = response.data.address,
                    this.formData.email = response.data.email,
                    this.formData.phone = response.data.phone,
            $('#editModal').modal('show')
                })
        },
        data(){
            return {
                formData: {
                    name: '',
                    email: '',
                    address: '',
                    phone: ''
                }
            }
        },
        methods:{
            updatecontact(){
                $('#editModal').modal('hide');
                axios.patch('contacts/' + this.$route.params.id, {
                    name: this.formData.name,
                    address: this.formData.address,
                    email: this.formData.email,
                    phone: this.formData.phone
                })
                .then(response=>{
                    console.log(response);
                    this.$router.push('/');
                })
            },
            closemodal(){
                $('#editModal').modal('hide');
                this.$router.push('/');
            }
        }
    }
</script>
