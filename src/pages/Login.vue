<template>
    <section id="login">
        <form action="/" method="post">
          <input type="text" name="email" placeholder="Type your email">
          <br>
          <input type="password" name="password" placeholder="Type your password">
          <br>
          <button type="submit">{{ msg }}</button>
        </form>
      </section>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                msg: 'Test'
            }
        }
    }
</script>