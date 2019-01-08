<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-form @submit="register">
        <b-row class="justify-content-center">
          <b-col
            md="6"
            sm="8">
            <b-card
              no-body
              class="mx-4">
              <b-card-body class="p-4">
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"/></b-input-group-text>
                  </b-input-group-prepend>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    id="name"
                    v-validate="'required'"
                    v-model="formRegister.name">
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    id="email"
                    v-validate="'required|email'"
                    v-model="formRegister.email">
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"/></b-input-group-text>
                  </b-input-group-prepend>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    id="password"
                    v-validate="'required|min:6'"
                    v-model="formRegister.password"
                  >
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"/></b-input-group-text>
                  </b-input-group-prepend>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Repeat password">
                </b-input-group>

                <b-button
                  variant="success"
                  type="submit"
                  block>Create Account</b-button>
              </b-card-body>
              <b-card-footer class="p-4">
                <b-row>
                  <b-col cols="6">
                    <b-button
                      block
                      class="btn btn-facebook"><span>facebook</span></b-button>
                  </b-col>
                  <b-col cols="6">
                    <b-button
                      block
                      class="btn btn-twitter"
                      type="button"><span>twitter</span></b-button>
                  </b-col>
                </b-row>
              </b-card-footer>
            </b-card>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
  import {registerUser} from '../partials/auth';
  export default {
    data(){
      return {
        formRegister: {
          name: '',
          email: '',
          password: ''
        },
        error: null
      }
    },
    methods:{
      register(){

        registerUser(this.$data.formRegister)
          .then(res => {
            this.$store.commit("registerSuccess", res);
            this.$router.push({path: '/login'});
          })
          .catch(error => {
            this.$store.commit("registerFailed", {error});
          })
      }
    },
    computed:{
      regError(){
        return this.$store.getters.regError
      }
    }
  }
</script>

<style scoped>
  .error{
    text-align: center;
    color: red;
  }
</style>
