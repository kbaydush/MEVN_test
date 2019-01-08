<template>
  <b-card :header="caption">
    <b-table
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :hover="hover"
      :striped="striped"
      :bordered="bordered"
      :small="small"
      :fixed="fixed"
      responsive="sm"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
    >
      <template
        slot="status"

        slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{ data.item.status }}</b-badge>
        <b-button
          size="sm" class="float-right"
          variant="outline-danger" @click="deleteRow(data.item)">Delete</b-button>
      </template>
    </b-table>
    <nav>
      <b-pagination
        :total-rows="getRowCount(items)"
        :per-page="perPage"
        v-model="currentPage"
        prev-text="Prev"
        next-text="Next"
        hide-goto-end-buttons/>
      <b-button variant="primary" href="/add"><i class="fa fa-star"/>&nbsp; Add Task</b-button>
    </nav>
  </b-card>
</template>

<script>
  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j    = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i]   = array[j]
      array[j]   = temp
    }
    return array
  }
  import { db } from "../../../firebase";
  export default {
    name : 'CTable',
    props: {
      caption: {
        type   : String,
        default: 'Table',
      },
      hover: {
        type   : Boolean,
        default: false,
      },
      striped: {
        type   : Boolean,
        default: false,
      },
      bordered: {
        type   : Boolean,
        default: false,
      },
      small: {
        type   : Boolean,
        default: false,
      },
      fixed: {
        type   : Boolean,
        default: false,
      },
    },
    firestore () {

      const uId = this.currentUser
      const userId = uId.id
      const query = db.collection('tasks').orderBy('createdAt').where('userId', '==', userId);

      query.get().then(snapshot => {
        snapshot.docs.forEach(doc => {

            this.items.push(doc.data());
            // this.items.push(doc.id);
            console.log(this.items);
        })
      })

    },
    computed:{
      currentUser: function() {
        return this.$store.getters.currentUser
      },
    },
    data: () => {
      return {
        sortBy: 'createdAt',
        sortDesc: false,
        items: [],
        //   shuffleArray([
        //   {
        //     name  : 'Samppa Nori', createdAt: '2012/01/01', desc: 'Member', status    : 'Active',
        //   },
        //
        // ]),
        fields: [
          { key: 'title'},
          { key: 'desc'},
          { key: 'createdAt', sortable: true },
          { key: 'status'},
        ],
        currentPage: 1,
        perPage    : 5,
        totalRows  : 0,
      }
    },
    methods: {
      getBadge (status) {
        return status === 'Resolved' ? 'success'
          : status === 'In progress' ? 'secondary'
            : status === 'On test' ? 'warning'
              : status === 'New' ? 'danger' : 'primary'
      },
      getRowCount (items) {
        return items.length
      },
      deleteRow (item) { console.log(item.userId)
        db.collection("tasks").where('title', '==', item.title).delete();
      },
    },
  }
</script>
