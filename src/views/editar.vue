<template>
    <div class="home">
        <div class="wrapper">
            <div id="formContent">
                <div class="container">
                        <h1>Medidores</h1> <br>  
                </div>


               <div class="container">

                 <div class="container"> 
                    <div class="row">
                      <h3><b>No.Serie</b></h3>  
                    </div>  
                    <h5>{{datos.serie}}</h5>
                     <br>
                    <div class="row" v-if="info !== undefined && info !== null">
                      <h5><b>Fecha de la ultima lectura:</b> {{info.Timestamp | moment("L")}}</h5>
                    </div>
                    <div class="row">
                      <h5><b>Chip:</b>&nbsp;</h5> <h5 style="margin-left:6%"><i class="fas fa-mobile-alt"></i>&nbsp;{{datos.chip}}</h5>
                    </div>
                    <div class="row"  v-if="info !== undefined && info !== null">
                      <h5><b>Batería:</b></h5> <h5><i class="fas fa-battery-full mr-1 ml-2 "></i> {{info.Bat}}%</h5>
                    </div>
                    <div class="row" v-if="datos.capacidad_tanque">
                    <h5 v-if="datos.capacidad_tanque==='a'"><b>Capacidad del tanque: </b>&nbsp; 100 litros</h5> 
                    <h5 v-if="datos.capacidad_tanque==='b'"><b>Capacidad del tanque: </b>&nbsp; 120 litros</h5> 
                    <h5 v-if="datos.capacidad_tanque==='c'"><b>Capacidad del tanque: </b>&nbsp; 180 litros</h5> 
                    <h5 v-if="datos.capacidad_tanque==='d'"><b>Capacidad del tanque: </b>&nbsp; 300 litros</h5> 
                    <h5 v-if="datos.capacidad_tanque==='e'"><b>Capacidad del tanque: </b>&nbsp; 500 litros</h5> 
                    <h5 v-if="datos.capacidad_tanque==='f'"><b>Capacidad del tanque: </b>&nbsp; 1000 litros</h5>
                    <h5 v-if="datos.capacidad_tanque==='g'"><b>Capacidad del tanque: </b>&nbsp; 1600 litros</h5>
                    <h5 v-if="datos.capacidad_tanque==='h'"><b>Capacidad del tanque: </b>&nbsp; 2200 litros</h5>
                    <h5 v-if="datos.capacidad_tanque==='i'"><b>Capacidad del tanque: </b>&nbsp; 2800 litros</h5>
                    <h5 v-if="datos.capacidad_tanque==='j'"><b>Capacidad del tanque: </b>&nbsp; 3400 litros</h5>  
                    <h5 v-if="datos.capacidad_tanque==='k'"><b>Capacidad del tanque: </b>&nbsp; 5000 litros</h5>
                    <h5 v-if="datos.capacidad_tanque==='l'"><b>Capacidad del tanque: </b>&nbsp; No elegido</h5>     
                  </div>
                 </div>
                 
                <div class="container">
                  <div class="row">
                    <h3><b>Tanque</b></h3> <br>
                  </div>
                  <div class="row">
                    <div class="col-3"></div>
                    <div class="col-9">
                      <h5  v-if="info !== undefined && info !== null"><i class="fas fa-thermometer-three-quarters fa-2x"></i>&nbsp;{{info.Temp}}°</h5>
                      <h5  v-else><i class="fas fa-thermometer-three-quarters fa-2x"></i>&nbsp;°</h5>
                    </div>
                  </div>
                </div>

               <div class="container">
                 <div class="row">
                    <div id="tanque" >
                 </div>
               </div>
                    
                </div> <br> <br>

                    
                <div class="container">
                  <div class="row">
                    <h5><b>Uso: </b>&nbsp;{{datos.uso}}</h5>
                  </div>
                  <div class="row"> 
                    <select  name="capacidad" required v-model="id_uso" id="style">
                      <option selected v-for="lista in listausos" v-bind:key="lista.key">{{lista.descripcion}}</option>
                    </select>   
                  </div>
                </div><br>     

                <div class="container">
                  <div class="row">
                    <h5 ><b>Fecha de Fabricación: </b></h5>
                    <p> {{this.datos.fecha_fabricacion_tanque_formateada}}</p>
                  </div>
                  <div class="row">
                      <div class="col">
                        <input type="date" name="fabricacion" v-model="f_fabricacion">&nbsp;
                      </div>
                      <div class="col">
                        <input type="time" name="hora" min="18:00" max="21:00" step="3600" v-model="hora">
                      </div>
                  </div>
                </div> <br>
                
                <!--direccion -->
                <div class="container">
                    <div class="row">
                        <h5> <b>Dirección</b></h5>
                    </div>
                    <div class="row" >
                        <h5><b>Calle: </b></h5><input type="text" class="second" name="Calle" placeholder="Calle" v-model="direccion.calle">
                    </div>
                    <div class="row">
                          <h5><b>Colonia:</b></h5><input type="text" class="second" name="Colonia" placeholder="Colonia" v-model="direccion.colonia">
                    </div>
                    <div class="row">
                        <h5><b>Municipio:</b></h5><input type="text" class="second" name="Municipio" placeholder="Municipio" v-model="direccion.municipio">
                    </div>
                    <div class="row">
                        <h5><b>C.P.:</b></h5><input type="text" class="second" name="C.P." placeholder="C.P." v-model="direccion.cp">
                    </div>
                    <div class="row">
                        <h5><b>Delegación:</b></h5><input type="text" class="second" name="Delegación" placeholder="Delegación" v-model="direccion.delegacion">
                    </div>
                    <div class="row">
                        <h5> <b>Ciudad:</b></h5><input type="text" class="second" name="Ciudad" placeholder="Ciudad" v-model="direccion.ciudad">
                    </div>
                    <div class="row" id="datos">
                        <h5><b>Estado:</b></h5><input type="text" class="second" name="Estado" placeholder="Estado" v-model="direccion.estado">
                    </div>

                </div><br>

                <footer id="formFooter">
                    <div class="row">
                        <div class="col">
                            <img src="@/images/guardar.png" id="icon_sm" @click="guardar()"><br>
                            <h2 class="btn" @click="guardar()">Guardar</h2>
                        </div>
                        <div class="col">
                            <router-link to="/consumo"> <img src="@/images/consumo.png" id="icon_sm" @click="consumo(id)"> </router-link> <br>
                            <h2 @click="consumo(id)" >Consumo</h2>
                        </div>
                        <div class="col">
                            <router-link to="/medidores"><img src="@/images/regresar.png" id="icon_sm"></router-link>
                            <h2>regresar</h2>
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
import ApexCharts from 'apexcharts';
import { Config } from "../../Config";

export default {
  name: 'Medidores',
  components: {
   
  },
  data() {
    return{
        id:this.$route.params.id,
        datos:{},
        info:{},
        direccion:{},
        listausos:{},
        ventana_editar:false,

        hora:null,
        f_fabricacion:null,
        id_uso:null

    }
  },
  methods: {
    grafica(){
      
        var options = {
        chart: {
          type: "pie",
          toolbar: {
            show: false,
          },
        },
        colors: ["#6FA1F9", "#BBBBBB"],
        series: [Number(this.datos.info_Actual.Gas), 100 - Number(this.datos.info_Actual.Gas)],
        labels: ["Lleno", "Vacio"],
      };
      
      var chart = new ApexCharts(document.querySelector("#tanque"), options);
      
      chart.render()
    },
    consumo(id){
        this.$router.push({name:'Consumo',params:{id:id}});
    },
    guardar(){
      if(this.f_fabricacion != null){
        this.f_fabricacion = this.f_fabricacion + " " + this.hora + ":00"
        axios.post(Config.url+'/api/medidor/edit/fabricacion',
          {id_medidor:this.id,fabricacion:this.f_fabricacion})
          .then(response =>{
              response;
          })
      }

      if(this.id_uso != null){
        if(this.id_uso == 'Domestico'){
          this.id_uso = 1
        }else if(this.id_uso == 'Comercial'){
          this.id_uso=2
        }

        axios.post(Config.url+'/api/medidor/edit/tipouso',
          {id_medidor:this.id,id_uso:this.id_uso})
          .then(response =>{
              response;
          })

      }

      axios.post(Config.url+'/api/medidor/edit/direccion',
          {id_medidor:this.id,calle:this.direccion.calle,colonia:this.direccion.colonia,cp:this.direccion.cp,ciudad:this.direccion.ciudad, municipio:this.direccion.municipio,delegacion:this.direccion.delegacion,estado:this.direccion.estado}
          )
          .then(response =>{
              response;
              this.ventana_editar = false;
          })   
      },
    },  
           
  mounted(){
    console.log(this.id)
    axios.post(Config.url+'/api/medidor/info',{id_medidor:this.id})
    .then(response =>{
        this.datos = response.data.medidor
        this.info = response.data.medidor.info_Actual
        this.direccion = response.data.medidor.tanque_direccion
        
        this.grafica();
        
    })

    axios.get(Config.url+'/api/medidor/info/usos')
      .then(response=>{
        this.listausos=response.data.listausos
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

h3{
    text-align: left;
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

#form_direccion {
    background: rgb(219, 218, 218);
    padding: 40px;
    top: 47%;
    position:absolute;
    left: 0;
    width:100%;
    height: 40%;
    -webkit-box-shadow: 0 4px 5px 0 rgba(5, 5, 5, 0.4);
     box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.4);
}
#datos {
    border-bottom: 1px solid black;

}
h6 {
    text-align: left;
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
  width:30%;
  margin-bottom: -20px;
}

#icono_medidores{
     width:10%;
     margin-top: 30px;
}
header{
    border: 3px solid rgb(0, 0, 0);
    height: 30px;
    width: 300px;
    text-align: center;
    
    }

.grafico{
    margin: 1rem auto;
    width: 400px;
    height: 400px; 
    border-radius: 50%;
    background-color: red;
    position:relative;
    border:4px solid #000;
    }
.recorte{ 
    clip: rect(0px,200px,200px,0px);
    height: 100%;
    position: absolute;
    width: 100%;
    }
.quesito{
    border-radius: 50%;
    height: 100%;
    width: 100%;
    background-color:blue;
    
    }
#porcentaje{
    transform: rotate(0deg);
    }
#style,  input[type=text], input[type=datetime-local]{
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
  padding: 5px 70px;
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
  width: 55%;
  height:45%;
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