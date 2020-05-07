<template>
  <!-- Modal -->
  <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered max-width-600px" role="document">
      <div class="modal-content">
        <div class="modal-header">

          <h5 class="modal-title" id="exampleModalCenterTitle">{{ candidato.nomeCompleto }}</h5>
          <div class="ml-auto">
            <button v-if="candidato.status == 'PENDENTE' || candidato.status == 'REJEITADA'" 
                    class="btn btn-primary btn-sm m-2" @click="funcAprova();"
                  >
                    <LoaderButton v-if="loaderAprova" />
                    <span v-else>Aprovar</span>
            </button>
            <button v-else-if="candidato.status == 'CONVITE_ENVIADO'" 
                    class="btn btn-primary btn-sm m-2" 
                    @click="funcAprova()"
                  >
                    <LoaderButton v-if="loaderAprova" />
                    <span v-else>Reenviar</span>
            </button>
            
            <button v-if="candidato.status == 'REJEITADA'" 
                  class="btn btn-outline-danger btn-sm m-2" 
                  v-bind:disabled=true @click="funcReprova()"
                >
                  <LoaderButton v-if="loaderReprova" />
                  <span v-else>Reprovar</span>
            </button>
            <button v-else 
                  class="btn btn-outline-danger btn-sm m-2" 
                  @click="funcReprova()"
                > 
                  <LoaderButton v-if="loaderReprova" />
                  <span v-else>Reprovar</span>
            </button>
          </div>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">
                <a :href="candidato.curriculo" target="_blank">
                  <button
                    class="btn btn-outline-succes btn m-2"
                        >
                        <img height="20px" src="../../assets/pdfIcon.png" />
                        Currículo download
                  </button>
                </a> 
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4">
                <h6> Status: </h6>
                <p>{{ candidato.status }}</p>
              </div>
              <div class="col-sm-4">
                <h6> Nascimento: </h6>
                <p>{{ candidato.dataNascimento }}</p>
              </div>
              <div class="col-sm-4">
                <h6> CPF: </h6>
                <p>{{ candidato.cpf }}</p>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-8">
                <h6> E-mail: </h6>
                <p>{{ candidato.user.email }}</p>
              </div>
              <div class="col-sm-4">
                <h6> Telefone: </h6>
                <p>{{ candidato.telefone }}</p>
              </div>
            </div> 
            <div class="row mt-3">
              <div class="col-sm-12">
                <h6> Instituição: </h6>
                <p>{{ candidato.instituicao }}</p>
              </div>
            </div> 
            <div class="row mt-3">
              <div class="col-sm-12">
                <h6> Rua: </h6>
                <p>{{ candidato.endereco.logradouro }}, {{ candidato.endereco.numero }}</p>
              </div>
            </div> 
            <div class="row mt-3">
              <div class="col-sm-6">
                <h6> Complemento: </h6>
                <p>{{ candidato.endereco.complemento }} </p>
              </div>
              <div class="col-sm-6">
                <h6> Cep: </h6>
                <p>{{ candidato.endereco.cep }} </p>
              </div>
            </div> 
            <div class="row mt-3">
              <div class="col-sm-4">
                <h6> Bairro: </h6>
                <p>{{ candidato.endereco.bairro }} </p>
              </div>
              <div class="col-sm-4">
                <h6> Cidade: </h6>
                <p>{{ candidato.endereco.cidade }} </p>
              </div>
              <div class="col-sm-4">
                <h6> Estado: </h6>
                <p>{{ candidato.endereco.estado }} </p>
              </div>
            </div>            
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoaderButton from "../shared/LoaderButton.vue";

export default {
  name: 'PopupCandidatoInfo',
  components: {
    LoaderButton
  },
  props: {
    id: String,
    candidato: Object,
    funcAprova: Function,
    funcReprova: Function,
    loaderAprova: Boolean,
    loaderReprova: Boolean
  }
}
</script>

<style>
.max-width-600px{
  max-width: 600px!important;
}
</style>

