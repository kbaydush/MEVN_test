<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-form @submit="login">
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
                    placeholder="Username"
                    v-model="email"
                    id="email">
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="icon-lock"/></b-input-group-text></b-input-group-prepend>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="password"
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

// import axios from 'axios'
// export default {
//   name: 'Login',
//   data () {
//     return {
//       email   : null,
//       password: null,
//       error   : false,
//     }
//   },
//   methods: {
//     login () {
//       if (this.email.length && this.password.length) {
//         axios.get(`http://myapi/CheckForUser/${this.username}/${this.password}`).then(response => {
//           let user = response.data
//           if (user && user.Role === 1) {
//             this.$store.commit('login', user)
//             this.$router.go('/')
//           } else {
//             this.loginError = true
//             this.loginErrorMessage = 'not enough preveleges to access'
//           }
//         }).catch(err => {
//           console.log(err)
//         })
//       }
//     },
//   },
//   mounted () {
//     if (this.$store.getters.logged) {
//       this.$router.go('/')
//     }
//   },
// }

export default {
  data () {
    return {
      email   : null,
      password: null,
      error   : false,
      show: false
    }
  },
  methods: {
    login () {
      const app = this
      this.$auth.login({
        params: {
          email   : app.email,
          password: app.password,
        },
        success   : function (response) {
          alert(response)
          console.log(response)
          this.$auth.token('access_token', response.data.access_token)
        },
        error     : function (res) {
          this.$notify({
            component: {
              template: '<span><strong>Oops, something went wrong... </strong><br>Not possible to login because of an internal server error</span>'
            },
            icon: 'fa fa-exclamation',
            horizontalAlign: 'right', // right | center | left
            verticalAlign: 'top', // top | bottom
            type: 'danger'  // info | success | warning | danger
          })
          this.error_msg = 'Not possible to login'
        },
        rememberMe: true,
        redirect  : '/dashboard',
        url: 'http://localhost:8000/api/login',
        fetchUser : true,
      })
    },
    mounted () {
      if(this.$store.getters.logged) {
        this.$router.go('/')
      }
    },
  },
}
</script>
