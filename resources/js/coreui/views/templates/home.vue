<template>
  <div class="animated fadeIn">
    <b-card-group
      columns
      class="card-columns cols-2">
      <b-card header="Bar Chart" class="width=50%; float-left">
        <div class="chart-wrapper">
          <bar-example/>
        </div>
      </b-card>
      <b-card header="Pie Chart" class="width=50%; float-left">
        <div class="chart-wrapper">
          <pie-example/>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
  import BarExample from '../sample/charts/BarExample'
  import PieExample from '../sample/charts/PieExample'

  export default {
    name      : 'Charts',
    components: {
      BarExample,
      PieExample,
    },
  }
</script>
