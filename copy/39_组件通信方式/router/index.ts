import { createRouter, createWebHistory } from 'vue-router'
import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_custom-event/Father.vue'
import Bus from '@/pages/03_mitt/Father.vue'
import Model from '@/pages/04_v-model/Father.vue'
import AttrsListeners from '@/pages/05_$attrs/Father.vue'
import RefChildrenParent from '@/pages/06_$refs-$parent/Father.vue'
import ProvideInject from '@/pages/07_provide-inject/Father.vue'
import Pinia from '@/pages/08_pinia/Father.vue'
import Slot1 from '@/pages/09_slot_default/Father.vue'
import Slot2 from '@/pages/10_slot_named/Father.vue'
import Slot3 from '@/pages/11_slot_scoped/Father.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/props',
      component: Props,
    },
    {
      path: '/event',
      component: Event,
    },
    {
      path: '/mitt',
      component: Bus,
    },
    {
      path: '/model',
      component: Model,
    },
    {
      path: '/attrs',
      component: AttrsListeners,
    },
    {
      path: '/refs',
      component: RefChildrenParent,
    },
    {
      path: '/provide',
      component: ProvideInject,
    },
    {
      path: '/pinia',
      component: Pinia,
    },
    {
      path: '/slot1',
      component: Slot1,
    },
    {
      path: '/slot2',
      component: Slot2,
    },{
      path: '/slot3',
      component: Slot3,
    },
  ],
})
