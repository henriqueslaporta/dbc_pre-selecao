<template>
  <div id="carouselExampleControls" class="carousel slide d-flex justify-content-center mt-5" data-interval="10000" data-ride="carousel">
    <div class="carousel-inner col-8">

      <div class="carousel-item"  v-for="(depoimento, index ) in depoimentos" :key="index" :class="{ 'active': index === 0 }">
        <div class="d-flex justify-content-center">
          <div>
            <div class="img-box">
              <img v-bind:src="depoimento.foto" />
            </div>
            <p> "{{ depoimento.texto }}" </p>
            <h4 class="d-block w-100"> {{ depoimento.autor }} </h4>
          </div>
        </div>
      </div>

    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CarouselHome',
  data: () => {
    return {
      depoimentos: [ 
        {
        texto: "O Programa Vem Ser surgiu na minha vida no momento certo! A possibilidade de estar totalmente dedicada a este treinamento dentro da DBC me trouxe a evolução profissional e segurança que precisava para entrar no mercado  de TI. Sou muito grata por estar entre os selecionados.",
        autor: "Jaqueline Paz",
        foto: require("../../assets/jaque.jpg"),
        },
        {
        texto: "O Vem Ser DBC, para além do aprendizado que produziu através da abordagem profunda das tecnologias propostas, propiciou-nos, através dos exercícios e desafios, o desenvolvimento de valores e considerações essenciais na execução projetos reais.",
        autor: "Eduardo Barbosa",
        foto: require("../../assets/eduardo.jpg"),
        },
        {
        texto: "VemSerDBC está sendo uma experiência incrível para mim. Estar conectado com o mercado de trabalho, com tecnologias atuais mas mais do que isso, ter a oportunidade de construir minha carreira em todos os seus aspectos, isso tudo com o baita suporte de uma organização com o selo de qualidade que a DBC tem, faz esse processo ser único e muito impactante para todos nós envolvidos.",
        autor: "Douglas Marques",
        foto: require("../../assets/douglas.jpg"),
        },
        {
        texto: "O programa vemserDBC tem sido um grande aliado no meu desenvolvimento técnico e pessoal principalmente pelo fato de estar me capacitando nas principais tecnologias  do mercado. A execução de projetos auxilia em viverciar na prática as dificuldades e realidade do dia a dia de um dev e com isso as experiências de trocas entre nos membros da turma tem sido importante. Sem dúvida hoje sou diferente de quando entrei na DBC. Parabéns DBC e a todos os envolvidos que acreditam na formação de pessoas!",
        autor: "Rodrigo Abreu",
        foto: require("../../assets/rodrigo.jpg"),
        },
        {
        texto: "Tem sido muito gratificante participar, o projeto é ótimo pq dá oportunidade pra gente aprender e se desenvolver muito em pouco tempo Tô mto feliz de poder fazer parte da primeira turma e espero que venham outras pela frente =)",
        autor: "Claudia Moura",
        foto: require("../../assets/claudia.jpg"),
        },
        {
        texto: "Uma empresa que dá a oportunidade de obter aprendizado, capacitação e introdução no mercado de trabalho, através de um programa para estudantes sem ou com pouca experiência na área da tecnologia. Essa é a DBC Company, esse é o VemSer DBC. Empresa que investe em pessoas visando qualidade, bem estar e futuro. Eu como aluno do VemSer serei eternamente grato pela oportunidade.",
        autor: "Jonas Cruz",
        foto: require("../../assets/jonas.jpg")
        },
        {
        texto: "Participar do VemSerDBC me ajudou desenvolver um raciocínio muito maior e que sequer eu sabia que podia ter. Deixei de ser apenas um estudante de programação para ser profissional de verdade. Sou muito grato pela oportunidade!",
        autor: "Henrique Kalife",
        foto: require("../../assets/henrique.jpg"),
        },
        {
        texto: "O projeto tem superado todas as minhas expectativas, eu sempre imaginei que levaria anos para aprender tudo isso que aprendi nesses últimos meses ali, não tenho mais nada a dizer além de excelente trabalho, de todos envolvidos! 😎👍",
        autor: "Tiago Schmidt",
        foto: require("../../assets/tiago.jpg"),
        },
        {
        texto: "O programa vemserdbc tem sido uma otima oportunidade de crescimento e aprendizado, tanto profissional quanto pessoal. Estar próximo de profissionais qualificados e dedicados tem um impacto muito positivo no nosso desenvolvimento. É uma experiencia única, proporcionada por uma das melhores empresas para se trabalhar no brasil.",
        autor: "Lucas Ribeiro",
        foto: require("../../assets/lucas.jpg"),
        },
        {
        texto: "O VemSer tem sido pra mim uma grande oportunidade de aprendizagem técnica e pessoal, me colocando em contato com um mundo que eu não conhecia e mudando minha perspectiva sobre o trabalho com TI. É uma experiência muito enriquecedora que vou levar comigo para o resto da vida.",
        autor: "Gustavo Comaru",
        foto: require("../../assets/gustavo.jpg"),
        },
        
      ]
    }
  }
}
</script>
<style>
.img-box {
    width: 135px;
    height: 135px;
    margin: 0 auto;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 50%;
}

.img-box img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
}
</style>

