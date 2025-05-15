<script setup lang="ts">
import { useUser } from '@/composables/useUser'

const { users, fetchUsers, createUser, deleteUser, loading } = useUser()

await fetchUsers()

const newUser = ref({ name: '', email: '' })

const handleCreate = async () => {
  await createUser(newUser.value)
  await fetchUsers()
  newUser.value = { name: '', email: '' }
}

const handleDelete = async (id: number) => {
  await deleteUser(id)
  await fetchUsers()
}
</script>

<template>
  <div>
    <h1>Kullanıcı Listesi</h1>

    <form @submit.prevent="handleCreate">
      <input v-model="newUser.name" placeholder="İsim" />
      <input v-model="newUser.email" placeholder="Email" />
      <button type="submit">Ekle</button>
    </form>

    <div v-if="loading">Yükleniyor...</div>
    <ul v-else>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
        <button @click="handleDelete(user.id)">Sil</button>
      </li>
    </ul>
  </div>
</template>
