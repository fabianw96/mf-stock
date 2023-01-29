<template>
  <div>
    <LoginCard></LoginCard>
  </div>
</template>

<script setup>
const user = useSupabaseUser();

watchEffect(() => {
  if (user.value) {
    navigateTo('/list');
  }
});
</script>
