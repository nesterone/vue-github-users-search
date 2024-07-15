<script setup lang="ts">
interface Props {
  name: string
}

const props = defineProps<Props>()
</script>


<template>
User Card <br/>

 {{props.name}}
</template>
