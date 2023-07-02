import { createReducer, on } from '@ngrx/store';
import { updatePassword, updateUsername } from '../actions/user.actions';

interface UserType{
    username: string;
    password: string;
}

export const initialState: UserType = { username: "", password: "" };

export const userReducer = createReducer(
  initialState,
  on(updateUsername, (state, { username }) => Object.assign({}, state, { username })),
  on(updatePassword, (state, { password }) => Object.assign({}, state, { password })),
);