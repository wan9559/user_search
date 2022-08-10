<template>
    <div class="row">
        <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style='width: 100px' />
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>
        <!--  是否是初次展示 -->
        <h1 v-show="info.isFirst">欢迎使用</h1>
        <!-- 是否处于加载中 -->
        <h1 v-show="info.isLoading">正在加载中...</h1>
        <!-- 是否出现错误 错误的详细信息 -->
        <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    </div>
</template>


<script>
export default {
    name: 'List',
    data() {
        return {
            info: {
                users: [],
                // 是否是初次展示
                isFirst: true,
                // 是否处于加载中
                isLoading: false,
                // 是否出现错误 错误的详细信息
                errMsg: '',
            }

        }
    },
    mounted() {
        this.$bus.$on('updateListData', (data) => {
            this.info=data
        })
    },
    beforeDestroy() {
        this.$bus.$off('updateListData')
    }

}
</script>

