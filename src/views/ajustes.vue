<template>
  <div class="container">
    <div class="row mt-3">
      <div class="offset-1 col-md-10 p-1">
        <h1>Configuración</h1>
        <form class="form-configuraciones p-2">
          <div class="form-row">
            <div class="form-group col-md-12">
              <input
                type="checkbox"
                v-model="datos.activa"
                @click.prevent="activatodo()"
              />
              <label class="ml-3"> Activar Notificaciones </label>
            </div>
          </div>
          <br />
          <!-- Niveles de bateria-->
          <div class="form-row" v-if="datos.activa">
            <div class="form-group col-md-12">
              <input
                type="checkbox"
                v-model="datos.bateria"
                @click.prevent="desactivabateria(datos.bateria)"
              />
              <label class="ml-3"> Bateria Baja </label>
              <br />
              <h6><b>Min. de carga</b> {{ datos.bateria }}%</h6>
              <input
                type="range"
                v-model="datos.bateria"
                @input="activabateria()"
              />
            </div>
          </div>

          <!-- Niveles de gas-->
          <div class="form-row" v-if="datos.activa">
            <div class="form-group col-md-12">
              <input
                type="checkbox"
                v-model="datos.nivelgas"
                @click.prevent="activarnivel(datos.nivelgas)"
              />
              <label class="ml-3"> Niveles Bajos de Gas </label>
              <h6><b>% Min. de capacidad</b> {{ datos.capminima }}%</h6>
              <input type="range" @change="cambio_capminima" v-model="datos.capminima" />
            </div>
          </div>
          <br />

          <!-- temperatura-->
          <div class="form-row" v-if="datos.activa">
            <div class="form-group col-md-12">
              <input
                type="checkbox"
                v-model="datos.temperatura"
                @click.prevent="desactivatemperatura(datos.temperatura)"
              />
              <label class="ml-3"> Temperatura </label>
              <br />
              <h6><b>Temperatura </b> {{ datos.temperatura }}°</h6>
              <input
                type="range"
                v-model="datos.temperatura"
                @input="activatemperatura()"
              />
            </div>
          </div>
          <br />
          <!-- recarga de gas-->
          <div class="form-row" v-if="datos.activa">
            <div class="form-group col-md-12">
              <input
                type="checkbox"
                v-model="datos.recarga"
                @click.prevent="activarrecarga(datos.recarga)"
              />
              <label class="ml-3"> Recargas de Gas </label>
            </div>
          </div>
          <!-- compartir datos con gaseras-->
          <div class="form-row">
            <div class="form-group col-md-12">
              <input
                type="checkbox"
                v-model="datos.compartir"
                @change="activarcompartir"
              />
              <label class="ml-3"> Deseo compartir mis datos con terceros </label>
            </div>
          </div>

          <br />
        </form>
      </div>
    </div>
    <div class="row">
      <div class="offset-4 col-md-4">
        <hr>
        <router-link class="btn" to="/login/cliente"
          ><img src="@/images/regresar.png" id="icon_sm"
        /></router-link>
        <router-link class="btn" to="/login/cliente"><p>regresar</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      activa: false,
      BateriaMedidor: false,
      ActivarBajoMedidor: false,
      ActivarBajoGas: false,
      ActivarTemperatura: false,
      ActivarRecargasGas: false,
      ActivarVarias: false,
      ActivarDatos: true,
      ActivarMal: true,
      ActivarPromociones: true,
      CompartirDatos:false,
      datos: {},
    };
  },
  methods: {
    activatodo() {
      if (this.datos.activa == 0) {
        axios
          .post(
            "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/activar"
          )
          .then((response) => {
            response;
            this.actualizar_info_configuracion();
          });
      } else {
        axios
          .post(
            "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/desactivar"
          )
          .then((response) => {
            response;
            this.actualizar_info_configuracion();
          });
      }
    },
    activabateria() {
      this.datos.bateria = Number(this.datos.bateria);
      axios
        .post(
          "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/bateria",
          { bateria: this.datos.bateria }
        )
        .then((response) => {
          response;
          this.actualizar_info_configuracion();
        });
    },
    activatemperatura() {
      this.datos.temperatura = Number(this.datos.temperatura);
      axios
        .post(
          "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/temperatura",
          { temperatura: this.datos.temperatura }
        )
        .then((response) => {
          response;
          this.actualizar_info_configuracion();
        });
    },
    desactivabateria(datos) {
      if (datos != 0 || datos != false) {
        datos = 0;
        axios
          .post(
            "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/bateria",
            { bateria: datos }
          )
          .then((response) => {
            response;
            this.datos.bateria = datos;
            this.actualizar_info_configuracion();
          });
      } else {
        datos = 1;
        axios
          .post(
            "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/bateria",
            { bateria: datos }
          )
          .then((response) => {
            response;
            this.datos.bateria = datos;
            this.actualizar_info_configuracion();
          });
      }
    },
    desactivatemperatura(datos) {
      if (datos != 0 || datos != false) {
        datos = 0;
        axios
          .post(
            "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/temperatura",
            { temperatura: datos }
          )
          .then((response) => {
            response;
            this.datos.temperatura = datos;
            this.actualizar_info_configuracion();
          });
      } else {
        datos = 1;
        axios
          .post(
            "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/temperatura",
            { temperatura: datos }
          )
          .then((response) => {
            response;
            this.datos.temperatura = datos;
            this.actualizar_info_configuracion();
          });
      }
    },
    activarrecarga(datos) {
      if (datos != 0 || datos != false) {
        datos = 0;
        axios
          .post(
            "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/recarga",
            { recarga: datos }
          )
          .then((response) => {
            response;
            this.datos.recarga = datos;
            this.actualizar_info_configuracion();
          });
      } else {
        datos = 1;
        axios
          .post(
            "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/recarga",
            { recarga: datos }
          )
          .then((response) => {
            response;
            this.datos.recarga = datos;
            this.actualizar_info_configuracion();
          });
      }
    },
    activarcompartir() {
      if(this.datos.compartir===true){
        axios
          .post(
            "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/compartirdatos",
            { compartir: 1 }
          )
          .then((response) => {
            response;
            //this.CompartirDatos = false;
            this.actualizar_info_configuracion();
          });
      }else{
         axios
          .post(
            "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/compartirdatos",
            { compartir: 0 }
          )
          .then((response) => {
            response;
            //this.CompartirDatos = true;
            this.actualizar_info_configuracion();
          });
      }
    },
    activarnivel(datos) {
      this.datos.capminima = Number(this.datos.capminima);
      if (this.datos.nivelgas === false || datos===1) {
        datos = 0;
        this.datos.capminima=0;
        axios
          .post(
            "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/gas",
            { nivelgas: datos, capminima: this.datos.capminima }
          )
          .then((response) => {
            response;
            this.datos.nivelgas = datos;
            this.actualizar_info_configuracion();
          });
      } else {
        datos = 1;
        if(this.datos.capminima===0){
          this.datos.capminima=1;
        }
        axios
          .post(
            "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion/gas",
            { nivelgas: datos, capminima: this.datos.capminima }
          )
          .then((response) => {
            response;
            this.datos.nivelgas = datos;
            this.actualizar_info_configuracion();
          });
      }
    },
    actualizar_info_configuracion() {
      axios
        .get(
          "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion"
        )
        .then((response) => {
          if (response.status === 200) {
            if (response.data.configuracion !== null) {
              this.datos = response.data.configuracion;
            }
          }
        });
    },
    cambio_capminima(){
      if(this.datos.capminima>1){
        this.datos.nivelgas=true;
        this.activarnivel(this.datos.nivelgas);
      }else{
        this.datos.nivelgas=false;
        this.activarnivel(this.datos.nivelgas);
      }
    }
  },
  mounted() {
    axios
      .get(
        "https://fundacionenebro.org.mx/monitorapi/monitor/api/configuracion"
      )
      .then((response) => {
        if (response.status === 200) {
          if (response.data.configuracion !== null) {
            this.datos = response.data.configuracion;
          }
        }
      });
  },
};
</script>



<style scoped>
.form-configuraciones {
  text-align: left !important;
}
#icon_sm {
  max-width: 15%;
  height: auto;
}
#icono_medidores {
  width: 10%;
  margin-top: 30px;
}
a {
  color: black;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

input[type="range"],
input[type="number"] {
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