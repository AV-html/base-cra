import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {CounterSliceReducer} from "../entities/ui/counter/counter-slice";


const rootReducer = combineReducers({
    counter: CounterSliceReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof rootReducer>


