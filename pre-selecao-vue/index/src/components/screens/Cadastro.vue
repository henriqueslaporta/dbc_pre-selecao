<template>
  <section class="container-fuild p-3 m-0 gradiente">
    <div class="container">
      <div class="row m-3  ">
        <div class="col-4 col-sm-3 col-md-2 mr-auto bg-white shadow-lg p-2">
          <h5 class="text-center"><router-link :to="{ name: 'Home'}">Voltar</router-link></h5>
        </div>
      </div>
      <div class="row justify-content-center shadow-lg m-2 p-4 bg-white">
        <div class="col-12">
          <form id="formData" v-on:submit.prevent="onSubmit">
            <!-- Nome -->
            <InputForm nome="nomeCompleto" 
                      label="Nome Completo"
                      rules="required" 
                      placeholder="Ex: John Doe"
                      ref="nomeCompleto" />

              <!-- Data de nascimento: -->
            <InputForm nome="dataNascimento" 
                      label="Data de nascimento:"
                      rules="required"
                      :mask="'##/##/####'"
                      placeholder="Ex: 09/11/1993"
                      ref="dataNascimento" />

            <EmailInput nome="emailName" :funcao="verificaEmailExistente" ref="email" />
            <span class="text-danger" v-show="!campoEmailValido">{{erroEmail}}</span>

            <!-- Password -->
            <div class="form-group">
              <label for="senha">Senha:</label>
              <input class="form-control"
                    id="senha"
                    v-model="senha"
                    v-validate="'required'" 
                    name="password" 
                    type="password" 
                    minlength="4"
                    placeholder="Password(min 4 máx 8 characters)" 
                    ref="password"
                    data-vv-as="Senha"
                    v-on:keyup="verifica"
                  >
                <span id="mostra" v-bind:class="color">{{mostra}}</span>
              <span class="text-danger" >{{errors.first('password')}}</span>
            </div>
            <!-- Confirmacao Senha -->
            <div class="form-group">
              <label for="confirmeSenha">Confirme a senha:</label>
              <input class="form-control"
                    id="confirmeSenha"
                    v-validate="'required|confirmed:password'" 
                    name="passwordConfirmation" 
                    type="password" 
                    placeholder="Password, Again" 
                    data-vv-as="Confirme a senha"
                  >
              <span class="text-danger" >{{errors.first('passwordConfirmation')}}</span>
            </div>

            <!-- CPF -->
            <div class="form-group">
              <label for="cpf">CPF:</label>
              <input type="text"
                      id="cpf"
                      name="cpf" 
                      v-model="CPF"
                      class="form-control"               
                      v-on:change="verificaCPFExistente"
                      v-mask="'###.###.###-##'"
                      placeholder="Ex: 000.000.000-00">
                <span class="text-danger" v-show="!campoCpfValido">{{erroCPF}}</span>
            </div>
            <!-- CEP -->
            <div class="form-group">
              <label for="campoCep">Cep:</label>
              <input type="text"
                      id="campoCep"
                      name="cep"
                      v-model="cep" 
                      class="form-control" 
                      v-validate="{ required: true, regex: /^\d{5}-\d{3}$/ }" 
                      v-on:change="buscarCep"
                      v-mask="'#####-###'"
                      placeholder="Ex: 91000-000"/>
              <span class="text-danger" >{{errors.first('cep')}}</span>
            </div>

            <!-- Endereco -->
            <InputForm nome="logradouro" 
                      label="Logradouro"
                      rules="required" 
                      placeholder="Ex: Rua Andarai"
                      ref="logradouro" />

            <InputForm nome="numero" 
                      label="Numero"
                      rules="required" 
                      placeholder="Ex: 3095"
                      ref="numero"  />

            <InputForm nome="complemento" 
                      label="Complemento:"
                      rules="" 
                      placeholder="Ex: Ap 308"
                      ref="complemento"  />

            <InputForm nome="bairro" 
                      label="Bairro"
                      rules="required" 
                      placeholder="Ex: Centro"
                      ref="bairro"  />
            
            <InputForm nome="cidade" 
                      label="Cidade"
                      rules="required" 
                      placeholder="Ex: Porto Alegre"
                      ref="cidade"  />

            <InputForm nome="estado" 
                      label="Estado"
                      rules="required" 
                      placeholder="Ex: Rio Grande do Sul"
                      ref="estado" />
            <!-- Telefone -->
            <InputForm nome="telefone" 
                      label="Telefone"
                      rules="required|max:13|min:12"
                      :mask="'(##)########?#'"
                      placeholder="Ex: (51)987654123 ou (51)32109874"
                      ref="telefone" />
            <!-- Institucao de Ensino -->
            <InputForm nome="instituicao" 
                      label="Instituicao de Ensino"
                      rules="required" 
                      placeholder="Ex: UFRGS ou PUCRS"
                      ref="instituicao" />
            <!-- Carregamento do curriculo PDF -->
            <div class="form-group">
              <label for="campoCurriculo">Curriculo (Somente .pdf):</label>
              <input type="file"
                      id="campoCurriculo"
                      name="curriculo"
                      class="form-control" 
                      v-validate="'required|ext:pdf'"
                      data-vv-as="curriculo"
                      placeholder="Ex: meuCurriculo.pdf"
                      @change="convertFile"
                      ref="arquivos"
                    />
              <span class="text-danger" >{{errors.first('curriculo')}}</span>
            </div>

            <Button class="btn-lg" v-bind:onClick="noop" :disabled="!isFormValid" v-bind:texto="textoBotao" type="submit"/>
          </form>
        </div><!-- End col  -->
      </div><!-- End row  -->

      <PopUp :show="popupShow" :loading="popupLoading" :error="popupError" />

    </div><!-- End container  -->
  </section>
</template>

<script>
import Button from '../shared/Button.vue'
import EmailInput from '../shared/EmailInput.vue'
import InputForm from '../shared/InputForm.vue'
import PopUp from '../shared/PopUp.vue'
import CorreiosApi from '../../api/correioApi'
import BackEndApi from '../../api/backEndApi.js'

export default {
  name: "Cadastro",
  components: {
    Button, EmailInput, InputForm, PopUp
  },
  data: () => {
    return {
      textoBotao: 'Submeter Inscrição',
      cep: '',
      endUser: '',
      senha: '',
      mostra: '',
      CPF:'',
      erroCPF: '',
      erroEmail: '',
      color: '',
      candidato: {},
      arquivoEmBase64: '',
      popupLoading: true,
      popupShow: false,
      popupError: false,
      campoEmailValido: false,
      campoCpfValido: false
    }
  },
  methods: {
    noop() {},
    verifica(){ /*metodo de verificacao da forca da senha*/
      let senha = this.senha;
      let forca = 0;
      const valor = this.senha;

      if((senha.length >= 4) && (senha.length <= 7)){
        forca += 10;
      }else if(senha.length>7){
        forca += 25;
      }
      
      if((senha.length >= 4) && senha.match(/[a-z]+/)){
        forca += 10;
      }
      if((senha.length >= 4) && senha.match(/[A-Z]+/)){
        forca += 20;
      }
      if((senha.length >= 4) && senha.match(/d+/)){
        forca += 20;
      }
      if((senha.length >= 4) && senha.match(/W+/)){
        forca += 25;
      }

      if(forca === 0){
        this.mostra = ''
      }else if((forca >= 1) && (forca < 30)){
        this.mostra = 'Senha Fraca';
        this.color = "text-danger";
      }else if((forca >= 30) && (forca < 60)){
        this.mostra = 'Senha Media';
        this.color = "text-warning";
      }else if(forca >= 60){
        this.mostra = 'Senha Forte';
        this.color = "text-success";
      }
      
    },
    async buscarCep() { /*metodo que faz a busca do CEP na API*/
      console.log( `${ this.cep }` ) 
      const endereco = new CorreiosApi()
      try{
        this.endUser = await endereco.carregarEndereco(this.cep)
        this.$refs.logradouro.value = this.endUser.logradouro
        this.$refs.cidade.value = this.endUser.cidade
        this.$refs.estado.value = this.endUser.estado
        this.$refs.bairro.value = this.endUser.bairro
        if (!endereco.error){
          console.log(this.endUser)
        }
      }catch(err){
          console.log(err, "Erro ao acessar servidor de endereço.")        
      } 
    },
    async onSubmit() { /*metodo que salva o candidato no banco*/
      this.popupShow = true
      this.candidato = {
        nomeCompleto : this.$refs.nomeCompleto.value,
        email : this.$refs.email.value,
        nascimento : this.$refs.dataNascimento.value,
        password : this.senha,
        cpf : this.CPF,
        cep : this.cep,
        logradouro : this.$refs.logradouro.value,
        numero : this.$refs.numero.value,
        complemento : this.$refs.complemento.value,
        bairro : this.$refs.bairro.value,
        cidade : this.$refs.cidade.value,
        estado : this.$refs.estado.value,
        telefone : this.$refs.telefone.value,
        instituicao : this.$refs.instituicao.value,
        curriculo : this.arquivoEmBase64
      }
      const api = new BackEndApi()
      const response = await api.cadastrarCandidato( this.candidato )
      if(!response.error){
        this.popupLoading = false
      }
      else{
        console.log(response.error)
        this.popupLoading = false
        this.popupError = true

        setTimeout( () => { 
          this.popupShow = false
          this.popupLoading = true
          this.popupError = false
        }, 3000);
        
      }
    },
    async verificaCPFExistente(){ /*metodo que verifica no banco se o CPF ja esta cadastrado*/
      console.log("verficando cpf")
      const api = new BackEndApi()
      try{
        const response = await api.verificaCPFExistente( this.CPF )
        console.log(response)
        if(response.id != null){
          this.campoCpfValido = false
          this.erroCPF =  "CPF já cadastrado"
        } 
        else {
          this.campoCpfValido = true
        }
      }
      catch(err){
        console.log(err)
      }
    },
    async verificaEmailExistente(){ /*metodo que verifica no banco se o Email ja esta cadastrado*/
      console.log("verificando email")
      const api = new BackEndApi()
      try{
        const response = await api.verificaEmailExistente( this.$refs.email.value )
        console.log(response)
        if(response.id != null){
          this.campoEmailValido = false  
          this.erroEmail = 'Endereço de email já cadastrado' 
        }
        else{
          this.campoEmailValido = true
        }
      }
      catch(err){
        console.log(err)
      }
    },
    async convertFile(){ /*metodo que faz a conversao do arquivo .pdf para String*/
      this.arquivoEmBase64 = await this.getFileInBase64()
      console.log('Arquivo Ok')
    },
    async getFileInBase64(){ /*método que salva o arquivo curriculo com a data de envio */
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(this.$refs.arquivos.files[0]);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      })
    }
  },
  computed: {
  isFormValid () {
      return !Object.keys(this.fields).some(key => this.fields[key].invalid) && this.campoEmailValido && this.campoCpfValido
    }
  }
}
</script>
<style>
.gradiente {
  background-image: linear-gradient( 120deg, rgb(53,208,88), rgb(61, 131, 206));
}
</style>

