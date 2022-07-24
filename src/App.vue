<template>
  <div>
    <sui-menu>
      <sui-menu-item>
          <sui-image :src="require('@/assets/logo.png')" :style="{ width: '50px' }" />
      </sui-menu-item>
      <sui-menu-item>
        <a href="/">Home</a>
      </sui-menu-item>
      <sui-menu-item>
        <a href="/about">About</a>
      </sui-menu-item>
    </sui-menu>
    <router-view/>

    <user-list />
  </div>
</template>
<script>
import UserList from '@/components/UserList.vue'

export default {
  name: "App",

  components: {
    UserList
  }
}

</script>
