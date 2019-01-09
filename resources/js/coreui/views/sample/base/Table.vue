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
  import { db } from "../../../firebase";
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
    computed:{
      currentUser: function() {
        return this.$store.getters.currentUser
      },
    },
    firestore() {
      const uId = this.currentUser
      const userId = uId.id
      const query = db.collection('tasks').orderBy('createdAt').where('userId', '==', userId);

      query.get().then(snapshot => {
        snapshot.docs.forEach(doc => {

          this.items.push(doc.data());
          // this.items.push(doc.id);
        })
      })

    },
    data: () => {
      return {
        sortBy: 'createdAt',
        sortDesc: false,
        // columns: [
        //   {
        //     label: 'Title',
        //     field: 'title',
        //     type: 'string',
        //   },
        //   {
        //     label: 'Desc',
        //     field: 'desc',
        //     type: 'string',
        //   },
        //   {
        //     label: 'Created At',
        //     field: 'createdAt',
        //     type: 'date',
        //     inputFormat: 'DD-MM-YYYY HH:mm:ss', //e.g. 07-09-2017 19:16:25
        //     outputFormat: 'DD-MM-YYYY HH:mm:ss'
        //   },
        //   {
        //     label: 'Status',
        //     field: 'status',
        //     type: 'string',
        //   },
        // ],
        items: [
          // {
          //   title  : 'Samppa Nori', createdAt: '2012/01/01', desc      : 'Member', status    : 'In progress',
          // },
          // {
          //   title  : 'Estavan Lykos', createdAt: '2012/02/01', desc      : 'Staff', status    : 'New',
          // },

        ],
        fields: [
          { key: 'title'},
          { key: 'desc'},
          { key: 'createdAt', sortable: true, type: 'date', formatter: (value, key, item) => {

              // let ts = item.createdAt.nanoseconds;
              // let date = new Date(item.createdAt.TIMESTAMP);

              return moment.unix(item.createdAt.seconds).format("DD-MM-YYYY HH:mm:ss")
            }},
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
      deleteRow (item) {
        var del_query = db.collection('tasks').where('title', '==', item.title).where('desc', '==', item.desc);
        del_query.get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            doc.ref.delete();
          });
        });
        this.$router.push({path: '/list'});
        // db.collection("tasks").where('title', '==', item.title).delete();
      },
    },
  }
</script>
