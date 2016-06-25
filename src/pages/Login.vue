<template>
  <div class="container-login">
    <form class="login" @submit.prevent="signIn()">
      <h2 class="login__header">Welcome back!</h2>
      <section class="login__body">
        <label for="email">Email</label>
        <input id="email" class="form-element" type="email" name="email" v-model="email">
        <label for="pass">Password</label>
        <input id="pass" class="form-element" type="password" name="password" v-model="password">
        <button class="btn btn--login" type="submit">Sign In</button>
      </section>
    </form>
    </div>
</template>

<script>
    module.exports = {
      data() {
        return {
          email: "",
          password: ""
        };
      },
      methods: {
        signIn() {
          let payload = { email: this.email, pass: this.password };
          this.$http.post('http://adr.dev/login', payload).then((resp) => {
            this.$dispatch('signedIn', resp.data.token);
          }, (resp) => {
            console.log('Error occured');
          });
        }
      }
    }
</script>