<template>
    <div class="container">
        <div class="row">
            <div class="offset-md-3 col-md-6 mt-5">
                <div class="card">
                    <div class="card-body">
                        <h5>Notificaciones</h5>
                        <div class="container">
                             <button class="btn btn-block btn-info ml-3" @click.prevent="marcar_leidos">marca todos como leidos</button>
                        </div>
                         <br><br>
                        <ul>
                            <li v-for="item in listadata" :key="item.id" class="notificacion">
                            <form>
                                <div class="form-row">
                                <div class="form-group col-md-1">
                                    <input
                                    class="form-check-input"
                                    type="checkbox"
                                    :checked="item.leida"
                                    @input="change_input(item.id_notificacion, item.leida)"
                                    :value="item.leida"
                                    id="check"
                                    />
                                </div>
                                <div class="form-group col-md-1"><i class="fas fa-bell"></i></div>
                                <div class="form-group col-md-10">
                                    <b>Medidor |{{ item.serie_medidor }}|</b> <br />
                                    {{ item.mensaje }} <br />
                                    <b>{{ item.fecha }}</b>
                                </div>
                                </div>
                            </form>
                            </li>
                        </ul>    
                    </div>    
                </div>
            </div>    
        </div> 
        <div class="container">
            <div class="row">
            <!-- footer-->
                <footer id="formFooter">
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
           
</template>

<script>
import axios from 'axios'
export default {
    name: "Notificacion",
    data(){
        return {
            listadata: [],
            };
    },
    methods: {
        actualizar_lista_not(){
            axios.post('http://fundacionenebro.org.mx:3001/monitor/api/cliente/obtener/notificaciones')
        .then(response=>{
            if (response.status === 200) {
            this.listadata = response.data.notificaciones;
        }
        })
        },
        change_input(id, leida) {
            if (leida === 0) {
                axios.post("http://fundacionenebro.org.mx:3001/monitor/api/configuracion/notificacion/leida",{id_notificacion: id})
                .then(not => {
                    if(not.status === 200) {
                        this.actualizar_lista_not();
                    }
                })
            } else {
                axios.post("http://fundacionenebro.org.mx:3001/monitor/api/configuracion/notificacion/noleida",{id_notificacion: id})
                .then(not =>{
                    if(not.status === 200) {
                        this.actualizar_lista_not();
                    }
                })
            }
        },
        marcar_leidos() {
        axios.post("http://fundacionenebro.org.mx:3001/monitor/api/configuracion/notificacion/todoleido",).then(not=>{
            if(not.status===200){
                this.actualizar_lista_not();
            }
        });
    },
    },
    mounted() {
        this.actualizar_lista_not();
    }

    };
</script>

<style scoped>
ul {
    width: 100%;
    list-style: none;
    }
ul .notificacion{
    text-align: left;
    width: 100%;
    }    
ul .notificacion i{
    font-size: x-large;
    }    

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
  width:5%;
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