import { createAction } from "@reduxjs/toolkit";

export const registerRequest = createAction("auth/registerRequest");
export const registerSuccess = createAction("auth/registerSucces");
export const registerError = createAction("auth/registerError");

export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginError = createAction("auth/loginError");

export const logoutRequest = createAction("auth/logout/logoutRequest");
export const logoutSuccess = createAction("auth/logoutSuccess");
export const logoutError = createAction("auth/logoutError");

export const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
export const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
export const getCurrentUserError = createAction("auth/getCurrentUserError");
