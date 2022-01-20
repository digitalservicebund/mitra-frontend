<script setup lang="ts">
  import Column from "primevue/column"
  import DataTable from "primevue/datatable"
  import { computed } from "vue"
  import { SheetAnswer, SheetAnswerStep } from "../../domain/Step"
  import { getColumns, removeEmptyRows, rowHasValues } from "./SheetHelper"

  const props = defineProps<{ step: SheetAnswerStep }>()

  const hasContent = computed(() => {
    return props.step.answer.value.some((row) => rowHasValues(row))
  })
</script>

<template>
  <div v-if="hasContent" class="mb-4">
    <DataTable
      :value="removeEmptyRows(step.answer as SheetAnswer)"
      edit-mode="cell"
      class="p-datatable-sm"
    >
      <Column
        v-for="col of getColumns(step as SheetAnswerStep)"
        :key="col"
        :field="col"
        :header="col"
      >
      </Column>
    </DataTable>
  </div>
</template>
