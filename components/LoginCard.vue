<template>
  <div>
    <div class="flex justify-center">
      <button class="btn m-2" @click="isRegistered = !isRegistered">
        {{ isRegistered ? 'Sign up' : 'Login' }}
      </button>
    </div>

    <form v-if="!isRegistered" @submit.prevent="signUpWithEmail">
      <div class="flex justify-center items-center flex-col">
        <input
          class="m-2 p-2"
          type="text"
          v-model="email"
          placeholder="E-mail"
        />
        <input
          class="m-2 p-2"
          type="password"
          v-model="password"
          placeholder="Password"
        />
        <button type="submit" class="btn m-2">Sign up</button>
      </div>
    </form>
    <form v-if="isRegistered" @submit.prevent="signInWithEmail">
      <div class="flex justify-center items-center flex-col">
        <input
          class="m-2 p-2"
          type="text"
          v-model="email"
          placeholder="E-mail"
        />
        <input
          class="m-2 p-2"
          type="password"
          v-model="password"
          placeholder="Password"
        />
        <button type="submit" class="btn m-2">Login</button>
      </div>
    </form>
  </div>
</template>

<script setup>
const email = ref('');
const password = ref('');
const supabase = useSupabaseAuthClient();
const isRegistered = ref(false);

const signInWithEmail = async () => {
  console.log('signing in');
  const { user, session, error } = supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    alert(error);
  }
};

const signUpWithEmail = async () => {
  console.log('signing up');
  const { user, error } = supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (error) {
    alert(error);
  }
};
</script>
