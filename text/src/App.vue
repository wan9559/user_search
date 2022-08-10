<template>
  <div id="app">
    <div class="container">
      <Search></Search>
      <List></List>
    </div>
  </div>
</template>



<script>
import axios from 'axios';
import Search from './components/Search.vue';
import List from './components/List.vue';
export default {
  name: "App",
  components: {
    Search,
    List
  },
}
</script>

<style>
.album {
  min-height: 800px;
  /* Can be removed; just added for demo purposes */
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 25%;
  padding: 10px;
  margin-bottom: 32px;
  border: 1px solid #efefef;
  text-align: center;
}

.card>img {
  margin-bottom: 12px;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
