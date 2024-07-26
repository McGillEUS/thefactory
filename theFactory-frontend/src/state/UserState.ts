export interface UserState {
    isAdmin: boolean,
    isEditing: boolean,
}

export const defaultUserState: UserState = {
    isAdmin: true,
    isEditing: true,
}
