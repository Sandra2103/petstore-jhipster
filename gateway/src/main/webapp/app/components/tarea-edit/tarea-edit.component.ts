import { defineComponent, type PropType } from 'vue'; // Importa 'PropType' como tipo.
import { Tarea } from '@/shared/model/tarea.model';

export default defineComponent({
  name: 'TareaEdit',
  props: {
    tarea: {
      type: Object as PropType<Tarea>,
      required: true
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    saveTarea() {
      if (this.tarea) {
        this.$emit('update:tarea', this.tarea);
      }
    },
    cancelTarea() {
      this.$emit('cancel:tarea');
    },
    isNombreValid() {
      // Aseguramos que `tarea` no es `null` o `undefined`
      return this.tarea?.nombre?.length ? 
             this.tarea.nombre.length >= 3 && this.tarea.nombre.length <= 50 : 
             false;
    },
    isDescripcionValid() {
      // Aseguramos que `tarea` no es `null` o `undefined`
      return this.tarea?.descripcion?.length ? 
             this.tarea.descripcion.length >= 3 && this.tarea.descripcion.length <= 100 : 
             false;
    },
    isDateValid() {
      const fechaLimite = this.tarea?.fechaLimite;
      if (!fechaLimite) return false; // Devuelve `false` si `fechaLimite` es `null` o `undefined`

      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const current = new Date(
        fechaLimite.getFullYear(),
        fechaLimite.getMonth(),
        fechaLimite.getDate()
      );
      return current >= today;
    }
  }
});