<template>
    <div id="autorization">
        <h1>{{msg}}</h1>
        <b-container fluid class="mt--7">
          <b-row class="justify-content-center">
            <b-col lg = 6>
              <b-card no-body>
                <b-tabs card card-header tabs fill>
                  <b-tab title="Login" active body-class="text-center" header-tag="nav" align="center" :title-link-class="'tab-title-class'">
                    <h2>Enter your login and password:</h2>
                    <b-card-text>
                      <b-alert :show="loginWarnings.showLoginAlert" variant="danger">Please, enter login</b-alert>
                      <b-form-input v-model="loginData.login" :state="loginData.loginValid" id="input-login" size="lg" placeholder="Login"></b-form-input>
                    </b-card-text>
                    <b-card-text>
                      <b-alert :show="loginWarnings.showPasswordAlert" variant="danger">Please, enter password</b-alert>
                      <b-form-input v-model="loginData.pass" :state="loginData.passValid" id="input-pass" size="lg" placeholder="Password" type="password"></b-form-input>
                    </b-card-text>
                    <b-button class="btn-lg btn-block" type="dark" variant="dark" @click="checkLogin()">Login!</b-button>
                  </b-tab>
                  <b-tab title="Register" body-class="text-center" header-tag="nav" align="center" :title-link-class="'tab-title-class'">
                    <h2>Enter registration data below:</h2>
                    <b-card-text>Register contents</b-card-text>
                  </b-tab>
                </b-tabs>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'AutorizationForm',
  data () {
    return {
      msg: 'Welcome to Autorization form!',
      loginWarnings: {
        showLoginAlert: false,
        showPasswordAlert: false
      },
      loginData: {
        login: '',
        pass: '',
        loginValid: null,
        passValid: null
      }

    }
  },
  methods: {
    checkLogin: function () {
      console.log(`LOGIN! login = ${this.loginData.login}, pass = ${this.loginData.pass}`)
      if (this.loginData.login === '') {
        this.loginWarnings.showLoginAlert = true
        this.loginData.loginValid = false
      } else {
        this.loginWarnings.showLoginAlert = false
        this.loginData.loginValid = true
      }

      if (this.loginData.pass === '') {
        this.loginWarnings.showPasswordAlert = true
        this.loginData.passValid = false
      } else {
        this.loginWarnings.showPasswordAlert = false
        this.loginData.passValid = true
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.tab-title-class {
    color: #42b983;
}
.tab-title-class:hover {
    color: #00ff00;
}
</style>
