<template>
      <router-view/>
</template>

<script>
  export default {
    computed:{
      currentUser(){
        return this.$store.getters.currentUser
      },
      loading() {
          return this.$store.getters.isLoading;
      }
    }
  }
</script>
