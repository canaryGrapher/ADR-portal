import { configureStore } from '@reduxjs/toolkit'
//importing slices here
import form1page1Reducer from '~/states/Slices/AdrReportingForm/1'
import form1page2Reducer from '~/states/Slices/AdrReportingForm/2'
import form1page3Reducer from '~/states/Slices/AdrReportingForm/3/a'
import form1page3_filledReducer from '~/states/Slices/AdrReportingForm/3/a_filled'
import form1page3fReducer from '~/states/Slices/AdrReportingForm/3/f/1'
import form1page3f2Reducer from '~/states/Slices/AdrReportingForm/3/f/2'
import form1page3f3Reducer from '~/states/Slices/AdrReportingForm/3/f/3'
import form1page3f4Reducer from '~/states/Slices/AdrReportingForm/3/f/4'
import form1page3f5Reducer from '~/states/Slices/AdrReportingForm/3/f/5'
import form1page3gReducer from '~/states/Slices/AdrReportingForm/3/g'
import form1page3hReducer from '~/states/Slices/AdrReportingForm/3/h'
import form1page3h_filledReducer from '~/states/Slices/AdrReportingForm/3/h_filled'
import form1page3iReducer from '~/states/Slices/AdrReportingForm/3/i'
import form1page3jReducer from '~/states/Slices/AdrReportingForm/3/j'
import form1page4Reducer from '~/states/Slices/AdrReportingForm/4'
// form 2 redux states
import form3page1Reducer from '~/states/Slices/MedicalDeviceReporting/1'
import form3page2Reducer from '~/states/Slices/MedicalDeviceReporting/2'
import form3page3Option1Reducer from './Slices/MedicalDeviceReporting/3/option1'
import form3page3Option2Reducer from './Slices/MedicalDeviceReporting/3/option2'
import form3page3Option3Reducer from './Slices/MedicalDeviceReporting/3/option3'
import form3page4aReducer from './Slices/MedicalDeviceReporting/4/index'
import form3page4bReducer from './Slices/MedicalDeviceReporting/4/b'
import form3page4cReducer from './Slices/MedicalDeviceReporting/4/c'
import form3page4dReducer from './Slices/MedicalDeviceReporting/4/d'
import form3page5Reducer from './Slices/MedicalDeviceReporting/5'
import form3page6Reducer from '~/states/Slices/MedicalDeviceReporting/6'
import form3page7Reducer from '~/states/Slices/MedicalDeviceReporting/7'
import form3page8Reducer from '~/states/Slices/MedicalDeviceReporting/8'
import form3page9Reducer from '~/states/Slices/MedicalDeviceReporting/9'

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
                form1page3h: form1page3hReducer,
                form1page3h_filled: form1page3h_filledReducer,
                form1page3i: form1page3iReducer,
                form1page3j: form1page3jReducer,
                form1page4: form1page4Reducer,
                form3page1: form3page1Reducer,
                form3page2: form3page2Reducer,
                form3page3Option1: form3page3Option1Reducer,
                form3page3Option2: form3page3Option2Reducer,
                form3page3Option3: form3page3Option3Reducer,
                form3page4a: form3page4aReducer,
                form3page4b: form3page4bReducer,
                form3page4c: form3page4cReducer,
                form3page4d: form3page4dReducer,
                form3page5: form3page5Reducer,
                form3page6: form3page6Reducer,
                form3page7: form3page7Reducer,
                form3page8: form3page8Reducer,
                form3page9: form3page9Reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch