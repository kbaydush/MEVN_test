<template>
      <router-view/>
</template>

<script>
  export default {
    computed:{
      currentUser(){
        return this.$store.getters.currentUser
      }
    }
  }
</script>
