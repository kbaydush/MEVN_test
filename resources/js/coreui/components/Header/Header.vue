<template>
  <header class="app-header navbar">
    <button
      class="navbar-toggler mobile-sidebar-toggler d-lg-none"
      type="button"
      @click="mobileSidebarToggle">
      <span class="navbar-toggler-icon"/>
    </button>
    <b-link
      class="navbar-brand"
      to="#"/>
    <button
      class="navbar-toggler sidebar-toggler d-md-down-none"
      type="button"
      @click="sidebarToggle">
      <span class="navbar-toggler-icon"/>
    </button>
    <b-navbar-nav class="d-md-down-none">
      <!--b-nav-item class="px-3">Dashboard</b-nav-item>
      <b-nav-item class="px-3">Users</b-nav-item>
      <b-nav-item class="px-3">Settings</b-nav-item-->
      <template v-if="!currentUser">
        <li>
          <b-nav-item class="px-3"> </b-nav-item>
        </li>
        <li>
          <b-nav-item class="px-3"> </b-nav-item>
        </li>
        <li>
          <b-nav-item class="px-3"> </b-nav-item>
        </li>
        <li>
          <b-nav-item class="px-3"> </b-nav-item>
        </li>
        <li>
          <b-nav-item class="px-3"> </b-nav-item>
        </li>
        <li>
          <b-nav-item class="px-3"> </b-nav-item>
        </li>
        <li>
          <b-nav-item class="px-3"> </b-nav-item>
        </li>

        <li>
          <b-button
            variant="outline-success"
            :pressed="true" href="/login">Log In</b-button>

        </li>
        <li>
          <b-nav-item class="px-3"> </b-nav-item>
        </li>
        <li>
          <b-button
            variant="outline-warning"
            :pressed="true" href="/login">Sign Up</b-button>
        </li>
      </template>
      <template v-else>
        <li class="nav-item dropdown">
          <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <b>Welcome!</b> {{currentUser.name}} <span class="caret"></span>
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a href="#!" @click.prevent="logout" class="dropdown-item">Logout</a>
          </div>
        </li>
      </template>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item class="d-md-down-none">
        <i class="icon-bell"/>
        <b-badge
          pill
          variant="danger">5</b-badge>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <i class="icon-list"/>
      </b-nav-item>
      <b-nav-item class="d-md-down-none">
        <i class="icon-location-pin"/>
      </b-nav-item>
      <HeaderDropdown/>
    </b-navbar-nav>
    <button
      class="navbar-toggler aside-menu-toggler d-md-down-none"
      type="button"
      @click="asideToggle">
      <span class="navbar-toggler-icon"/>
    </button>
  </header>
</template>
<script>
import HeaderDropdown from './HeaderDropdown.vue'

export default {
  name      : 'CHeader',
  components: { HeaderDropdown },
  methods   : {
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    },
    logout(){
      this.$store.commit('logout');
      this.$router.push('/login');
    },
  },
  computed:{
    currentUser(){
      return this.$store.getters.currentUser
    }
  }
}

</script>
