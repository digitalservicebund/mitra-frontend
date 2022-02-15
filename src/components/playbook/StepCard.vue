<script setup lang="ts">
  import Button from "primevue/button"
  import ContextMenu from "primevue/contextmenu"
  import Dropdown, { DropdownChangeEvent } from "primevue/dropdown"
  import { ref, Ref } from "vue"
  import { Answer } from "../../domain/Answer"
  import { Step, TextAnswerStep, RichTextAnswerStep } from "../../domain/Step"
  import InplaceEditable from "../InplaceEditable.vue"

  const props = defineProps<{ step: Step<Answer> }>()
  const emit = defineEmits<{
    (e: "addStep"): void
    (e: "duplicateStep"): void
    (e: "deleteStep"): void
    (e: "updateStep", updatedStep: Step<Answer>): void
  }>()

  const isCardOpen = ref(false)
  const openCard = () => (isCardOpen.value = true)
  const toggleCard = () => (isCardOpen.value = !isCardOpen.value)

  const menu = ref<InstanceType<typeof ContextMenu>>()
  const items = [
    {
      label: "Neue Frage",
      command: () => emit("addStep"),
    },
    {
      label: "Frage duplizieren",
      command: () => emit("duplicateStep"),
    },
    {
      label: "Frage löschen",
      command: () => emit("deleteStep"),
    },
  ]
  const openMenu = (event: Event) => {
    ;(menu as Ref<ContextMenu>).value.show(event)
  }

  const stepLabels = {
    TextAnswerStep: "Kurzer Text",
    RichTextAnswerStep: "Langer Text",
  }

  const typeOptions = (
    Object.keys(stepLabels) as Array<keyof typeof stepLabels>
  ).map((type) => {
    return {
      modelValue: type,
      name: stepLabels[type],
    }
  })

  const selectedType = ref(
    typeOptions.find((type) => type.modelValue === props.step.type)
  )
  const handleUpdateType = (e: Event) => {
    emit(
      "updateStep",
      (() => {
        const newType = (e as unknown as DropdownChangeEvent).value.modelValue
        if (newType === RichTextAnswerStep.TYPE) {
          return new RichTextAnswerStep(props.step.prompt, {
            description: props.step.description,
            id: props.step.id,
          })
        }
        if (newType === TextAnswerStep.TYPE) {
          return new TextAnswerStep(props.step.prompt, {
            description: props.step.description,
            id: props.step.id,
          })
        }
        throw new Error("Unknown step type")
      })()
    )
  }

  const handleUpdateTitle = (newTitle: string) => {
    const updatedStep: Step<Answer> = props.step
    updatedStep.prompt = newTitle
    emit("updateStep", updatedStep)
  }
  const handleUpdateDescription = (newDescription: string) => {
    const updatedStep: Step<Answer> = props.step
    updatedStep.description = newDescription
    emit("updateStep", updatedStep)
  }
</script>

<template>
  <div :class="{ open: isCardOpen }" class="relative pl-5 pb-5 transition">
    <span
      class="toggle-arrow absolute top-2 left-0 material-icons-outlined cursor-pointer text-2xl leading-9 transition"
      :class="{ 'rotate-270': isCardOpen }"
      aria-label="Fragendetails anzeigen"
      @click="toggleCard"
      @keypress.o="toggleCard"
    >
      expand_more
    </span>
    <Button
      type="button"
      class="absolute top-0 right-0 z-20"
      aria-label="menu"
      aria-haspopup="menu"
      @contextmenu="openMenu"
      @click="openMenu"
      @keypress.m="openMenu"
    >
      <span class="material-icons-outlined text-base" aria-hidden="true">
        more_vert
      </span>
    </Button>
    <ContextMenu ref="menu" :model="items" />
    <header class="edit relative" @click="openCard" @keypress.o="openCard">
      <InplaceEditable :editable="step.prompt" h1 @update="handleUpdateTitle" />
      <div
        class="antworttyp text-base my-2 ml-3"
        :style="[isCardOpen ? 'display: none' : '']"
      >
        <header class="text-slate-400">Antworttyp</header>
        {{ stepLabels[(step.type as keyof typeof stepLabels)] }}
      </div>
    </header>
    <div class="details" :style="[isCardOpen ? '' : 'display: none']">
      <div class="relative edit">
        <div class="mb-2">
          <InplaceEditable
            :editable="step.description"
            placeholder="Erklärungstext (optional)"
            @update="handleUpdateDescription"
          />
        </div>
        <div>
          <Dropdown
            v-model="selectedType"
            :options="typeOptions"
            option-label="name"
            class="ml-3"
            aria-label="Fragentyp"
            placeholder="Fragentyp auswählen"
            @change="handleUpdateType"
          />
        </div>
      </div>
    </div>
  </div>
</template>
