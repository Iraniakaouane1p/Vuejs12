<template>
    <div class="nav">
        <router-link to="/">Sign Up</router-link>
       
        <router-link to="/Add">Add</router-link>
        <router-link to="/Update">Update</router-link>
        <router-link to="/Contact">Contact</router-link>
        
    </div>
</template>
<script>
export default{
   name:'AppHeader'
}
</script>
<style>
.nav{
    background-color: skyblue;
    overflow: hidden;
}
.nav a{
    float:left;
    color: #f2f2f2;
    padding: 16px 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;

}
.nav a:hover{
    background: #ddd;
    color: #333;
    
}
</style>