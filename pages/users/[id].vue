<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useUser } from '@/composables/useUser'

const route = useRoute()
const { getUserById, updateUser } = useUser()

const user = ref({ id: 0, name: '', email: '' })

onMounted(async () => {
  const id = Number(route.params.id)
  user.value = await getUserById(id)
})

const handleUpdate = async () => {
  await updateUser(user.value.id, user.value)
  alert('Kullanıcı güncellendi')
}
</script>

<template>
  <div>
    <h1>Kullanıcı Düzenle</h1>
    <input v-model="user.name" />
    <input v-model="user.email" />
    <button @click="handleUpdate">Güncelle</button>
  </div>
</template>
