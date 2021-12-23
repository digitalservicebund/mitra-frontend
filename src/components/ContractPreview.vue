<script setup lang="ts">
  import { ref } from "vue"
  import Contract from "../domain/Contract"

  const props = defineProps<{ contract: Contract }>()

  const modules = ref(props.contract.modules)
</script>

<template>
  <section>
    <h3 class="p-2 font-bold bg-white">Vorschau Vertragstext</h3>
    <article v-for="module in modules" :key="module.id" class="p-2">
      <h4 class="font-bold">{{ module.text }}</h4>
      <div v-for="step in module.path" :key="step.id" class="mt-2">
        {{ step.print() }}
      </div>
    </article>
  </section>
</template>
