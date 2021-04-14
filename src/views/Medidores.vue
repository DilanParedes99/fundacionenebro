<template>
    <div class="home">
        <div class="wrapper">
            <div id="formContent">
                <div class="">
                    <h1> <b>Medidores</b></h1> <br>
                    <img src="@/images/medidor.png" id="icono_medidores"> <br><br><br>     
                </div>


               <div class="container">
                  <header id="cuadro">
                    <b-list-group> <br>
                      <h4><b>Medidor</b></h4> <br>
                      <ul>
                        <li v-for="item in datos" :key="item.id" @click="evento(item.id)"><button class="social-btn">{{item.serie}}</button></li>
                      </ul>
                    </b-list-group>
                  </header>

                <footer id="formFooter">
                    <div class="row">
                        <div class="col">
                            <router-link to="/agregarmedidor"><img src="@/images/agregar.png" id="icon_sm" ></router-link>
                            <router-link to="/agregarmedidor"><h2>Agregar</h2></router-link>
                        </div>
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
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Medidores',
  components: {
   
  },
  data() {
    return{
      datos:null
    }
  },
  methods: {
    evento(id){
      this.$router.push({name:'Editar',params:{id:id}});
    }
        },     
  mounted(){
      axios.get('http://fundacionenebro.org.mx:3001/monitor/api/medidor/cliente/autenticado')
      .then(response =>{
        this.datos = response.data.listamedidor;
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

#form_medidores{
    background: rgb(219, 218, 218);
    padding: 40px;
    top: 8%;
    position:absolute;
    left: 0;
    width:100%;
    height: 75.5%;
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
li{
  
  list-style-type: none;
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
header{
    border: 3px solid rgb(0, 0, 0);
    height: 320px;
    overflow: scroll;
    
    }
button{
     width: 100%;
     border: hidden;
     background: rgb(255, 255, 255);
     color:rgb(0, 0, 0);
     font-family: Verdana, Geneva, Tahoma, sans-serif;
     font-weight: bold;
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

    input[type=text]{
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