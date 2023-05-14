import { User } from "./user.type"

export interface Photo {
    id: string,
    created_at: string,
    updated_at: string,
    width: number,
    height: number,
    color: string,
    blur_hash: string,
    likes: number,
    liked_by_user: boolean,
    description: string
    user: User,
}