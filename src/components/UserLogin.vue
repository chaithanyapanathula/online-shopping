<template>
  <div class="signup">
    <div class="signupfrm">
      <form action="" class="form">
        <h1 class="title">USER LOGIN</h1>

        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" v-model="username" />
          <label for="" class="label">username</label>
        </div>

        <div class="inputContainer">
          <input type="password" class="input" placeholder="a" v-model="password" />
          <label for="" class="label">Password</label>
        </div>
        <router-link :to="{ name: 'UserSignup' }"
          ><input type="submit" class="signupbutton" value="SIGNUP"
        /></router-link>
        <router-link :to="{ name: 'ProductComponent' }">

        <input type="submit" class="submitBtn" @click="handleSubmit" value="LOGIN" />
        </router-link>
      </form>
    </div>
  </div>
</template>
 
<script>
import axios from 'axios'
export default {
  name: "UserLogin",
  data() {
    return {
     username: "",
      // UserName: "",
      password: "",
      
    };
  },
  methods:{
    // UserLogin(){
    //   alert("You Have Successfully Logged In ....");
  

    // },
   async handleSubmit()

  {
     const response=await axios.post('http://localhost:8081/signin/',{
      username:this.username,
      password:this.password,
    })
    localStorage.setItem('accessToken',response.data.accessToken);
    
  }

  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
.signup {
  box-sizing: border-box;
  text-align: center;
  margin-left: 500px;

  padding: 0;
  background-color: white;
  font-family: "lato", sans-serif;
}

.signupFrm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form {
  background-color: white;
  width: 400px;
  border-radius: 8px;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
}

.title {
  font-size: 50px;
  margin-bottom: 50px;
}
.inputContainer {
  position: relative;
  height: 45px;
  width: 90%;
  margin-bottom: 17px;
}
.input {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  border: 1px solid #dadce0;
  border-radius: 7px;
  font-size: 16px;
  padding: 0 20px;
  outline: none;
  background: none;
  z-index: 1;
}

::placeholder {
  color: transparent;
}
.label {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 0 4px;
  background-color: white;
  color: #dadce0;
  font-size: 16px;
  transition: 0.5s;
  z-index: 0;
}
.submitBtn {
  display: block;
  margin-left: auto;
  padding: 15px 30px;
  border: none;
  background-color: blac;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: -50px;
}

.submitBtn:hover {
  background-color: #555;
  transform: translateY(-2px);
}
.input:focus + .label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 14px;
  font-weight: 600;
  color: #555;
}
.signupbutton {
  display: block;
  margin-right: auto;
  padding: 15px 30px;
  border: none;
  background-color: #555;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 60px;
}

.signupbutton:hover {
  background-color:  #555;
  transform: translateY(-2px);
}
</style>
  