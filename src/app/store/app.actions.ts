import { createAction, props } from "@ngrx/store";

export const concatText = createAction(
    '[Concat] concatText',
    props<{value : string}>()
)