// 根组件
<template>
  <div class="app">
    我是跟组件
    <router-link to="/">跟组件</router-link>
    <router-link to="/component1">子组件1</router-link>
    <router-link to="/component2">子组件2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>