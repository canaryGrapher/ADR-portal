import { configureStore } from '@reduxjs/toolkit'
//importing slices here
import form1page1Reducer from '~/states/Slices/AdrReportingForm/1'
import form3page1Reducer from '~/states/Slices/MedicalDeviceReporting/1'
import form3page6Reducer from '~/states/Slices/MedicalDeviceReporting/6'
export const store = configureStore({
    reducer: {
        form1page1: form1page1Reducer,
        form3page1: form3page1Reducer,
        form3page6: form3page6Reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch