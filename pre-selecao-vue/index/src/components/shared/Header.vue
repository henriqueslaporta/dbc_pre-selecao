<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="http://www.dbccompany.com.br/"><img src="../../assets/logo-dbc-topo.png" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#oqueeh">O que é</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#tecnologias">Tecnologias aprendidas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#depoimentos">Depoimentos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#beneficios">Benefícios</a>
          </li>
          <li class="nav-item">
            <Button class="btn-lg" v-bind:onClick="login" v-bind:texto="textoBotao" type="submit"/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Button from '../shared/Button.vue'

export default {
  name: 'Header',
  components: {
    Button
  },
  data: () => {
      return {
      textoBotao: 'Entrar'
    }
  },
  methods: {
    login() {
      console.log( `Indo para a página de Login` )
      this.$router.push({ name: "Login" })
    }
  },
  created() {
    this.$route;
  }
}
</script>

<style>
.navbar-nav li:not(:last-child){
  margin-right: 2em;
}
.navbar-nav li:hover:not(:last-child){
  border-bottom: 1px solid rgb(61,131,206);
}
</style>
