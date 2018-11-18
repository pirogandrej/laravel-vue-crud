<template>
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
            <input type="submit" class="btn btn-primary" placeholder="Edit">
        </div>
    </form>
</template>

<script>
    export default {
        created(){
            axios.get('contact/' + this.$route.params.id)
                .then(response=>{
                    this.formData.name = response.data.name,
                    this.formData.address = response.data.address,
                    this.formData.email = response.data.email,
                    this.formData.phone = response.data.phone
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
                axios.patch('updatecontact/' + this.$route.params.id, {
                    name: this.formData.name,
                    address: this.formData.address,
                    email: this.formData.email,
                    phone: this.formData.phone
                })
                .then(response=>{
                    console.log(response);
                    this.$router.push('/');
                })
            }
        }
    }
</script>
