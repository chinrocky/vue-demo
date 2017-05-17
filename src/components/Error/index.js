import ErrorComponent from './Error.vue'

const Error = {
  install: function(Vue) {
    Vue.component('Error', ErrorComponent);
  }
}

export default Error
