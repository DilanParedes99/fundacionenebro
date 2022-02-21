<template>
  <div class="container">
    <div class="row">
      <!-- Icon -->
      <div class="offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-2 col-lg-8 fadeIn first mt-4">
        <img src="../images/monitor.png" class="img-fluid" alt="User Icon" />
      </div>
    </div>
    <div class="row" id="logreg-forms">
      <div class="offset-sm-1 col-md-10 offset-md-3 col-md-6 offset-lg-3 col-lg-6 social-login">
        <button class="btn facebook-btn social-btn mt-2 mb-2" type="button">
          <router-link to="/signfacebook"
            ><span
              ><i class="fab fa-facebook-square fa-2x"></i> Continue with
              Facebook</span
            ></router-link
          >
        </button> <br>
        <button class="btn google-btn social-btn mt-2 mb-2" type="button">
          <span
            ><i class="fab fa-twitter-square fa-2x"></i> Continue with
            Twitter</span
          >
        </button> <br>
        <button class="btn email-btn social-btn mt-2 mb-2" type="button">
          <span>
            <router-link to="/createaccount"
              ><i class="fas fa-envelope-square fa-2x"></i> &nbsp;Sign up with
              Email</router-link
            ></span
          >
        </button> <br>
        <a href="#" id="forgot_pswd">
          <router-link to="/login">Have you already an account?</router-link></a
        >
      </div>
    </div>
    <div class="row mt-2 p-2">
      <div class="col-md-12">
        <h5>
          By signing up, you agree with the
          <a href="#" id="forgot_pswd">Terms of Service</a> and
          <a href="#" id="forgot_pswd">Privacy Policy</a>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>


<style scoped>
#icon {
  width: 60%;
}
/* sign in FORM */
#logreg-forms {
 
  margin: 10vh auto;
}
router-link {
  text-decoration: none;
}

span {
  text-decoration: none;
  color: white;
}

#logreg-forms form {
  width: 100%;
  max-width: 410px;
  padding: 15px;
  margin: auto;
}
#logreg-forms .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

#logreg-forms .social-login {
  width: 390px;
  margin: 0 auto;
  margin-bottom: 14px;
}
#logreg-forms .social-btn {
  font-weight: 100;
  color: white;
  width: 95%;

  font-size: 0.9rem;
}

#logreg-forms a {
  display: block;
  padding-top: 10px;
  color: rgb(32, 47, 178);
}
footer {
  position: absolute;
  bottom: 3;
  width: 100%;
  height: 40px;
  color: black;
}

footer h5 {
  display: block;
  padding-top: 10px;
  font-size: 0.9rem;
}

#logreg-form .lines {
  width: 200px;
  border: 1px solid red;
}

#logreg-forms button[type="submit"] {
  margin-top: 10px;
}

#logreg-forms .facebook-btn {
  background-color: #3c589c;
  margin-left: 10px;
}

#logreg-forms .google-btn {
  background-color: #00acee;
}

#logreg-forms .email-btn {
  background-color: #ffffff;
  color: black;
  border: solid 2px #00acee;
}

#logreg-forms .form-reset,
#logreg-forms .form-signup {
  display: none;
}

#logreg-forms .form-signup .social-btn {
  width: 210px;
}

#logreg-forms .form-signup input {
  margin-bottom: 2px;
}

.form-signup .social-login {
  width: 210px !important;
  margin: 0 auto;
}
</style>