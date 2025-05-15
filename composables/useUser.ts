// composables/useUser.ts
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} from '@/services/userService'
import type {User} from "@/types/user";

export const useUser = () => {
    const users = ref<User[]>([])
    const loading = ref(false)
    const error = ref<any>(null)

    const fetchUsers = async () => {
        loading.value = true
        try {
            users.value = await getUsers()
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    return {
        users,
        loading,
        error,
        fetchUsers,
        getUserById,
        createUser,
        updateUser,
        deleteUser,
    }
}
