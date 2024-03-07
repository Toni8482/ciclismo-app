<template>
    <div>
    <RouterLink to="/" class="btn">Tablas</RouterLink>
    <div class="formulari">
        <h1>Editar puerto</h1>

        <label for="nombre" type="text">Nombre: <input v-model="puertoEditado.nom" id="nombre"></label>
        <label for="altitud" type="text">Altitud: <input v-model="puertoEditado.altitud" id="altitud"></label>
        <label for="pais" type="text">Pais: <input v-model="puertoEditado.pais" id="pais"></label>

        <select v-model="puertoEditado.voltaCiclistaId">
            <option v-for="volta in voltes" :key="volta.id" :value=volta.id>
                {{ volta.nom }}
            </option>
        </select>

        <button type="button" @click="editarPort">Editar puerto</button>
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
            puertoEditado: {
                id: 0,
                nom: '',
                altitud: 0,
                pais: '',
                voltaCiclistaId: 1
            },


        }
    },
    methods: {
        editarPort() {
            let form = this.validarForm();
            if (form) {
                let puerto = {
                    id: this.puertoEditado.id,
                    nom: this.puertoEditado.nom,
                    altitud: parseInt(this.puertoEditado.altitud),
                    pais: this.puertoEditado.pais,
                    voltaCiclistaId: this.puertoEditado.voltaCiclistaId
                }

                this.$emit('dades-puerto-editado', puerto);
            }




        },

        obtenerDatosPort(id) {
            console.log(this.ports);
            if (Array.isArray(this.ports)) {
                this.puertoEditado = this.ports.find((port) => port.id == id);
            }
            else {
                this.$router.push('/');
            }


        },
        validarForm() {
            let form = true;

            if (this.puertoEditado.nom.trim() == '') {

                form = false;
                console.log("Nombre necesario");

            }

            if (this.puertoEditado.pais.trim() == '') {

                form = false;
                console.log("Pais necesario");
            }

            if (this.puertoEditado.altitud == null) {
                this.puertoEditado.altitud = 0;
            }
            return form;
        }

    },
    computed: {
        portId() {
            return this.$route.params.id
        }

    },
    mounted() {
        if (this.portId) {
            this.obtenerDatosPort(this.portId);
        }

    }



}
</script>

<style></style>