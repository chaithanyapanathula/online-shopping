<template>
  <div class="Profile">
    <div class="userprofile">
      <router-link :to="{ name: 'UserLogin' }"
        ><div>
          <img
            src="./images/userimage.png"
            alt="USER"
            style="width: 300px; height: 300px"
          />
          <div class="container">
            <h4><b>USER</b></h4>
          </div>
        </div></router-link
      >
    </div>
    <div class="userprofile">
      <router-link :to="{ name: 'Sellerlogin' }"
        ><div>
          <img
            src="./images/seller.webp"
            alt="SELLER"
            style="width: 300px; height: 300px"
          />
          <div class="container">
            <h4><b>SELLER</b></h4>
          </div>
        </div></router-link
      >
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "LoginPortal",
};
</script>

<style scoped>
.Profile {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.userprofile {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  width: 40%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 5px 5px 0 0;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>