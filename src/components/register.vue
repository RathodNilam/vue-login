<template>
    <div class="vue-tempalte">
        <div class="container">
        <form v-on:submit.prevent="submit">
            <h3>Sign Up</h3>
 
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg" v-model="form.username"/>
            </div>
 
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="form.email" />
            </div>
 
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="form.password" />
            </div>
            <br>
 
            <button type="submit" class="btn btn-dark btn-lg btn-block">SignUp</button>
            <br><br>            <p class="forgot-password text-right">
                Already registered 
                <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>     
    </div>
</template>
 
<script>
import axios from "axios";
export default{
    data:function(){
        return{
            form:{
            username:'',
            email:'',
            password:'',
           
            }   
        };
    },

    methods:{
        submit:function(){
        return axios
      .post("http://localhost:8000/api/addpost",this.form)
      .then(response=>{
        console.log(response);
        this.form=response.data;
      }).catch(err => {
        alert(err);
      }); 
        }
    }
}
</script>