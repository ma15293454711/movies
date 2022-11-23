<template>
    <tabbar></tabbar>
</template>
<script>
  import Tabbar from "@/components/Tabbar"
  export default {
    methods:{
      go(url){
        this.$router.push(`http://localhost:8080/#${url}`);
      }
    },
    components:{
      Tabbar:Tabbar
    }
  }
</script>
<style>
  *{
    margin:0px;
    padding: 0px;
  }
  .select{
    color:red;
  }
  ul{
    list-style: none;
  }
</style>
