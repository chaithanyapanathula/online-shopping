<template>
  <div>
    <div class="header">
      <img src="logo.png" />
      <h1>Power Oil & Lubricants</h1>
      <h4><pre>        Power Up Your Vehicles</pre></h4>
    </div>
    <br />
    <header>
      <div class="container_top">
        <h1 class="logo"></h1>

        <nav>
          <ul>
            <li><router-link :to="{ name: 'HomePage' }">Home</router-link></li>
            <li>
              <router-link :to="{ name: 'AboutPage' }">About</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'LoginPortal' }">Login</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'ContactPage' }">Contact</router-link>
            </li>
            <li><router-link :to="{ name: 'CartPage' }">Cart</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <br />
    <br />
  </div>
</template>
<script>
export default {
  name: "TheNavigation",
};
</script>


<style  scoped>
.container_top {
  width: 80%;
  margin: 0px;
}

header {
  background: grey;
}

header::after {
  content: "";
  display: table;
  clear: both;
}

.logo {
  float: left;
  padding: 10px 0;
}

nav {
  float: right;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
  margin-left: 70px;
  padding-top: 23px;

  position: relative;
}

nav a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
}

nav a:hover {
  color: #000;
}

nav a::before {
  content: "";
  display: block;
  height: 5px;
  background-color: white;
  position: absolute;
  top: 0;
  width: 0%;
  transition: all ease-in-out 250ms;
}

nav a:hover::before {
  width: 100%;
}
h1 {
  display: inline;
}
.header img {
  float: left;
  width: 50px;
  height: 50px;
  background: #555;
}

.header h1 {
  position: relative;
  top: 18px;
  left: 10px;
}
</style>
