import LabelComponent from '@/components/label/label.vue';
import ButtonComponent from '@/components/button/button.vue';
import TareaEdit from '@/components/tarea-edit/tarea-edit.vue';
import calculator from '@/components/calculadora/calculator.vue';

export function initCustomVue(vue) {
  vue.component('daic-label', LabelComponent);
  vue.component('daic-button', ButtonComponent);
  vue.component('daic-tarea-edit', TareaEdit);
  vue.component('calculadora', calculator)
}