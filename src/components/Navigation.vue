<template>
  <div>
    <div class="header" style="padding-left:20px;"> 
      <img src="logo.png" class="rotate"  />
      <h1>Power Oil & Lubricants</h1>
      <p><span class="words"></span><span class="accessibility"></span></p>
    
    </div>
    <br />
    <header>
      <div class="container_top">
       

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
  animation-iteration-count: 2;
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
.rotate {
  animation: rotation 8s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(0deg);
  }
}
@keyframes words {
  0% {content: "Power";}
  30% {content: "Power Up ";}
  50% {content: "Your";}
  75% {content: "Vehicles";}
  
}
@keyframes cursor {
  0% {content: "";}
  50% {content: "|";}
  100% {content: "";}
}
.words::before {
  animation: words 2s linear 0s 1 normal forwards;
  content: "";
}

.words::after {
  animation: cursor 0.6s linear 2.2s 1 normal forwards, cursor 0.6s linear 4s 3 normal forwards;
  content: "|";
}
.accessibility {
  width: 0; 
  display: inline-block; 
  overflow: hidden; 
  white-space:nowrap;
}

@media screen and (min-width: 400px) {
  .container_top {
    background-color: lightgreen;
  }
}
 
</style>
