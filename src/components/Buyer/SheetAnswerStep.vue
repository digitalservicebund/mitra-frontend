<script setup lang="ts">
  import Column from "primevue/column"
  import DataTable, { DataTableCellEditCompleteEvent } from "primevue/datatable"
  import InputText from "primevue/inputtext"
  import { SheetAnswerStep, Row } from "../../domain/Step"
  import { getColumns, rowHasValues } from "./SheetHelper"

  const props = defineProps<{ step: SheetAnswerStep }>()
  const columns = getColumns(props.step)

  const getPaddedSheet = (step: SheetAnswerStep, n: number): Row[] => {
    const emptyRow = Object.fromEntries(
      getColumns(step).map((column) => [column, ""])
    )
    const nEmptyRows = step.answer.value.filter(
      (row) => !rowHasValues(row)
    ).length

    let sheet = step.answer
    for (let i = 0; i < n - nEmptyRows; i++) {
      sheet.value.push(emptyRow)
    }

    return sheet.value
  }

  const onCellEditComplete = (event: DataTableCellEditCompleteEvent) => {
    const { index, field, newValue } = event
    props.step.updateCell(index, field, newValue)
  }

  function selectAll(e: Event) {
    ;(e.target as HTMLInputElement).select()
  }
</script>

<template>
  <div class="mb-4">
    {{ step.text }}
  </div>
  <div class="mb-4">
    <DataTable
      id="edit-sheet"
      :value="getPaddedSheet(step, 3)"
      edit-mode="cell"
      class="p-datatable-sm editable-cells-table"
      auto-layout
      @cell-edit-complete="onCellEditComplete"
    >
      <Column v-for="col of columns" :key="col" :field="col" :header="col">
        <template #editor="{ data, field }">
          <InputText
            v-model="data[field]"
            class="w-full m-0"
            @focus="selectAll"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style>
  .editable-cells-table td.p-cell-editing,
  .editable-cells-table td.p-cell-editing .p-inputtext {
    padding-top: 0;
    padding-bottom: 0;
  }
</style>
