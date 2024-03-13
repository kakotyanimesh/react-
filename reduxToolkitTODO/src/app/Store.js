import {configureStore} from '@reduxjs/toolkit'

import todorReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todorReducer
})
