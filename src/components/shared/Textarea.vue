<template>
  <div class="form-group">
    <label class="label" v-if="label" :for="identifier">{{ label }}</label>
    <textarea
      :id="identifier"
      :class="`field ${this.addClass}`"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @click="$emit('click', $event)"
      @blur="$emit('setValue', $event.target.value)"
      autocomplete="off"
    ></textarea>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    identifier: {
      type: String,
      required: true,
    },
    addClass: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
  .form-group {
    max-width: 400px;
    margin: 0 auto 30px;

    .label {
      display: block;
      margin-bottom: 5px;
      font-size: 13px;
      font-weight: bold;
    }

    .field {
      display: block;
      width: 100%;
      height: 100px;
      padding: 10px 15px;
      background-color: #fafafa;
      line-height: 24px;
      border: 1px solid #eeeeee;
      border-radius: 5px;
      outline: 0;
      box-sizing: border-box;
    }

    .field:focus {
      border-color: #673ab7;
      box-shadow: 0 0 4px rgba(104, 58, 183, 0.5);
    }
  }
</style>