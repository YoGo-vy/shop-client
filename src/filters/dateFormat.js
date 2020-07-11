import Vue from 'vue'
import { format } from 'date-fns'
Vue.filter('date-format', (value) => {
  return format(value, 'yyyy-MM-dd HH:mm')
})
