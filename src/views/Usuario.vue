<template>
    <div class="home">
        <div class="wrapper">
            <div id="formContent">
                <div class="first">
                        <h3>{{datos.nombre}}{{datos.apellido_paterno}}&nbsp;{{datos.apellido_materno}}</h3> <br>
                        
                            <img src="@/images/usuario.png" id="icono_usuario" alt="icono de usuario"> <br><br><br>
                        
                        <h5>Usuario desde {{direccion.createdAt}} </h5>
                </div><br>
               <div class="container">
                   <div class="row">
                       <h5><b>Usuario</b></h5>
                   </div>
                   <div class="row"  id="datos">
                       <h5><i class="far fa-envelope"></i>&nbsp;{{datos.email}}</h5>
                   </div>
                   <div class="row" id="datos">
                       <div class="col" style="text-align: left;"> 
                           <h5><i class="fas fa-mobile-alt"></i>&nbsp;{{datos.telefono}}</h5>
                       </div>
                       <div class="col">
                           <button class="btn social-btn" @click="ventana=false,ventana_editar=false, ventana_telefono=true">&nbsp;Editar</button><br><br>
                       </div>
                   </div>
               </div> <br>

               <div class="container" v-if="direccion">
                   <div class="row">
                       <h5> <b>Dirección</b></h5>
                   </div>
                   <div class="row" >
                       <h5><b>Calle: </b> &nbsp;{{direccion.calle}} </h5>
                   </div>
                   <div class="row">
                        <h5><b>Colonia:</b>&nbsp;{{direccion.colonia}}</h5>
                   </div>
                   <div class="row">
                       <h5><b>C.P.:</b>&nbsp;{{direccion.cp}} </h5>
                   </div>
                   <div class="row">
                       <h5> <b>Ciudad:</b>&nbsp;{{direccion.ciudad}}</h5>
                   </div>
                   <div class="row" id="datos">
                       <h5><b>Estado:</b>&nbsp;{{direccion.estado}}</h5>
                   </div>
               </div><br>

               <div class="container" id="datos">
                   <div class="row">
                       <h5><b>Change password</b></h5>
                   </div>
                   <div class="row">
                        <button class="btn social-btn" @click="ventana=true,ventana_editar=false, ventana_telefono=false"><i class="fas fa-unlock-alt"></i>&nbsp;Enter new password</button><br><br>
                   </div>
               </div>

                <!-- Ventana oculta hasta que el usuario hace click en modificar telefono-->
                <form v-if="ventana_telefono" id="form_password">
                    <h5>Telefono:</h5>
                    <div class="row">
                        <input type="text" class="second" name="Contraseña" placeholder="Nuevo telefono" required v-model="telefono">
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="btn bg-primary" type="button" @click="ventana_telefono=false">Cancelar</button>
                        </div> <br><br>
                        <div class="col">
                            <button class="btn bg-primary" type="button" @click="modificaTelefono" >Guardar</button>
                        </div>
                    </div>
                </form>

                <!-- Ventana oculta hasta que el usuario hace click en modificar contrasña -->
                <form v-if="ventana" id="form_password">
                    <h5>Password:</h5>
                    <div class="row">
                        <input type="password" class="second" name="Contraseña" placeholder="Nueva Contraseña" required v-model="contraseña">
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="btn bg-primary" type="button" @click="ventana=false">Cancelar</button>
                        </div> <br><br>
                        <div class="col">
                            <button class="btn bg-primary" type="button" @click="editar" >Guardar</button>
                        </div>
                    </div>
                </form>

                <!-- ventana en caso de no haber direccion registrada -->
                <form v-if="direccionno" id="direccionno">
                    <h3>No olvides registrar tu dirección</h3> <br>
                    <div class="row">
                        <div class="col">
                            <button class="btn bg-primary" type="button" @click="direccionno=false">Ignorar</button>
                        </div>
                        <div class="col">
                            <button class="btn bg-primary" type="button" @click="direccionno=false, ventana_editar=true">Llenar dirección</button>
                        </div>
                    </div>
                </form>

                <!-- Ventana oculta hasta que el usuario hace click en editar -->
                <form v-if="ventana_editar" id="form_direccion">
                    <h5>Dirección:</h5>
                    <div class="row">
                        <input type="text" class="second" name="Calle" placeholder="Calle" v-model="direccion.calle">
                        <input type="text" class="second" name="Colonia" placeholder="Colonia" v-model="direccion.colonia">
                        <input type="text" class="second" name="C.P." placeholder="C.P." v-model="direccion.cp">
                        <input type="text" class="second" name="Ciudad" placeholder="Ciudad" v-model="direccion.ciudad">
                        <input type="text" class="second" name="Municipio" placeholder="Municipio" v-model="direccion.municipio">
                        <input type="text" class="second" name="Delegación" placeholder="Delegación" v-model="direccion.delegacion">
                        <input type="text" class="second" name="Estado" placeholder="Estado" v-model="direccion.estado">
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="btn bg-primary" type="button" @click="ventana_editar=false">Cancelar</button>
                        </div><br><br>
                        <div class="col">
                            <button class="btn bg-primary" type="button" @click="modificar" >Guardar</button>
                        </div>
                    </div>
                </form>

                <footer id="formFooter">
                    <div class="row">
                        <div class="col">
                            <img @click="ventana=false,ventana_editar=true, ventana_telefono=false" src="@/images/editar.png" id="icon_sm" alt=""><br>
                            <h2 @click="ventana=false,ventana_editar=true, ventana_telefono=false">Editar</h2>
                        </div>
                        <div class="col">
                            <router-link to="/login/cliente"><img src="@/images/regresar.png" id="icon_sm" alt=""></router-link>
                            <router-link to="/login/cliente"><h2>regresar</h2></router-link>
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
  name: 'Usuario',
  components: {
    
  },
  data (){
    
      return{
            datos:{},
            direccion:{},
            telefono:null,
            ventana:false,
            ventana_telefono:false,
            ventana_editar:false,
            contraseña:null,
            direccionno:false,
      }
  },
  methods: {

      modificaTelefono(){
          if(this.telefono != null){
              axios.post('http://fundacionenebro.org.mx:3001/monitor/api/cliente/edit/telefono',{telefono:this.telefono})
              .then(response =>{
                  response
                  this.ventana_telefono=false;
              })
          }
      },
      editar(){
          if(this.contraseña != null){
              axios.post('http://fundacionenebro.org.mx:3001/monitor/api/cliente/edit/pass',{password:this.contraseña})
              .then(response =>{
                  response;
                this.ventana=false;
              })
          }
      },
      modificar(){
          axios.post('http://fundacionenebro.org.mx:3001/monitor/api/direccion/cliente/edit',
          {calle:this.direccion.calle,colonia:this.direccion.colonia,cp:this.direccion.cp,ciudad:this.direccion.ciudad, municipio:this.direccion.municipio,delegacion:this.direccion.delegacion,estado:this.direccion.estado}
          )
          .then(response =>{
              response;
              this.ventana_editar = false;
              
          }).catch(error =>{
              console.log("error: ",error)
              if(error.response.status == 400){
                  alert("ha ocurrido un error")
              }
          })
      },
      llenado(){
          this.direccionno = true;
      }
  },
  mounted () {
    axios.post('http://fundacionenebro.org.mx:3001/monitor/api/cliente/infocte')
    .then(response =>{
      if(response.data.status === 1){
          if(response.data.cliente[0].info_direccion == null){
              this.llenado();
          }else{
              this.direccion = response.data.cliente[0].info_direccion
          }
          this.datos = response.data.cliente[0];
      }

    }).catch(error =>{
        console.log(error.response)
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

.first {
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;
}


#form_password {
    background: rgb(219, 218, 218);
    padding: 40px;
    top: 60%;
    position:absolute;
    left: 0;
    width:100%;
    height: 20%;
    -webkit-box-shadow: 0 4px 5px 0 rgba(5, 5, 5, 0.4);
     box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.4);
}

#direccionno {
    background: rgb(219, 218, 218);
    padding: 40px;
    top: 40%;
    position:absolute;
    left: 0;
    width:100%;
    height: 30%;
    -webkit-box-shadow: 0 4px 5px 0 rgba(5, 5, 5, 0.4);
     box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.4);
}

#form_direccion {
    background: rgb(219, 218, 218);
    padding: 40px;
    top: 15%;
    position:absolute;
    left: 0;
    width:100%;
    height: 68%;
    -webkit-box-shadow: 0 4px 5px 0 rgba(5, 5, 5, 0.4);
     box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.4);
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
#datos {
    border-bottom: 1px solid black;

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
  text-align: center;
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
  width:20%;
  margin-bottom: -20px;
}

#icono_usuario{
     width:10%;
     margin-top: 30px;
}

.col-6 h2 {
    margin-top: 0;
}

input[type=text], input[type=password] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 100%;
  height: 50%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
button{
     width: 100%;
     border: hidden;
     background: rgb(255, 255, 255);
     color:rgb(0, 0, 0);
     font-family: Verdana, Geneva, Tahoma, sans-serif;
     font-weight: bold;
    }
.social-btn{
  background-color: white;
  border: none;
  color: black;
  padding: 15px 80px;
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
  width: 85%;
  height:35%;
  -webkit-box-shadow: 0 4px 5px 0 rgba(5, 5, 5, 0.4);
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}  

.social-btn:hover{
  background-color: #5fbae9;
}

.social-btn:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

</style>