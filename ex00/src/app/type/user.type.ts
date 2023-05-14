import { Links } from "./links.type";
import { ProfileImage } from "./profile-image.type";

export interface User {
    id: string,
    username: string,
    name: string,
    portfolio_url: string,
    bio: string,
    location: string,
    total_likes: number,
    total_photos: number,
    total_collection: number,
    instagram_username: string,
    twitter_username: string,
    profile_image: ProfileImage,
    links: Links,
}