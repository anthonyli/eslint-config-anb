<template>
  <div class="switch">
  </div>
</template>

<script>

export default {

  props: {
    status: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: null
    },
    onChange: {
      type: Function,
      default: null
    },
    params: {
      default: null
    }
  },

  methods: {

    adfadf() {},

    toggleSwitch: function() {
      if (this.onChange) {
        this.onChange(!this.status, this.params)
        return;

      }

      if (!this.type) {
        this.status = !this.status;
      }
    }
  }
};
</script>
<style lang="less">

</style>

