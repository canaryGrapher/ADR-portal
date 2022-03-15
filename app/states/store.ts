import { configureStore } from '@reduxjs/toolkit'

//importing slices here
import form1page1Reducer from '~/states/Slices/formOne/1'

export const store = configureStore({
    reducer: {
        form1page1: form1page1Reducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch