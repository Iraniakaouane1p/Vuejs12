<template>
  

    <img class="logo" src="../assets/enlilia-logo-final.png">
    <h1>Sign Up</h1>
    <div class="register">
      <input type="text" placeholder="Enter Name"/>
      <input type="text" placeholder="Enter Email"/>
      <input type="password" placeholder="Enter Password"/>
      <button>Sign up</button>
    </div>
</template>

<script>


export default {
  name: 'SignUp',
  components: {
    
  }
}
</script>

<style>
body{
    padding:0;
    margin:0;
}
.logo {
  width: 100px;
}

.register input {
  width: 300px;
  height: 20px;
  padding: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}
</style>
