<template>
  <div class="container">
    <b-form @submit.prevent="addTask()">
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
            v-model="newTask.title"
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
            v-model="newTask.desc"
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
            v-model="newTask.status"
            :plain="true"
            :options="['New','In progress', 'Resolved', 'On test']"
            value="Please select"/>
        </b-form-group>
        <b-button
          variant="primary"
          type="submit"
          class="px-4" @submit.prevent="false">Submit</b-button>
      </b-card>
    </b-col>
  </b-row>
    </b-form>
    <ul class="errors">
      <li v-show="!validation.title">Name cannot be empty.</li>
      <li v-show="!validation.desc">Please provide a valid email address.</li>
    </ul>
  </div>
</template>

<script>
  import { db } from "../../firebase";

  export default {
    name: 'Add',
    data () {
      return {
        newTask: {
          title: '',
          desc: '',
          status: '',
          userId: '',
        },
      }
    },
    // firestore () {
    //   return {
    //     tasks: tasksRef,
    //   }
    // },
    computed:{
      currentUser: function() {
        return this.$store.getters.currentUser
      },
      validation: function () {
        return {
          title: !!this.newTask.title.trim(),
          desc : !!this.newTask.desc.trim(),
          status : !!this.newTask.status.trim(),
        }
      },
      isValid: function () {
        var validation = this.validation
        return Object.keys(validation).every(function (key) {
          return validation[key]
        })
      }
    },
    methods: {
      addTask () {
        if (this.isValid) {
          this.newTask.createdAt = new Date()
          this.newTask.uId = this.currentUser
          this.newTask.userId = this.newTask.uId.id
          db.collection('tasks').add(this.newTask)
          this.newTask.title = ''
          this.newTask.desc = ''
          this.newTask.createdAt = ''
          this.newTask.status = ''
          this.newTask.userId = ''
        }
        this.$router.push({path: '/list'});

        // tasksRef.add({ title: title, desc: desc, createdAt: createdAt, status: status, userId: userId })

      }
    }
  }
</script>

<style scoped>

</style>
