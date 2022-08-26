<template>
  <div id="container">
    <table id="tableComponent">
      <thead>
        <tr>
          <!-- loop through each value of the fields to get the table header 
          @click="sortTable(field)"-->
          <th v-for="column in fields" :key="column">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through the list get the each student data -->
        <tr v-for="ride in rides" :key="ride">
          <td v-for="field in fields" :key="field">{{ ride[field] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>
<script>
export default {
  name: "TableComponent",
  props: {
    //
    rides: {
      type: Array,
    },
    fields: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
      table {
        width: 80%;
        overflow: hidden;
        border-spacing: 0;
        border-collapse: collapse;
        border-radius: 10px;
        border: 1px solid black;
        
        th {
          background-color: black;
          color: whitesmoke;
        }
        th,td {
          text-align: left;
          padding: 8px 5px;
        }
        tr:nth-child(even) {
          background-color: white;
        }
        tr:nth-child(odd) {
          background-color: whitesmoke;
        }
      }
</style>
