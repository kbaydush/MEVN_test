<template>
  <div class="container">
    <b-form @submit="addTask(title, desc, status)">
  <b-row>
    <b-col md="6">
      <b-card>
        <div slot="header">
          <strong>Basic Form</strong> Elements
        </div>
        <b-form-group
          description="Let us know your full name."
          label="Enter task title"
          label-for="title"
          :label-cols="3"
          :horizontal="true">
          <b-form-input
            id="title"
            v-model="title"
            type="text"/>
        </b-form-group>
        <b-form-group
          label="Textarea"
          label-for="desc"
          :label-cols="3"
          :horizontal="true">
          <b-form-input
            id="desc"
            :textarea="true"
            v-model="desc"
            :rows="9"
            placeholder="Description..."/>
        </b-form-group>
        <b-form-group
          label="Select"
          label-for="status"
          :label-cols="3"
          :horizontal="true">
          <b-form-select
            id="status"
            v-model="status"
            :plain="true"
            :options="['New','In progress', 'Resolved', 'On test']"
            value="Please select"/>
        </b-form-group>
        <b-button
          variant="primary"
          type="submit"
          class="px-4">Submit</b-button>
      </b-card>
    </b-col>
  </b-row>
    </b-form>
  </div>
</template>

<script>
  import { db } from "../../firebase";
  export default {
    name: 'HelloWorld',
    data () {
      return {
        // tasks: [],
        title: '',
        desc: '',
        status: '',
        userId: '',
      }
    },
    // firestore () {
    //   return {
    //     tasks: db.collection('tasks').orderBy('createdAt')
    //   }
    // },
    computed:{
      currentUser: function() {
        return this.$store.getters.currentUser
      },
    },
    methods: {
      addTask (title, desc, status) {
        const createdAt = new Date()
        const uId = this.currentUser
        const userId = uId.id
        db.collection('tasks').add({ title: title, desc: desc, createdAt: createdAt, status: status, userId: userId })
      }
    }
  }
</script>

<style scoped>

</style>
