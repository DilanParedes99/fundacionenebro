<template>
    <div class="home">
        <div class="wrapper">
            <div id="formContent">
                <div>
                        <h1>Configuración</h1> <br>
                       
         <div class="container">
                        <div class=" container form-check" style="font-weight:bold; position:relative; left:-15%;">
                          <input  class="form-check-input" type="checkbox" v-model="datos.activa" @click="activatodo()">
                          <label >
                              Activar Notificaciones
                          </label>    
                        </div>
                            <br>
                        <!-- Niveles de bateria-->
                        <div class="container form-check" v-if="datos.activa" >
                          <input class="form-check-input" type="checkbox" v-model="datos.bateria" style="left: 25%" @click="desactivabateria(datos.bateria)">
                          <label style="position:relative; left:-17%;">
                              Bateria Baja 
                          </label> 
                          <br>
                            <h6><b>Min. de carga</b> {{datos.bateria}}%</h6>
                            <input type="range" v-model="datos.bateria" @click="activabateria()">
                        </div>

                        <!-- Niveles de gas-->
                        <div class="form-check" v-if="datos.activa" >
                          <input class="form-check-input" type="checkbox" v-model="datos.nivelgas" style="left: 25%" @click="activarnivel(datos.nivelgas)">
                          <label style="position:relative; left:-10%;">
                              Niveles Bajos de Gas
                          </label>    
                            <h6 ><b>% Min. de capacidad</b> {{datos.capminima}}%</h6>                       
                            <input type="range" v-model="datos.capminima">
                        </div>
                            <br>

                          <!-- temperatura-->
                         <div class="container form-check" v-if="datos.activa" >
                          <input class="form-check-input" type="checkbox" v-model="datos.temperatura" style="left: 25%" @click="desactivatemperatura(datos.temperatura)">
                          <label style="position:relative; left:-17%;" >
                              Temperatura
                          </label>   <br>  
                            <h6 ><b>Temperatura </b> {{datos.temperatura}}°  </h6>
                            <input type="range" v-model="datos.temperatura" @click="activatemperatura()"> 
                                             
                          </div>
                        <br>
                        <!-- recarga de gas-->
                        <div class="form-check" v-if="datos.activa" style="position:relative; left:-52px; top:-18px;">
                          <input class="form-check-input" type="checkbox" v-model="datos.recarga" @click="activarrecarga(datos.recarga)">
                          <label>
                              Recargas de Gas
                          </label>    
                        </div>

                    <br>
                    <!-- notificaciones varias-->
                        <div  style="position:relative; left:-40px; top:-30px;">
                          <div class="form-check" v-if="datos.activa">
                            <input class="form-check-input" type="checkbox" v-model="ActivarVarias">
                            <label style="position:relative;">
                                Notificaciones Varias
                            </label>                            
                          </div>
                  <br>
                          <div v-if="activa">
                            <div class="form-check" v-if="ActivarVarias" style="position:relative; left:30px; top:-15px;">
                              <input class="form-check-input" type="checkbox" v-model="ActivarDatos">
                              <label>
                                Recepción de Datos
                              </label>              
                            </div>

                            <div class="form-check" v-if="ActivarVarias" style="position:relative; left:30px; top:-15px;">
                              <input class="form-check-input" type="checkbox" v-model="ActivarMal">
                              <label>
                                Mal Funcionamiento
                              </label>      
                            </div>                        


                            <div class="form-check" v-if="ActivarVarias" style="position:relative; left:5px; top:-15px;">
                              <input class="form-check-input" type="checkbox" v-model="ActivarPromociones">
                              <label>
                                Promociones
                              </label>                           
                            </div>
                          </div>
                        </div>
                </div>
                  <!-- footer-->
                <footer id="formFooter" >
                    <div class="row">
                        <div class="col">
                            <router-link to="/login/cliente"><img src="@/images/regresar.png" id="icon_sm"></router-link>
                            <router-link to="/login/cliente"><h2>regresar</h2></router-link>
                        </div>
                    </div>
                </footer>
                </div>
            </div>
        </div>
    </div>
        
</template>

<script>

import axios from 'axios'

export default {
    name: "App",
    data() {
        return {
            activa:false,
            BateriaMedidor:false,
            ActivarBajoMedidor:false,
            ActivarBajoGas:false,
            ActivarTemperatura:false,
            ActivarRecargasGas:false,
            ActivarVarias:false,
            ActivarDatos:true,
            ActivarMal:true,
            ActivarPromociones:true,

            datos:{}
            }
          },
    methods: {
      activatodo(){
        if(this.datos.activa == 0){
          axios.post('http://fundacionenebro.org.mx:3001/monitor/api/configuracion/activar')
          .then(response =>{
              response
          })
        }else{
          axios.post('http://fundacionenebro.org.mx:3001/monitor/api/configuracion/desactivar')
          .then(response =>{
            response
          })
        }
      },
      activabateria(){
        this.datos.bateria = Number(this.datos.bateria)
        axios.post('http://fundacionenebro.org.mx:3001/monitor/api/configuracion/bateria',{bateria:this.datos.bateria})
        .then(response =>{
          response;
        })
      },
      activatemperatura(){
        this.datos.temperatura = Number(this.datos.temperatura)
        axios.post('http://fundacionenebro.org.mx:3001/monitor/api/configuracion/temperatura',{temperatura:this.datos.temperatura})
        .then(response =>{
          response
        })
      },
      desactivabateria(datos){
        if(datos != 0 || datos != false){
          datos=0;
          axios.post('http://fundacionenebro.org.mx:3001/monitor/api/configuracion/bateria',{bateria:datos})
          .then(response =>{
          response;
          this.datos.bateria=datos;
        })
        }else{
          datos=1;
           axios.post('http://fundacionenebro.org.mx:3001/monitor/api/configuracion/bateria',{bateria:datos})
          .then(response =>{
          response;
          this.datos.bateria = datos;
        })
        }
      },
      desactivatemperatura(datos){
        if(datos != 0 || datos != false){
          datos=0;
          axios.post('http://fundacionenebro.org.mx:3001/monitor/api/configuracion/temperatura',{temperatura:datos})
          .then(response =>{
          response;
          this.datos.temperatura=datos;
        })
        }else{
          datos=1;
           axios.post('http://fundacionenebro.org.mx:3001/monitor/api/configuracion/temperatura',{temperatura:datos})
          .then(response =>{
          response;
          this.datos.temperatura = datos;
        })
        }
      },
      activarrecarga(datos){
        if(datos != 0 || datos != false){
          datos=0;
          axios.post('http://fundacionenebro.org.mx:3001/monitor/api/configuracion/recarga',{recarga:datos})
          .then(response =>{
          response;
          this.datos.recarga=datos;
        })
        }else{
          datos=1;
           axios.post('http://fundacionenebro.org.mx:3001/monitor/api/configuracion/recarga',{recarga:datos})
          .then(response =>{
          response;
          this.datos.recarga = datos;
        })
        }
      },
      activarnivel(datos){
        this.datos.capminima = Number(this.datos.capminima)
        if(datos != 0 || datos != false){
          datos=0;
          axios.post('http://fundacionenebro.org.mx:3001/monitor/api/configuracion/gas',{nivelgas:datos,capminima:this.datos.capminima})
          .then(response =>{
          response;
          this.datos.nivelgas=datos;
        })
        }else{
          datos=1;
           axios.post('http://fundacionenebro.org.mx:3001/monitor/api/configuracion/gas',{nivelgas:datos,capminima:this.datos.capminima})
          .then(response =>{
          response;
          this.datos.nivelgas = datos;
        })
        }
      }
    } ,     
    mounted() {
      axios.get('http://fundacionenebro.org.mx:3001/monitor/api/configuracion')
      .then(response =>{
        this.datos= response.data.configuracion
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


h2 {
  text-align: center;
  font-size: 1.5vh;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px; 
  color: #000000;
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
#icon_sm{
  width:20%;
  margin-bottom: -20px;
}

#icono_medidores{
     width:10%;
     margin-top: 30px;
}

input[type=range], input[type=number]{
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 60%;
  height: 20%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
</style>