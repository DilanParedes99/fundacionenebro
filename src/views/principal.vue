<template>
    <div class="home">
        <div class="wrapper">
            <div id="formContent">
                <div class="first">
                        <h1>Monitor T</h1> <br><br><br>
                </div>
               <div class="container">
                   <div class="row ">
                       <div class="col-6">
                           <router-link to="/usuario"><img src="@/images/usuario.png" id="icon" alt=""></router-link>
                           <h2>Usuario</h2> 
                       </div>
                       <div class="col-6 secondary">
                           <router-link to="/medidores"><img src="@/images/medidor.png" id="icon" alt=""></router-link>
                           <h2>Medidores</h2>
                       </div>
                   </div>
                    <div class="row">
                       <div class="col-6">
                           <router-link to="/notificaciones"><img src="@/images/notificacion.png" id="icon" alt=""></router-link>
                           <h2>Notificaciones</h2>
                       </div>
                       <div class="col-6 secondary">
                           <router-link to="/configuracion"><img src="@/images/configuracion.png" id="icon" alt=""></router-link>
                           <router-link to="/configuracion"><h2>Configuración</h2></router-link>
                       </div>
                   </div>
               </div>

                <footer id="formFooter">
                    <div class="row">
                        <div class="col" @click="cerrar">
                            <img src="@/images/logout.png" id="icon_sm" alt=""> <br>
                            <h2>Salir</h2>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'; 

export default {
  name: 'Principal',
  components: {
    
  },
  data() {
    return{
      
    }

  },
  methods:{
    cerrar(){
      localStorage.clear();
      this.$router.push('/')
    }
  },
  mounted () {
    axios.post('http://fundacionenebro.org.mx:3001/monitor/api/cliente/infocte')
    .then(response =>{
      if(response.data.status === 1){
          this.direccion = response.data.cliente[0].info_direccion
          this.datos = response.data.cliente[0];
      }
    }).catch(error =>{
      if(error.response.status === 500){
        this.$router.push('/signfacebook')
      }
    })
  }
}
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


a {
  color: #92badd;
  display:inline-block;
  text-decoration: none;
  font-weight: 400;
}

.secondary {
  margin-top:11px;
}

h2 {
  text-align: center;
  font-size: 1.5vh;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px; 
  color: #65acee;
}

.row {
    margin-bottom: 10px;
}

.clo-6 button {
    outline: none;
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
  transform: translateY(30%);
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
  background-color: tranparent;
  padding: 25px;
  text-align: end;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

#formFooter .row .col{
  align-items:flex-start;
  background-color:red,
} 

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

#icon {
  width:60%;
  margin-bottom: 10px;
}

#icon_sm{
  width:10%;
  margin-bottom: -20px;
}

.col-6 h2 {
    margin-top: 0;
}

</style>