<template>
    <div>
    <RouterLink to="/" class="btn">Tablas</RouterLink>
    <div class="formulari">
        <h1>Nuevo puerto</h1>

        <label for="nombre" type="text">Nombre: <input v-model="puertoNuevo.nom" id="nombre"></label>
        <label for="altitud" type="text">Altitud: <input v-model="puertoNuevo.altitud" id="altitud"></label>
        <label for="pais" type="text">Pais: <input v-model="puertoNuevo.pais" id="pais"></label>

        <select v-model="puertoNuevo.voltaCiclistaId">
            <option v-for="volta in voltes" :key="volta.id" :value=volta.id>
                {{ volta.nom }}
            </option>
        </select>

        <button type="button" @click="guardarPort">Guardar puerto</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'NuevoPort',
    props: {
        ports: Array,
        voltes: Array
    },
    data() {
        return {
            puertoNuevo: {
                id: 0,
                nom: '',
                altitud: 0,
                pais: '',
                voltaCiclistaId: 1
            }
        }
    },
    methods: {
        guardarPort() {


           let form = this.validarForm();
if(form){
    let puerto = {
                id: this.puertoNuevo.id,
                nom: this.puertoNuevo.nom,
                altitud: parseInt(this.puertoNuevo.altitud),
                pais: this.puertoNuevo.pais,
                voltaCiclistaId: this.puertoNuevo.voltaCiclistaId
            }

            this.$emit('dades-enviades', puerto);

            this.puertoNuevo = {

                nom: '',
                altitud: 0,
                pais: '',
                voltaCiclistaId: 1
            }
}

          

        },
        validarForm() {
            let form = true;

            if (this.puertoNuevo.nom.trim()  == '') {

                form = false;
                console.log("Nombre necesario");

            }

            if (this.puertoNuevo.pais.trim()  == '') {

                form = false;
                console.log("Pais necesario");
            }

            if(this.puertoNuevo.altitud == null){
                this.puertoNuevo.altitud = 0;
            }
            return form;
        }



    },
}
</script>

<style></style>