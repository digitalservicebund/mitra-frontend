<!-- UI Component: Adapter -->
<template>
  <div v-for="step in steps" :key="step">
    {{ step }}
  </div>
</template>

<script lang="ts">
  import Playbook from "../domain/Playbook"

  // Playbook will be loaded from secondary adapter translating from persisted
  // JSON to domain object.
  const playbook: Playbook = { steps: [`First`, `Second`] }

  // Primary adapter uses port...
  const data: () => Playbook = () => {
    return playbook
  }

  export default {
    data,
  }
</script>
