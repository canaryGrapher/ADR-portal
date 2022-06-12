import { configureStore } from '@reduxjs/toolkit'
//importing slices here

// form 1 redux states
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
import form2page1Reducer from '~/states/Slices/MedicalDeviceReporting/1'
import form2page2Reducer from '~/states/Slices/MedicalDeviceReporting/2'
import form2page3Reducer from '~/states/Slices/MedicalDeviceReporting/3'
import form2page3Option1Reducer from '~/states/Slices/MedicalDeviceReporting/3/option1'
import form2page3Option2Reducer from '~/states/Slices/MedicalDeviceReporting/3/option2'
import form2page3Option3Reducer from '~/states/Slices/MedicalDeviceReporting/3/option3'
import form2page4aReducer from '~/states/Slices/MedicalDeviceReporting/4/index'
import form2page4bReducer from '~/states/Slices/MedicalDeviceReporting/4/b'
import form2page4cReducer from '~/states/Slices/MedicalDeviceReporting/4/c'
import form2page4dReducer from '~/states/Slices/MedicalDeviceReporting/4/d'
import form2page5Reducer from '~/states/Slices/MedicalDeviceReporting/5'
import form2page6Reducer from '~/states/Slices/MedicalDeviceReporting/6'
import form2page7Reducer from '~/states/Slices/MedicalDeviceReporting/7'
import form2page8Reducer from '~/states/Slices/MedicalDeviceReporting/8'
import form2page9Reducer from '~/states/Slices/MedicalDeviceReporting/9'

// user data redux states
import userReducer from '~/states/Slices/User/user'

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
                // form 2 redux states
                form2page1: form2page1Reducer,
                form2page2: form2page2Reducer,
                form2page3: form2page3Reducer,
                form2page3Option1: form2page3Option1Reducer,
                form2page3Option2: form2page3Option2Reducer,
                form2page3Option3: form2page3Option3Reducer,
                form2page4a: form2page4aReducer,
                form2page4b: form2page4bReducer,
                form2page4c: form2page4cReducer,
                form2page4d: form2page4dReducer,
                form2page5: form2page5Reducer,
                form2page6: form2page6Reducer,
                form2page7: form2page7Reducer,
                form2page8: form2page8Reducer,
                form2page9: form2page9Reducer,
                // user data redux states
                user: userReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch