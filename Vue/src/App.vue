<template>
<div>
  App Component
  <br />
  <router-link to="/" tag="div">Home</router-link><!--linkไปที่หน้าHome tag="div" คือให้ทำหน้าที่เป็นtag div ด้วย-->
  <br />
  <router-link to="/about">About</router-link>
  <router-view></router-view><!--เป็น tag ชื่อตายตัวเลยที่แสดงview ของ router -->
</div>
</template>
<script>
export default{

}
</script>

<style>

</style>
