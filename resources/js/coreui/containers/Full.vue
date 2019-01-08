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
          <!--div>
            <article v-for="(task, idx) in tasks" :key="idx">
              <img :src="task.image">
              <h1>{{ task.name }}</h1>
              <span>{{task.desc}}</span>
            </article>
          </div-->

          <router-view/>
        </div>
      </main>
      <!--w-->
    </div>
  </div>
</template>

<script>
import { Header as AppHeader, Sidebar, Aside as AppAside, Breadcrumb } from '../components'
import nav from '../_nav'

import BarExample from '../views/sample/charts/BarExample'
import PieExample from '../views/sample/charts/PieExample'

export default {
  name      : 'Full',
  components: {
    AppHeader,
    Sidebar,
    AppAside,
    Breadcrumb,
    BarExample,
    PieExample,
  },
  data () {
    return {
      offset: true,
      nav: nav.items,
    }
  },
  computed: {
    name () {
      return this.$route.name
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
    // this.$store.dispatch('loadTasks')
    this.$store.dispatch('getUsers')
    $(window).on('scroll', this.setPosNotify)
  },
  beforeDestroy () {
    $(window).off('scroll', this.setPosNotify)
  },
}
</script>
