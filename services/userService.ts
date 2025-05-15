// services/userService.ts
import type { User, CreateUserDto, UpdateUserDto } from '@/types/user'

export const getUsers = () => {
    return $fetch<User[]>('/api/users')
}

export const getUserById = (id: number) => {
    return $fetch<User>(`/api/users/${id}`)
}

export const createUser = (payload: CreateUserDto) => {
    return $fetch<User>('/api/users', {
        method: 'POST',
        body: payload
    })
}

export const updateUser = (payload: UpdateUserDto) => {
    return $fetch<User>(`/api/users/${payload.id}`, {
        method: 'PUT',
        body: payload
    })
}

export const deleteUser = (id: number) => {
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    return $fetch<void>(`/api/users/${id}`, {
        method: 'DELETE'
    })
}
