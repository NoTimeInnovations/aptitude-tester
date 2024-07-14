// src/app/dashboard/contexts.js

import { createContext, useContext } from "react";

export const UserContext = createContext();
export const SetUserContext = createContext();
export const QuestionSetContext = createContext();
export const ClassesContext = createContext();
export const SetTabContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function useSetUserContext() {
    return useContext(SetUserContext);
}

export function useQuestionSetContext() {
    return useContext(QuestionSetContext);
}

export function useClassesContext() {
    return useContext(ClassesContext);
}

export function useSetTabContext() {
    return useContext(SetTabContext);
}
