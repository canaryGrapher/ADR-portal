import { configureStore } from '@reduxjs/toolkit'
//importing slices here
import form1page1Reducer from '~/states/Slices/AdrReportingForm/1'
import form1page2Reducer from '~/states/Slices/AdrReportingForm/2'
import form1page3Reducer from '~/states/Slices/AdrReportingForm/3/a'
import form1page3_filledReducer from '~/states/Slices/AdrReportingForm/3/a_filled'
import form1page3b1Reducer from '~/states/Slices/AdrReportingForm/3/b/1'
import form1page3b2Reducer from '~/states/Slices/AdrReportingForm/3/b/2'
import form1page3b3Reducer from '~/states/Slices/AdrReportingForm/3/b/3'
import form1page3b4Reducer from '~/states/Slices/AdrReportingForm/3/b/4'
import form1page3b5Reducer from '~/states/Slices/AdrReportingForm/3/b/5'
import form1page3cReducer from '~/states/Slices/AdrReportingForm/3/c'
import form1page3dReducer from '~/states/Slices/AdrReportingForm/3/d'
import form1page3d_filledReducer from '~/states/Slices/AdrReportingForm/3/d_filled'
import form1page3eReducer from '~/states/Slices/AdrReportingForm/3/e'
import form1page3fReducer from '~/states/Slices/AdrReportingForm/3/f'
import form1page4Reducer from '~/states/Slices/AdrReportingForm/4'

// form 2 redux states
import form3page1Reducer from '~/states/Slices/MedicalDeviceReporting/1'
import form3page2Reducer from '~/states/Slices/MedicalDeviceReporting/2'
import form3page3Reducer from '~/states/Slices/MedicalDeviceReporting/3'
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
                form1page3b1: form1page3b1Reducer,
                form1page3b2: form1page3b2Reducer,
                form1page3b3: form1page3b3Reducer,
                form1page3b4: form1page3b4Reducer,
                form1page3b5: form1page3b5Reducer,
                form1page3c: form1page3cReducer,
                form1page3d: form1page3dReducer,
                form1page3d_filled: form1page3d_filledReducer,
                form1page3e: form1page3eReducer,
                form1page3f: form1page3fReducer,
                form1page4: form1page4Reducer,


                form3page1: form3page1Reducer,
                form3page2: form3page2Reducer,
                form3page3: form3page3Reducer,
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