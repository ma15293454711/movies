<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <ul v-if="value.length">
      <li v-for="data in cinemaList">
        <div class="left">
          <p>{{data.name}}</p>
          <span>{{data.address}}</span>
        </div>
        <div class="right">
          <span>{{data.lowPrice/100}}起</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    mounted(){
      console.log(this.$store.state.cinemaList);
    },
    data() {
      return {
        value: '',
      };
    },
    methods: {
      onSearch(val) {
        Toast(val);
      },
      onCancel() {
        Toast('取消');
      }
    },
    computed:{
      cinemaList(){
        // 判断当前cinemaList 是否有数据  有才直接用   没有就请求getCinemaList
        return this.$store.state.cinemaList.filter(item=>item.name.includes(this.value))
      }
    }
  };
</script>

<style lang="scss" scoped="scoped">
  ul{
    li{
      display: flex;
      flex-wrap: wrap;
      height:6.25rem;
      width:100%;
      margin-bottom:10px;
      .left{
        flex:3;
        background:pink;
      }
      .right{
        flex:1;
        background:skyblue;
      }
    }
  }
</style>
