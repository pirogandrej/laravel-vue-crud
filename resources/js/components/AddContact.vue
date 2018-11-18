<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary mb-3" data-toggle="modal" data-target="#exampleModal" style="float: left">
            Новый пользователь
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Добавить новый контакт</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addcontact">
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
                                <input type="submit" class="btn btn-primary" placeholder="Add">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
                        <!--<button type="button" class="btn btn-primary">Save changes</button>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created(){
            this.formData.name = '';
            this.formData.address = '';
            this.formData.email = '';
            this.formData.phone = '';
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
            addcontact(){
                axios.post('addcontact', {
                    name: this.formData.name,
                    address: this.formData.address,
                    email: this.formData.email,
                    phone: this.formData.phone
                })
                .then(response => {
                    this.$store.commit('addcontact', response.data);
                    $('#exampleModal').modal('hide');
                    this.$router.push('/');
                    this.formData.name = '';
                    this.formData.address = '';
                    this.formData.email = '';
                    this.formData.phone = '';
                })
            }
        }
    }
</script>
