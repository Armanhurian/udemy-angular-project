import { createReducer, on } from "@ngrx/store";
import { concatText } from "./app.actions";
import { state } from "@angular/animations";


const initialState = 'arman'

export const appReducer = createReducer(
  initialState,
  on(concatText , (state,action) => state + action.value)
)