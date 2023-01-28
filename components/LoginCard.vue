<template>
  <div>
    <button class="btn" @click="isRegistered = !isRegistered">
      {{ logInOut }}
    </button>

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
const logInOut = ref('');

if (isRegistered) {
  logInOut.value = 'Login';
} else if (!isRegistered) {
  logInOut.value = 'Sign up';
}

async function signInWithEmail() {
  console.log('signing in');
  try {
    const { user, session, error } = supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
  } catch (error) {
    console.log(error);
  }
}

async function signUpWithEmail() {
  console.log('signing up');
  try {
    const { user, error } = supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
  } catch (error) {
    console.log(error);
  }
}
</script>
