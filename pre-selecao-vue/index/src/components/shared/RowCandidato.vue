<template>
  <tr>
    <td data-toggle="modal" :data-target="`#idModalIdCandidato${candidato.id}`">{{ candidato.nomeCompleto }}</td>
    <td data-toggle="modal" :data-target="`#idModalIdCandidato${candidato.id}`">{{ candidato.cpf }}</td>
    <td data-toggle="modal" :data-target="`#idModalIdCandidato${candidato.id}`">{{ candidato.user.email }}</td>
    <td data-toggle="modal" :data-target="`#idModalIdCandidato${candidato.id}`">{{ candidato.dataInscricao }}</td>
    <td data-toggle="modal" :data-target="`#idModalIdCandidato${candidato.id}`">{{ candidato.status }}</td>
    <td>
        <button v-if="candidato.status == 'PENDENTE' || candidato.status == 'REJEITADA'" 
                class="btn btn-primary btn-sm m-2" @click="aprova();"
              >
                <LoaderButton v-if="loaderAprova" />
                <span v-else>Aprovar</span>
        </button>
        <button v-else-if="candidato.status == 'CONVITE_ENVIADO'" 
                class="btn btn-primary btn-sm m-2" 
                @click="aprova()"
              >
                <LoaderButton v-if="loaderAprova" />
                <span v-else>Reenviar</span>
        </button>
        
        <button v-if="candidato.status == 'REJEITADA'" 
              class="btn btn-outline-danger btn-sm m-2" 
              v-bind:disabled=true @click="reprova()"
            >
              <LoaderButton v-if="loaderReprova" />
              <span v-else>Reprovar</span>
        </button>
        <button v-else 
              class="btn btn-outline-danger btn-sm m-2" 
              @click="reprova()"
            > 
              <LoaderButton v-if="loaderReprova" />
              <span v-else>Reprovar</span>
        </button>
    </td>
    <td :data-target="`#idModalIdCandidato${candidato.id}`">
      <PopupCandidatoInfo 
              :id="`idModalIdCandidato${candidato.id}`" 
              :candidato="candidato" 
              :funcAprova="aprova"
              :funcReprova="reprova"
              :loaderAprova="loaderAprova" 
              :loaderReprova="loaderReprova"
            />
    </td>
  </tr>
</template>

<script>
import LoaderButton from "../shared/LoaderButton.vue";
import PopupCandidatoInfo from "../shared/PopupCandidatoInfo.vue";

export default {
    name: 'RowCandidato',
    components: {
      LoaderButton, PopupCandidatoInfo
    },
    props:{
      candidato: Object,
      funcAprova: Function,
      funcReprova: Function
    },
    data: () => {
      return {
        loaderAprova: false,
        loaderReprova: false,
        modalHide: false
      }
    },
    methods: {
      async aprova(){
        this.loaderAprova = true
        await this.funcAprova(this.candidato.id)
        this.loaderAprova = false
      },
      async reprova(){
        this.loaderReprova = true
        await this.funcReprova(this.candidato.id)
        this.loaderReprova = false
      }
    }
}
</script>

