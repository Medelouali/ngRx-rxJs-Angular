import { createAction, props } from "@ngrx/store";

export const updateUsername=createAction(
    "[User] updateUsername", 
    props<{ username: string }>()
);
export const updatePassword=createAction(
    "[User] updatePassword",
    props<{ password: string }>()
);
