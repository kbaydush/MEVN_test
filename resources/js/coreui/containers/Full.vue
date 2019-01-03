<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :nav-items="nav"/>
      <notifications
        class="custom-notifications"
        :style="{ 'margin-top': offset }" />
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view/>
        </div>
      </main>
      <!--w-->
    </div>
  </div>
</template>

<script>
  import { Header as AppHeader, Sidebar, Aside as AppAside, Footer as AppFooter, Breadcrumb } from '../components'

  export default {
    name      : 'Full',
    components: {
      AppHeader,
      Sidebar,
      AppAside,
      AppFooter,
      Breadcrumb,
    },
    data () {
      return {
        offset: true,
      }
    },
    computed: {
      name () {
        return this.$route.name
      },
      nav () {
        return this.$store.getters.moduleListInSidebar;
      },
      list () {
        return this.$route.matched
      },
    },
    methods: {
      setPosNotify () {
        const top    = $(document).scrollTop()
        const height = $('.app-header').height()
        const offset = top < height ? height - top : 0

        this.offset = `${offset}px`
      },
    },
    mounted () {
      // this.$store.dispatch('getModules');
      $(window).on('scroll', this.setPosNotify)
    },
    beforeDestroy () {
      $(window).off('scroll', this.setPosNotify)
    },
  }
</script>
