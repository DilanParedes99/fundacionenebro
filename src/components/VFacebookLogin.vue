<template>
  <v-facebook-login app-id="966242223397117" version="v10.0" v-model="data" @login="login" @logout="logout" @sdk-init="init" :login-options="{scoped:'public_profile,email'}" :options="{ cookie: true, xfbml: true, autoLogAppEvents: true }"></v-facebook-login>
</template>

<script>
  import VFacebookLogin from 'vue-facebook-login-component';
  import axios from 'axios';
  import { Config } from "../../Config";
  export default {
    components: {
      VFacebookLogin,
    },
    data(){
      return{
        data:{

        },
        fb:{

        },
        scoped:{

        },
        login_social:{
          
        },

      }
    },
    methods:{
      login(response){
        if(response!= undefined){
          if(response.status == "connected"){
            this.login_social.id_user = response.authResponse.userID;
            this.login_social.access_token = response.authResponse.accessToken;

            axios.post(Config.url+'/api/cliente/loginfb',{id_user:this.login_social.id_user,access_token:this.login_social.access_token})
            .then(response=>{
              if(response.status ===200){
                localStorage.token = response.data.token;
                this.$router.push('/login/cliente')
              }
            }).catch(err =>{
              this.scope.logout();
              localStorage.clear();
              console.log("error",err);
            })
          }
        }else{
          this.scope.logout();
        }
      },

      logout(){
          localStorage.clear();
      },

      init(fb,scoped){
        this.fb = fb;
        this.scoped=scoped;


      }
    }
  }
</script>