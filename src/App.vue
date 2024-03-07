<template>
  <div class="app">
<h1>Vueltas ciclistas</h1>
  <RouterView :ports="dadesPorts" :voltes="dadesVoltes" @dades-enviades="nuevoPort"
   @dades-puerto-editado="editarPort" @eliminar-port="eliminarPort">
  </RouterView>
</div>
</template>

<script>


export default {
  name: 'App',
  
  
  data() {
    return {
      dadesPorts: Array,
      dadesVoltes: Array
    }
  },
  methods: {

    async getPuertos() {

      try {
        const response = await fetch("http://localhost:3000/portsDeMuntanya");
        this.dadesPorts = await response.json();



      } catch (error) {
        console.error(error);
      }

    },


    async getVueltas() {

      try {
        const response = await fetch("http://localhost:3000/voltesCiclistes");
        this.dadesVoltes = await response.json();



      } catch (error) {
        console.error(error);
      }


    },

    async nuevoPort(port) {
      try {
        const response = await fetch('http://localhost:3000/portsDeMuntanya', {
          method: 'POST',
          body: JSON.stringify(port),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });

        const puertoCreado = await response.json();
        console.log(puertoCreado);
        this.getPuertos();
      } catch (error) {
        console.error(error);
      }
    },

    async editarPort(port) {

      try {
        const response = await fetch(`http://localhost:3000/portsDeMuntanya/${port.id}`, {
          method: 'PUT',
          body: JSON.stringify(port),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });

        const puertoEditado = await response.json();
        console.log(puertoEditado);
        this.getPuertos();
      } catch (error) {
        console.error(error);
      }
    },


    async eliminarPort(id) {
      try {
        await fetch(`http://localhost:3000/portsDeMuntanya/${id}`, {
          method: "DELETE",
        });
        this.getPuertos();
      } catch (error) {
        console.error(error);
      }
    }

  },
  mounted() {
    this.getPuertos();
    this.getVueltas();
  },

}
</script>

<style>


table{
 
  width: 80%;
  height: 20%;
  text-align: center;
  margin: 30px;
  border-collapse:collapse;
}

th,td {
  border: solid 3px;
 
}

.btn{
background-color: rgb(119, 205, 231);
padding: 10px;
text-decoration: none;
border-radius: 5px;
color: black;
margin: 30px;
}

.btn:hover {
  background-color:  rgb(92, 196, 228);
}

.app{
  text-align: center;
}

.formulari {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.formulari label{
  margin: 10px;
}

button {
  margin: 10px;
}
</style>
