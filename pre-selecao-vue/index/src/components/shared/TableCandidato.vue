<template>
  <div class="container">
    <div class="row col-lg-12 mb-3">
      <div class="input-group col-md-4 col-lg-3 mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text">Data início</span>
        </div>
        <input type="text" class="form-control" id="dataInicio" v-model="dataInicio" v-mask="'##/##/####'">
      </div>
      <div class="input-group col-md-4 col-lg-3 mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text">Data fim</span>
        </div>
        <input type="text" class="form-control" id="dataFim" v-model="dataFim" v-mask="'##/##/####'">
      </div>
      <button class="btn btn-outline-secondary mb-1" type="button" @click="buscarListaDate">Filtrar</button>
      <div class="input-group col-lg-3 col-sm-5 ml-auto mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text">Por página</span>
        </div>
        <input type="text" id="porPagina" @blur="buscarLista" v-model="page.size" class="form-control" v-mask="'##'" :placeholder="page.size">
      </div>
    </div>
    <div class="row col-lg-12">
      <table class="table table-hover " >
        <thead>
          <tr>
            <th scope="col" v-for="candidato in camposTabela" v-bind:key="candidato.id">{{ candidato }}</th>  
          </tr>
        </thead>
        <tbody>
          <RowCandidato v-for="candidato in candidatos" v-bind:key="candidato.id"
                        :candidato="candidato"
                        :funcAprova="aprova"
                        :funcReprova="reprova" />
        </tbody>
      </table>
    </div>
    <div class="row justify-content-end">
      <span class="mr-4">Total candidatos: {{ page.totalElements }}</span>
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item" v-bind:class="{ 'disabled' : page.first }">
            <Button class="page-link" texto="Anterior" :onClick="onPreviousPage" />
          </li>
          <li v-for="(p, index) in page.totalPages" 
              :key="index"
              class="page-item"
              v-bind:class="{ 'active' : index == page.number }"
            >
            <button class="page-link" @click="goToPage(p)">{{ p }}</button>
          </li>
          <li class="page-item" v-bind:class="{ 'disabled' : page.last }">
            <Button class="page-link" texto="Próxima" :onClick="onNextPage" />
          </li>
        </ul>
      </nav>
    </div> <!-- end row -->
    <PopUpError ref="popupError" />
  </div> <!-- end container -->
</template>

<script>
import BackEndApi from "../../api/backEndApi.js"
import Button from '../shared/Button.vue'
import Candidato from '../../models/candidato.js'
import RowCandidato from "../shared/RowCandidato.vue"
import PopUpError from "../shared/PopUpError.vue"

export default {
  name: 'TableCandidato',
  components: {
    RowCandidato, Button, PopUpError
  },
  props:{
  },
  data: () => {
    return {
      btnPrev: 'Previous',
      btnNext: 'Next',
      camposTabela: {
        nome: "Nome",
        cpf: "CPF",
        email: "E-mail",
        dataInscricao: "Data de Inscrição",
        status: "Status",
        botoes: " "
      },
      page: {
        totalPages: 0,
        totalElements: 0,
        last: true,
        first: true,
        size: 20,
        number: 0,        //pagina atual
        orderBy: 'id',
        orderType: 'desc'
      },
      candidatos: [],
      dataInicio: '',
      dataFim: ''
    }
  },
  methods: {
    async onNextPage() {
      this.page.number += 1
      await this.buscarLista()
    },
    async onPreviousPage() {
      this.page.number -= 1
      await this.buscarLista()
    },
    async goToPage( number ) {
      this.page.number = (number - 1)
      await this.buscarLista()
    },
    async aprova(id){
      const api = new BackEndApi();
      const candidatoDto = new Candidato();
      candidatoDto.id = id;
      candidatoDto.status = 'CONVITE_ENVIADO'
      const result = await api.feedBackCandidato(candidatoDto);
      if(result.error){
        this.$refs.popupError.errorTitle = "Não foi possível realizar a operação"
        this.$refs.popupError.errorMsg = "Ocorreu um erro ao tentar enviar o convite para o candidato!"
        this.$refs.popupError.show = true
        return
      }
      await this.buscarLista()
    },
    async reprova(id){
      const api = new BackEndApi();
      const candidatoDto = new Candidato();
      candidatoDto.id = id;
      candidatoDto.status = 'REJEITADA';
      const result = await api.feedBackCandidato(candidatoDto);
      if(result.error){
        this.$refs.popupError.errorTitle = "Não foi possível realizar a operação"
        this.$refs.popupError.errorMsg = "Ocorreu um erro ao tentar rejeitar o candidato!"
        this.$refs.popupError.show = true
        return
      }
      await this.buscarLista()
    },
    async buscarLista(){
      const api = new BackEndApi()
      const json = await api.listar( this.page )
      if(json.error){
        this.$refs.popupError.errorTitle = "Não foi possível realizar a operação"
        this.$refs.popupError.errorMsg = "Ocorreu um erro ao tentar buscar lista de candidatos!"
        this.$refs.popupError.show = true
        return
      }
      this.setPageJson(json)
      this.candidatos = json.content
    },
    async buscarListaDate(){
      const api = new BackEndApi()
      const json = await api.listarSearchDate( this.page, this.dataInicio, this.dataFim )
      
      if(json.error){
        this.$refs.popupError.errorTitle = "Não foi possível realizar a operação"
        this.$refs.popupError.errorMsg = "Verifique se você preencheu corretamente as datas de inicio e fim."
        this.$refs.popupError.show = true
        return
      }
      
      this.setPageJson(json)
      this.candidatos = json.content
    },
    setPageJson( json ){
      this.page.totalPages = json.totalPages
      this.page.totalElements = json.totalElements
      this.page.last = json.last
      this.page.first = json.first
      this.page.size = json.size
      this.page.number = json.number
    }
  },
  async created(){
      await this.buscarLista()
  },
}
</script>

