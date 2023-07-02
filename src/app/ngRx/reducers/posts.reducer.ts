import { createReducer, on } from "@ngrx/store";
import { PostsStateInterface } from "../states/PostsStateInterface";
import * as PostsActions from "../actions/posts.actions";

const initialState:PostsStateInterface={
    isLoading: false,
    posts: [],
    error: null
}

export const postsReducer=createReducer(
    initialState,
    on(PostsActions.getPosts, (state)=>({...state, isLoading: true})),
    on(PostsActions.getPostsSuccess, (state, { posts })=>({...state, isLoading: false, posts})),
    on(PostsActions.getPostsFailure, (state, { error })=>({...state, isLoading: false, error})),

);