import Toast from './toast'

const install = function (Vue, config = {}) {
  if (install.installed) return
  Vue.$toast = Vue.prototype.$toast = Toast
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Toast
}
