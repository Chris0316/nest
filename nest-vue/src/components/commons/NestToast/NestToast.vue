<template>
  <transition name="toast">
    <div class="nest-toast" :class="type" v-if="toastShow">
      <div class="toast-icon" v-if="type !== 'info'"></div>
      <div class="toast-text" v-if="type !== 'loading'">{{ message }}</div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "nest-toast",
    data() {
      return {
        toastShow: this.visible
      }
    },
    props: {
      type: {
        type: String,
        default: 'info'
      },
      visible: {
        type: Boolean,
        default: false
      },
      message: {
        type: String,
        default: '消息提示'
      },
      duration: {
        type: Number,
        default: 3000
      },
      callback: {
        type: Function
      }
    },
    mounted() {
      if (this.type !== 'loading')
        this.setTimer();
    },
    methods: {
      close() {
        this.toastShow = false;
        if (this.callback)
          this.callback();
        this.$emit('close');
      },
      setTimer() {
        setTimeout(() => {
          this.close();
        }, this.duration);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toast-leave-active {
    opacity: 0;
  }
  .nest-toast {
    position: fixed;
    top: 35%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    transition: opacity .3s;
    box-sizing: border-box;
    white-space: nowrap;
    z-index: 9;
    &.info {
      padding: 0 .4rem;
      border-radius: .1rem;
      background-color: rgba(0, 0, 0, .7);
      .toast-text {
        height: .8rem;
        line-height: .8rem;
        color: #fff;
        font-size: .28rem;
      }
    }
    &.loading {
      border-radius: .2rem;
      box-shadow: 0 .04rem .2rem rgba(0,0,0,.1);
      background-color: #fff;
      .toast-icon {
        width: 1.6rem;
        height: 1.6rem;
        background: url('../../../assets/images/loading.gif') no-repeat center center;
        background-size: 1rem 1rem;
      }
    }
  }
</style>
