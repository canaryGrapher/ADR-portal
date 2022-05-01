import { configureStore } from '@reduxjs/toolkit'
//importing slices here
import form1page1Reducer from '~/states/Slices/AdrReportingForm/1'
import form1page2Reducer from '~/states/Slices/AdrReportingForm/2'
import form1page3Reducer from '~/states/Slices/AdrReportingForm/3/a'
import form1page3_filledReducer from '~/states/Slices/AdrReportingForm/3/a_filled'
// missing styles go here
import form1page3fReducer from '~/states/Slices/AdrReportingForm/3/f/1'
import form1page3f2Reducer from '~/states/Slices/AdrReportingForm/3/f/2'
import form1page3f3Reducer from '~/states/Slices/AdrReportingForm/3/f/3'
import form1page3f4Reducer from '~/states/Slices/AdrReportingForm/3/f/4'
import form1page3f5Reducer from '~/states/Slices/AdrReportingForm/3/f/5'
import form1page3gReducer from '~/states/Slices/AdrReportingForm/3/g'
// missing styles go here
import form1page3iReducer from '~/states/Slices/AdrReportingForm/3/i'
import form1page3jReducer from '~/states/Slices/AdrReportingForm/3/j'
import form1page4Reducer from '~/states/Slices/AdrReportingForm/4'

export const store = configureStore({
        reducer: {
                form1page1: form1page1Reducer,
                form1page2: form1page2Reducer,
                form1page3: form1page3Reducer,
                form1page3_filled: form1page3_filledReducer,
                form1page3f: form1page3fReducer,
                form1page3f2: form1page3f2Reducer,
                form1page3f3: form1page3f3Reducer,
                form1page3f4: form1page3f4Reducer,
                form1page3f5: form1page3f5Reducer,
                form1page3g: form1page3gReducer,
                form1page3i: form1page3iReducer,
                form1page3j: form1page3jReducer,
                form1page4: form1page4Reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch