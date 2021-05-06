<template>
  <button 
    :class="'button ' + action"
    :type="type"
    @click="actionButton()">{{ label }}</button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    label: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      default: 'default',
    },
    confirm: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    actionButton() {
      if (this.confirm) {
        if (confirm('Confirmar operação?')) {
          this.$emit('buttonClick');
        }
        return;
      }

    }
  },
}
</script>

<style scoped>
  .button {
    display: block;
    min-width: 120px;
    margin: 20px auto;
    padding: 15px 30px;
    background-color: transparent;
    color: #673ab7;
    border: 1px solid #673ab7;
    border-radius: 5px;
    transition: all .3s ease;
    cursor: pointer;
  }

  .button.default {
    color: #673ab7;
    border: 1px solid #673ab7;
  }

  .button.default:hover {
    background-color: #673ab7;
    color: #fff;
  }

  .button.success {
    color: #35aa6a;
    border: 1px solid #35aa6a;
  }

  .button.success:hover {
    background-color: #35aa6a;
    color: #fff;
  }
  
  .button.danger {
    color: #cf4646;
    border: 1px solid #cf4646;
  }

  .button.danger:hover {
    background-color: #cf4646;
    color: #fff;
  }

  .button:active {
    background-color: #582ea1;
    color: #fff;
  }
</style>