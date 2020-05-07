<template>
  <section class="container-fluid p-0">
    <Header />
    <section class="video-header">
      <div class="overlay"></div>
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="https://staging.coverr.co/s3/mp4/Aloha-Mundo.mp4" type="video/mp4">
      </video>
      <div class="container h-100">
        <div class="d-flex text-center h-100">
          <div class="my-auto w-100 text-white">
            <img src="../../assets/LogoVemSerDBC.png" style="width: 465px; height: 310px;"/>
            <h4 class="mb-5">Quer fazer parte de um programa de capacitação que formará estudantes em uma das tecnologias que mais empregam no mercado de trabalho?</h4>
            <Button class="btn-lg" v-bind:onClick="cadastro" v-bind:texto="texto" type="submit"/>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-light p-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="">
            <h1 id="oqueeh"> O que é? </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 ">
            <img class="img-fluid" src="../../assets/grupo.jpeg" />
          </div>
          <div class="col-md-7 p-5">
            <p> O Programa Vem Ser DBC é uma capacitação de 12 semanas, durante 4h diárias no turno da tarde. Um programa completo que estimula o desenvolvimento pessoal e profissional que ocorre dentro de uma empresa Great Place to Work.</p>
            <p>Você poderá se candidatar ao programa caso seja estudante em algum curso na área de Tecnologia de Informação e tenha conhecimento acadêmico em Lógica de Programação. </p>

          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid bg-info text-white p-5">
      <div class="container">
        <div class="row justify-content-center">
          <div>
            <h1 id="tecnologias"> Tecnologias Abordadas </h1><br><br>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-5 col-lg-5 redonda">
            <img class="img-fluid" src="../../assets/tecnologias.png" />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-7">
              <p class="mb-5 mt-5">Neste programa você irá aprender a trabalhar com tecnologias atuais e de grande demanda do mercado de Tecnologia de Informação.</p>
              <h6 class="mb-4">- Conceitos sobre Orientação a Objetos com aplicação na linguagem Java</h6>
              <h6 class="mb-4">- Introdução Web Front End HTML, CSS e aplicação de bibliotecas. </h6>
              <h6 class="mb-4">- Desenvolvimento Javascript / Vue.js. </h6>
              <h6 class="mb-4">- Back End Java com conexão a banco de dados Oracle SQL e aplicação de bibliotecas e frameworks.</h6>
            </div>
          </div>
        </div>
    </section>

    <section class="container-fluid bg-success text-white p-5">
      <div class="container">
        <div class="row justify-content-center">
          <div>
            <h1 id="depoimentos"> Depoimentos </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <CarouselHome />
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid bg-light p-5">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div>
            <h1 id="beneficios"> Benefícios </h1>
          </div>
        </div>

        <!--Bolsa auxilio-->
        <div class="row align-items-center justify-content-center">
          <div class="col-md-4">
            <img class="img-fluid" src="../../assets/pork2.png" />
          </div>
          <div class="col-md-4">
            <h4>Bolsa auxílio mensal  durante o programa de</h4>
            <h2>R$ 800,00</h2>
          </div>          
        </div>

        <!--Vale transporte-->
        <div class="row align-items-center justify-content-center">
          <div class="col-md-4">
            <h2>Vale Transporte</h2>
          </div>
          <div class="col-md-4">
            <img class="img-fluid" src="../../assets/bus2.png" />
          </div>
        </div>

        <!--Efetivacao-->
        <div class="row align-items-center justify-content-center">
          <div class="col-md-5">
            <img class="img-fluid" width="350px" height="250px" src="../../assets/job.png" />
          </div>
          <div class="col-md-5">
            <h3>Possibilidade de efetivação na DBC Company.</h3>
          </div>
        </div>

        <!--Cafe-->
        <div class="row align-items-center justify-content-center">
          <div class="col-md-4">
            <h3>Café à vontade e tia do Ifood</h3>
          </div>
          <div class="col-md-4">
            <img class="img-fluid" src="../../assets/coffe.png" />
          </div>
        </div>

      </div>

    </section>
      <Footer />
  </section>
</template>

<script>
import Button from '../shared/Button.vue'
import CarouselHome from '../shared/CarouselHome.vue'
import Header from '../shared/Header.vue'
import Footer from '../shared/Footer.vue'

export default {
  name: 'Home',
  components: {
    Button, Header, CarouselHome, Footer
  },
  data: () => {
      return {
      textoBotao: 'Entrar',
      texto: 'Inscreva-se!'
    }
  },
  methods: {
    login() {
      console.log( `Indo para a página de Login` )
      this.$router.push({ name: "Login" })
    },
    cadastro() {
      console.log( `Indo para a página de Cadastro` )
      this.$router.push({ name: "Cadastro" })
    }
  }
}
</script>

<style>
.video-header {
  position: relative;
  background-image: url("../../assets/viedo-snapshot.jpg");
  height: 90vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

.video-header video {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
}

.video-header .container {
  position: relative;
  z-index: 2;
}

.video-header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient( 120deg, rgba(53,208,88,0.62), rgba(61,131,206,0.69));
  background-color: #E8EAED;
  opacity: 0.68;
  z-index: 1;
}

.redonda {
  width:  460px;
  height: 300px;
}
</style>
