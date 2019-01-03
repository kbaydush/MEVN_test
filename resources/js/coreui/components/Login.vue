<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-form @submit.prevent="authenticate">
        <div class=”form-group row” v-if="authError">
          <p class=”error”>
            {{authError}}
          </p>
        </div>
        <b-row class="justify-content-center">
          <b-col md="8">
            <b-card-group>
              <b-card
                no-body
                class="p-4">
                <b-card-body>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"/></b-input-group-text></b-input-group-prepend>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      v-model="formLogin.email"
                      id="email">
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"/></b-input-group-text></b-input-group-prepend>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      v-model="formLogin.password"
                      id="password">
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button
                        variant="primary"
                        type="submit"
                        class="px-4">Login</b-button>
                    </b-col>
                    <b-col
                      cols="6"
                      class="text-right">
                      <b-button
                        variant="link"
                        class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>
              <b-card
                no-body
                class="text-white bg-primary py-5 d-md-down-none"
                style="width:44%">
                <b-card-body class="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <b-button
                      variant="primary"
                      class="active mt-3">Register Now!</b-button>
                  </div>
                </b-card-body>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
  import {login} from '../partials/auth';
  export default {
    data(){
      return {
        formLogin: {
          email: '',
          password: ''
        },
        error: null
      }
    },
    methods:{
      authenticate(){
        this.$store.dispatch('login');

        login(this.$data.formLogin)
          .then(res => {
            this.$store.commit("loginSuccess", res);
            this.$router.push({path: '/dashboard'});
          })
          .catch(error => {
            this.$store.commit("loginFailed", {error});
          })
      }
    },
    computed:{
      authError(){
        return this.$store.getters.authError
      },
      registeredUser(){
        return this.$store.getters.registeredUser
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
