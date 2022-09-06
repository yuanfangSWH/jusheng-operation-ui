<template>
  <div style="padding: 0 15px;" @click="toggleClick">
<!--    <svg-->
<!--      :class="{'is-active':isActive}"-->
<!--      class="hamburger"-->
<!--      viewBox="0 0 1024 1024"-->
<!--      xmlns="http://www.w3.org/2000/svg"-->
<!--      width="64"-->
<!--      height="64"-->
<!--    >-->
<!--      <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />-->
<!--    </svg>-->
    <svg t="1621405011951" :class="{'is-active':isActive}" class="hamburger" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4214" width="64" height="64">
      <path d="M127.6 259h768.9c35.4 0 64.1-28.7 64.1-64.1s-28.7-64.1-64.1-64.1H127.6c-35.4 0-64.1 28.7-64.1 64.1S92.2 259 127.6 259zM896.4 765H127.6c-35.4 0-64.1 28.7-64.1 64.1s28.7 64.1 64.1 64.1h768.9c35.4 0 64.1-28.7 64.1-64.1S931.8 765 896.4 765zM127.6 576.1H512c35.4 0 64.1-28.7 64.1-64.1s-28.7-64-64.1-64H127.6c-35.4 0-64.1 28.7-64.1 64.1s28.7 64 64.1 64zM938.8 477l-159.1-88.4c-28.2-15.6-62.8 4.7-62.7 36.9v176.7c0 32.2 34.6 52.6 62.8 36.9l159.1-88.4c28.8-15.9 28.8-57.6-0.1-73.7z" p-id="4215" fill="#707070"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
