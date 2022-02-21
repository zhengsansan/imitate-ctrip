<template>
  <div id="nav">
    <Header />
    <Container />
    <Footer />
  </div>
  <router-view/>
</template>

<script>

import Footer from '@/views/Footer.vue';
import Header from '@/views/Header.vue';
import Container from '@/views/Container.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Container,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    color: #3983e5;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
html, body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend,
input, textarea, p, blockquote, th, td, em, button {
  margin: 0;
  padding: 0;
}
ul, li, ol, ul {
  list-style: none;
}

body {
  font: 12px/1.5 "Microsoft yahei",arial,Simsun,sans-serif;
  color: #333;
  background-color: #fff;
}
</style>
