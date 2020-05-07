<template>
<div>
  <div class="container-fluid bg-secondary mb-3">
    <div class="container p-2 ">
      <div class="row justify-content-end">
        <Button class="btn ml-auto" v-bind:onClick="logout" v-bind:texto="texto" type="submit"/>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <TableCandidato />
  </div>
</div>
</template>

<script>
import Button from '../shared/Button.vue'
import TableCandidato from '../shared/TableCandidato.vue'
import BackEndApi from '../../api/backEndApi.js'


export default {
  name: "Candidatos",
  components: {
    Button,TableCandidato
  },
  data:() => {
    return{
      texto: "Sair"
    }
  },
  methods: {
    async logout(){
      localStorage.setItem('authorization', "");
      this.$router.push({ name: "Login" })
    }
  }

}
</script>

