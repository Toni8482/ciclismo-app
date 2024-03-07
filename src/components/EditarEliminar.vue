<template>
    <div>
        <button @click="editar">Editar</button>
        <button @click="eliminar">Eliminar</button>
    </div>
</template>

<script>


export default {
    name: 'EditarEliminar',
    props: {
        idPort: Number
    },
    methods: {
        editar() {
           this.$router.push(`/editarPort/${this.idPort}`)

        },
        eliminar() {
            this.$emit('port-eliminado', this.idPort);
        }
    }
}
</script>

<style>
/* Estilos opcionales para los botones */
</style>
