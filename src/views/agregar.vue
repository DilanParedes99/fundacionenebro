<template>
    <div class="home">
        <div class="wrapper">
            <div id="formContent">
                <div class="">
                        <h1> <b>Medidores</b>  </h1> <br>   
                </div>

                <div v-if="datos_invalidos" class="container">
                      <div class="row" id="datos_invalidos">
                        <h5>Datos Invalidos</h5> <br>
                      </div>
                </div>
                <form>
                  
                 <div class="container">   
                   <div class="row">
                     <h5><b>No.Serie</b></h5> 
                   </div>
                   <div class="row"> 
                    <input type='text' placeholder="Numero de serie" required v-model="numserie">
                   </div>
                </div> <br>

                <div class="container">
                  <div class="row">
                    <h5><b>Uso</b></h5>
                  </div>
                  <div class="row"> 
                    <select  name="capacidad" required v-model="id_uso" id="style">
                      <option selected required v-for="lista in listausos" v-bind:key="lista.key" :value="lista.id">{{lista.descripcion}}</option>
                    </select>  
                  </div>
                </div><br>

                <div class="container">
                  <div class="row">
                    <h5 ><b>Fecha de Fabricación</b></h5>
                  </div>
                  <div class="row">
                      <div class="col">
                        <input type="date" name="fabricacion" required v-model="f_fabricacion">&nbsp;
                      </div>
                      <div class="col">
                        <input type="time" name="hora" min="18:00" max="21:00" step="3600" v-model="hora">
                      </div>
                      
                  </div>
                </div> <br>

                <div class="container">
                  <div class="row">
                    <h5><b>Ubicación</b></h5>
                  </div>
                  <div class="row">
                    <input type="text" class="second" name="Calle" required placeholder="Calle" v-model="calle">
                    <input type="text" class="second" name="Colonia" required placeholder="Colonia" v-model="colonia">
                    <input type="text" class="second" name="C.P." required placeholder="C.P." v-model="cp">
                    <input type="text" class="second" name="Ciudad" required placeholder="Ciudad" v-model="ciudad">
                    <input type="text" class="second" name="Municipio" required placeholder="Municipio" v-model="municipio">
                    <input type="text" class="second" name="Delegación" required placeholder="Delegación" v-model="delegacion">
                    <input type="text" class="second" name="Estado" required placeholder="Estado" v-model="estado">
                  </div>
                </div>
                </form>

                <footer id="formFooter">
                    <div class="row">
                        <div class="col">
                            <img @click="agregar" src="@/images/guardar.png" id="icon_sm"><br>
                            <h2 @click="agregar">Guardar</h2>
                        </div>
                        <div class="col">
                            <router-link to="/medidores"><img src="@/images/regresar.png" id="icon_sm"></router-link>
                            <router-link to="/medidores"><h2>regresar</h2></router-link>
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
  name: 'Medidores',
  components: {
   
  },
  data() {
    return{
        numserie:null,
        id_uso:null,
        f_fabricacion:null,
        calle:null,
        colonia:null,
        cp:null,
        ciudad:null,
        municipio:null,
        delegacion:null,
        estado:null,

        listausos:null,

        datos_invalidos:false,
        hora:null
    }
  },
  methods: {
    agregar(){
      
      this.f_fabricacion = this.f_fabricacion + " " + this.hora + ":00";

      axios.post('http://fundacionenebro.org.mx:3001/monitor/api/medidor/',
      {numserie:this.numserie,id_uso:this.id_uso,f_fabricacion:this.f_fabricacion, calle:this.calle, 
      colonia:this.colonia, cp:this.cp, ciudad:this.ciudad, municipio:this.municipio, delegacion:this.delegacion, estado:this.estado})
      .then(response =>{
        response
      }).catch(err =>{
        if(err.response.status === 409){
          this.datos_invalidos= true;
        }
        if(err.response.status === 500){
          this.datos_invalidos= true;
        }
      })
    }
  },
  mounted(){
      axios.get('http://fundacionenebro.org.mx:3001/monitor/api/medidor/info/usos')
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

#datos_invalidos{
  color:RGBA(255,13,17,0.5);
  background-color: RGBA(255,13,17,0.2);
  display:inline-block;
  width:90%;
  height:30px;
  border-radius:3px;
  font-size: 1rem;
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
header{
    border: 3px solid rgb(0, 0, 0);
    height: 30px;
    width: 300px;
    text-align: center;
    
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

</style>