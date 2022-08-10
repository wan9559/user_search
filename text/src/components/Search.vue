<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model='keyWord' @keyup.enter='searchUser'/>&nbsp;
            <button @click="searchUser">Search</button>
        </div>
    </section>
</template>


<script>
import axios from 'axios'
export default {
    name: 'Search',
    data() {
        return {
            keyWord: ''
        }
    },
    methods: {
        
        searchUser() {    
            this.$bus.$emit('updateListData',{users:[],isFirst:false,isLoading:true,errMsg:''})
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`)
                .then(response => {
                    // this.$bus.$emit('updateListData',response.data.items)
                     this.$bus.$emit('updateListData',{users:response.data.items,isLoading:false,errMsg:''})
                }, err => {
                    // this.$bus.$emit('getErr',err.message)
                    this.$bus.$emit('updateListData',{users:[],isLoading:false,errMsg:err.message})
                     console.log('接收失败', err.message)
                })
        }
    },

}
</script>

<style>
</style>