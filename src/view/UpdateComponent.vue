<template>
<h1>Hello , Welcome on Update page</h1>

</template>

<script>


export default{
    name:'UpdateComponent',
    components:{

    },
    mounted() {
        let user=localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({name:'Update'})
            
        }

    }
}

</script>