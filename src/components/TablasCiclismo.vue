<template>
    <div>
 <RouterLink to='/nuevoPort' class="btn">Nuevo puerto</RouterLink>
 
<table v-for="volta in voltes" :key="volta.id">
<h2>{{ volta.nom }}</h2>
<tr>

    <th>Nombre</th>
    <th>Altitud</th>
    <th>Pais</th>
    <th>Acciones</th>
   
</tr>
   

<tr  v-for="port in ports.filter((port)=> port.voltaCiclistaId == volta.id)" :key="port.id">

<td>{{ port.nom }}</td>

<td>{{ port.altitud }}</td>
<td>{{ port.pais }}</td>

<td><editarEliminar :idPort=port.id @port-eliminado="eliminarPort"></editarEliminar></td>
</tr>

</table>


</div>
</template>

<script>
import editarEliminar from "./EditarEliminar.vue"

export default {

name : 'TablasCiclismo',

components: {
editarEliminar
},
props :{

    ports: Array,
    voltes: Array

}
,
data() {
    return {
        
    }
},

methods: {
    eliminarPort(id){
      this.$emit("eliminar-port",id)
    }
},

}
</script>

<style>

</style>