<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="offset-md-2 col-md-8 col-sm-12 text-rigth">
        <h1 class="titulo">Medidores</h1>
        <br />
        <h3><b>No.Serie</b></h3>
        <h5 class="titulo">{{ info.Serie2 }}</h5>
        <br />
        <br />
        <h5><b>Chip :</b>&nbsp; <i class="fas fa-mobile-alt ml-1 mr-1"></i>&nbsp;{{ info.Chip }}</h5>
        <br />
        <h5>
          <b>Batería</b> <i class="fas fa-battery-full ml-1 mr-1"></i
          >{{ info.Bat }}%
        </h5>
      </div>
    </div>

    <div class="row">
      <div class="offset-md-2 col-md-8 col-sm-12">
        <h3>Historial de Medidas</h3>
      </div>
    </div>

    <div class="row">
      <div class="offset-md-2 col-md-8 col-sm-12">
        <h2>Fecha inicio</h2>
        <input
          type="date"
          name="fabricacion"
          required
          v-model="fechaInicio"
        />&nbsp;
      </div>
    </div>
    <div class="row">
      <div class="offset-md-2 col-md-8 col-sm-12">
        <h2>Fecha fin</h2>
        <input
          type="date"
          name="fabricacion"
          required
          v-model="fechaFin"
        />&nbsp;
      </div>
    </div>
    <div class="row">
      <div class="offset-md-2 col-md-8 col-sm-12">
        <button class="btn social-btn" @click="graficar">
          &nbsp;Mostrar grafica</button
        ><br /><br />
      </div>
    </div>

    <div class="row">
      <div class="offset-md-2 col-md-8 col-sm-12">
        <div id="grafica"></div>
      </div>
    </div>

    <footer id="formFooter">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <img src="@/images/regresar.png" id="icon_sm" @click="consumo()" />
          <br />
          <h2 @click="consumo()">regresar</h2>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
import axios from "axios";
import ApexCharts from "apexcharts";
import moment from "moment";
import { Config } from "../../Config";

export default {
  name: "Medidores",
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      datos: null,
      fechaInicio: null,
      fechaFin: null,
      gas: [],
      fechas: [],
      info: {},
    };
  },
  methods: {
    graficar() {
      this.gas = [];
      this.fechas = [];
      axios
        .post(
          Config.url+"/api/medidor/graficar/gas",
          {
            id_medidor: this.id,
            fecha_inicio: this.fechaInicio,
            fecha_fin: this.fechaFin,
          }
        )
        .then((response) => {
          this.datos = response.data.listamedidor;
          console.log(this.datos);
          for (let index = 0; index < this.datos.length; index++) {
            this.gas.push(Number(this.datos[index].Gas));
            this.fechas.push(moment(this.datos[index].Timestamp).format("l"));
          }
          this.graficacion();
        });
    },
    graficacion() {
      document.getElementById("grafica").innerHTML = "";
      var options = {
        chart: {
          type: "line",
          toolbar: {
            show: true,
            tools: {
              download: false,
              selection: false,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: false,
              reset: false,
            },
            /*export: {
              csv: {
                filename: 'reporte',
                columnDelimiter: ",",
                headerCategory: "fecha",
                headerValue: "value",
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString();
                },
              },
              svg: {
                filename: 'reporte',
              },
              png: {
                filename: 'reporte',
              },
            },
            autoSelected: "zoom",*/
          },
        },
        series: [
          {
            name: "% de gas",
            data: this.gas,
          },
        ],
        xaxis: {
          categories: this.fechas,
        },
        grid: {
          row: {
            colors: ["#e5e5e5", "transparent"],
            opacity: 0.5,
          },
          column: {
            colors: ["#f8f8f8", "transparent"],
          },
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
        markers: {
          size: 5,
          colors: undefined,
          strokeColors: "#fff",
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          shape: "circle",
          radius: 2,
          offsetX: 0,
          offsetY: 0,
          showNullDataPoints: true,
          hover: {
            size: undefined,
            sizeOffset: 3,
          },
        },
      };

      var chart = new ApexCharts(document.querySelector("#grafica"), options);

      chart.render();
    },
    consumo() {
      this.$router.push({ name: "Editar", params: { id: this.id } });
    },
  },
  mounted() {
    console.log(this.id);
    axios
      .post(
        Config.url+"/api/medidor/info",
        { id_medidor: this.id }
      )
      .then((response) => {
        this.info = response.data.medidor.info_Actual;
      });
  },
};
</script>


<style scoped>
.text-rigth {
  text-align: left;
}

.titulo {
  text-align: center !important;
}
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
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h3 {
  text-align: left;
}

h2 {
  text-align: center;
  font-size: 1.5vh;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #000000;
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
#icon_sm {
  width: 20%;
  margin-bottom: -20px;
}

#icono_medidores {
  width: 10%;
  margin-top: 30px;
}
header {
  border: 3px solid rgb(0, 0, 0);
  height: 30px;
  width: 300px;
  text-align: center;
}

.grafico {
  margin: 1rem auto;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: red;
  position: relative;
  border: 4px solid #000;
}
.recorte {
  clip: rect(0px, 200px, 200px, 0px);
  height: 100%;
  position: absolute;
  width: 100%;
}
.quesito {
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background-color: blue;
}
#porcentaje {
  transform: rotate(0deg);
}
button {
  width: 100%;
  border: hidden;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
}
.social-btn {
  background-color: white;
  border: none;
  color: black;
  padding: 15px 80px;
  text-align: center;
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
  width: 85%;
  height: 40%;
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

.social-btn:hover {
  background-color: #5fbae9;
}

.social-btn:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}
</style>