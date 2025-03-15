import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(5)
    const doubleCount = computed(() => count.value * 2)

    function increment() {
      count.value++
    }

    const str = ref('李四')


    return {
      count,
      doubleCount,
      increment,
      str
    }
  },
  {
    createPinia: true
  })
