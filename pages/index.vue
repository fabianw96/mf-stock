<template>
  <div>
    <LoginCard></LoginCard>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const { auth } = useSupabaseClient();

watchEffect(() => {
  if (user.value) {
    navigateTo('/list');
  }
});
</script>
