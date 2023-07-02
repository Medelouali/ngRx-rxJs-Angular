import { PostInterface } from "src/app/types/commons";

export interface PostsStateInterface{
    isLoading: boolean;
    posts: Array<PostInterface>;
    error: string | null;
}