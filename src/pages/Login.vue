<template>
  <form class="login" @submit.prevent="signIn()">
    <header class="login__header">Login</header>
    <section class="login__body">
      <label>Email</label>
      <input class="form-element" type="email" name="email" placeholder="Type your email" v-model="email">
      <label>Password</label>
      <input class="form-element" type="password" name="password" placeholder="Type your password" v-model="password">
      <button class="btn btn--confirm" type="submit">Sign In</button>
    </section>
  </form>
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