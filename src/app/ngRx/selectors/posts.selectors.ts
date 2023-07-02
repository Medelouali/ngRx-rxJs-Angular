import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../states/AppState";


const featureSelector=(state: AppStateInterface)=>state.posts;

export const isLoadingSelector=createSelector(featureSelector, (state)=>state.isLoading);
export const postsSelector=createSelector(featureSelector, (state)=>state.posts);
export const errorSelector=createSelector(featureSelector, (state)=>state.error);
