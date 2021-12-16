<template>
    <div class="vue-tempalte">
        <div class="container">
        <form v-on:submit.prevent="submit">
            <h3>Sign In</h3>
 
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="form.email"/>
            </div>
 
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="form.password"/>
            </div>
            <br>
 
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
 
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
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

                email:'',
                password:''
           
           
            }   
        };
    },

    methods:{
        submit:function(){
        return axios
      .post("http://localhost:8000/api/login",
        this.email,this.password)
      .then(response=>{
        console.log(response);
      }).catch(err => {
        alert(err);
      }); 
        }
    }
}
</script>