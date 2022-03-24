<template>
  <div class="signup">
    <div class="signupfrm">
      <form action="" class="form">
        <h1 class="title">USER LOGIN</h1>

        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" />
          <label for="" class="label">Username</label>
        </div>

        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" />
          <label for="" class="label">Password</label>
        </div>
        <router-link :to="{ name: 'UserSignup' }"
          ><input type="submit" class="signupbutton" value="SIGNUP"
        /></router-link>
        <input type="submit" class="submitBtn" value="LOGIN" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSignup",
  data() {
    return {
      Email: "",
      UserName: "",
      Password: "",
      ConfirmPassword: "",
    };
  },
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
  background-color: purple;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: -50px;
}

.submitBtn:hover {
  background-color: #9867c5;
  transform: translateY(-2px);
}
.input:focus + .label {
  top: -7px;
  left: 3px;
  z-index: 10;
  font-size: 14px;
  font-weight: 600;
  color: purple;
}
.signupbutton {
  display: block;
  margin-right: auto;
  padding: 15px 30px;
  border: none;
  background-color: purple;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 60px;
}

.signupbutton:hover {
  background-color: #9867c5;
  transform: translateY(-2px);
}
</style>
  