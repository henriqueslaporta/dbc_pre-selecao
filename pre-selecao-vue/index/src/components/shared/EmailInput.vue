<template>
  <div class="form-group">
    <label for="exampleInputEmail1">Email:</label>
    <input type="text" 
          v-validate=" 'required|email' " 
          v-bind:name="nome" 
          v-model="value" 
          class="form-control" 
          id="exampleInputEmail1"
          placeholder="usuario@email.com"
          data-vv-as="email"
          v-on:change="funcao"
          >
    <span>{{errors.first( this.nome )}}</span>
  </div>
</template>
<script>
export default {
  name: 'EmailInput',
  props: {
    nome: String,
    funcao: Function
  },
  data: () => {
    return {
      value: ''      
    }
  }
}
</script>
