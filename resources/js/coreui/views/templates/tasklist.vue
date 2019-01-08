<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <c-table
          hover
          striped
          bordered
          small
          fixed
          caption="<i class='fa fa-align-justify'></i> Task list"/>
      </b-col>
    </b-row>
  </div>

</template>

<script>
  import cTable from '../sample/base/Table.vue'

  export default {
    name      : 'tasklist',
    components: { cTable },
  }
</script>
