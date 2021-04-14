<template>
  <div class="home">
    <div id="logreg-forms">

          <!-- Icon -->
        <div class="fadeIn first">
          <img src="../images/monitor.png" id="icon" alt="User Icon" />
        </div>

        <div class="social-login">
            <h1 class="h3 mb-3 font-weight-normal" style="text-align: center"> Sign up</h1>
        <p style="text-align:center"> Create a free account to join the Acme community!  </p> <br><br>

            <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Continue with Twitter</span> </button> <br><br>
            
            <a href="#" id="forgot_pswd">Sign up with Email</a> <br><br><br><br>
        </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'SignTwitter',
  components: {

  }
}
</script>


<style scoped>
#icon {
  width:80%;
  transform: translateY(-50%);
}
/* sign in FORM */
#logreg-forms{
    width:412px;
    height:430px;
    margin:25vh auto;
    background-color:#f3f3f3;
    border-radius: 20px;
}

#logreg-forms .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}

#logreg-forms .social-login{
    width:390px;
    margin:0 auto;
    margin-bottom: 14px;
    transform: translateY(-60%);
}
#logreg-forms .social-btn{
    font-weight: 100;
    color:white;
    width:380px;
    height: 50px;
    font-size: 0.9rem;
}

#logreg-forms a{
    display: block;
    padding-top:10px;
    color:rgb(32, 47, 178);
}


#logreg-forms button[type="submit"]{ margin-top:10px; }

#logreg-forms .facebook-btn{  background-color:#00acee; }

#logreg-forms .form-reset, #logreg-forms .form-signup{ display: none; }

#logreg-forms .form-signup .social-btn{ width:210px; }

#logreg-forms .form-signup input { margin-bottom: 2px;}

.form-signup .social-login{
    width:210px !important;
    margin: 0 auto;
}

/* Mobile */

@media screen and (max-width:500px){
    #icon {
        width:90%;
    }
    
    #logreg-forms{
        width:300px;
    }
    
    #logreg-forms  .social-login{
        width:200px;
        margin:0 auto;
        margin-bottom: 10px;
        transform: translateY(-50%);
    }
    #logreg-forms  .social-btn{
        font-size: 1rem;
        font-weight: 100;
        color:white;
        width:200px;
        height: 40px;
        
    }

    #logreg-forms .social-btn:nth-child(1){
        margin-bottom: 5px;
    }
    #logreg-forms .social-btn span{
        display: none;
    }
    #logreg-forms  .facebook-btn:after{
        content:'Continue with Facebook';
    }
    
}

</style>