<template>
  <div class="home">
    <div class="wrapper">
      <div id="formContent">
        <div class="first">
          <h3>Create an Account</h3>
          <br /><br /><br />
        </div>

        <!-- Login Form -->
        <form v-on:submit.prevent="registro">
          <input
            type="text"
            id="email"
            class="second"
            name="Nombre"
            placeholder="Nombre"
            required
            v-model="nombre"
          />
          <input
            type="text"
            id="email"
            class="second"
            name="Apellido_paterno"
            placeholder="Apellido paterno"
            required
            v-model="apellido_paterno"
          />
          <input
            type="text"
            id="email"
            class="second"
            name="Apellido_materno"
            placeholder="Apellido Materno"
            required
            v-model="apellido_materno"
          />
          <input
            type="text"
            id="email"
            class="second"
            name="Telefono"
            placeholder="Telefono"
            required
            v-model="telefono"
          />
          <input
            type="email"
            id="email"
            class="second"
            name="Correo"
            placeholder="Correo"
            required
            v-model="email"
          />
          <br />
          <input
            type="password"
            id="email"
            class="second"
            name="Contraseña"
            placeholder="Contraseña"
            required
            v-model="password"
          />
          <br /><br />
          <div class="container" v-if="datos_invalidos">
            <div class="row" id="datos_invalidos">
              <h5>Datos Invalidos</h5>
              <br />
            </div>
          </div>
          <input type="submit" class="fourth" value="Sign Up" />
          <h5>
            By signing up, you agree with the
            <a href="#" id="forgot_pswd">Terms of Service</a> and
            <a href="#" id="forgot_pswd">Privacy Policy</a>
          </h5>
        </form>
        <br /><br /><br />
        <button class="btn email-btn social-btn" type="button">
          <router-link to="/login">Have you already an account?</router-link>
        </button>
        <!-- Remind Passowrd -->
        <div id="formFooter"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import swal from "sweetalert";
import { Config } from "../../Config";
export default {
  name: "CreateAccount",
  components: {},
  data() {
    return {
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      telefono: "",
      password: "",
      email: "",
      datos_invalidos: false,
    };
  },
  methods: {
    registro() {
      axios
        .post(Config.url+"/api/cliente", {
          nombre: this.nombre,
          apellido_paterno: this.apellido_paterno,
          apellido_materno: this.apellido_materno,
          telefono: this.telefono,
          password: this.password,
          email: this.email,
        })
        .then((response) => {
          response;
          this.$router.push("/api/cliente/login");
        })
        .catch((err) => {
          if (err.response.status === 409) {
            this.datos_invalidos = true;
          }
          if (err.response.status === 500) {
            this.datos_invalidos = true;
          }
          if (err.response.status === 401) {
            this.datos_invalidos = true;
          }
          if (err.response.status === 400) {
            this.datos_invalidos = true;
            swal("Crear cuenta", "" + err.response.data.message, "error");
          }
        });
    },
  },
};
</script>

<style scoped>
/* BASIC */

html {
  background-color: #56baed;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}
.social-btn {
  font-weight: 100;
  color: white;
  width: 95%;
  font-size: 0.9rem;
}

.facebook-btn {
  background-color: #3c589c;
  margin-left: 10px;
}

.google-btn {
  background-color: #00acee;
}

a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

.fourth {
  margin-bottom: 0 auto;
}
#datos_invalidos {
  color: RGBA(255, 13, 17, 0.5);
  background-color: RGBA(255, 13, 17, 0.2);
  display: inline-block;
  width: 90%;
  height: 30px;
  border-radius: 3px;
  font-size: 1rem;
}

h5 {
  adding-top: 0px;
  font-size: 0.9rem;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}
.second {
  border: solid 3px black;
  height: 10px;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
  transform: translateY(10%);
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  text-align: center;
}

#formFooter {
  background-color: #fff;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/

input[type="button"],
input[type="submit"],
input[type="reset"] {
  background-color: #e01a1a;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  width: 85%;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: #ff5252;
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="email"],
input[type="password"],
input[type="text"] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="email"]:placeholder,
input[type="password"]:placeholder {
  color: #cccccc;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}

/* OTHERS */

*:focus {
  outline: none;
}

#icon {
  width: 60%;
}
</style>