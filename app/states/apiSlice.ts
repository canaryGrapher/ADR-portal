// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'api',
    // All of our requests will have URLs starting with '/routes/api'
    baseQuery: fetchBaseQuery({ baseUrl: '/routes/api' }),
    endpoints: builder => ({})
})

// @ts-ignore
export const { useGetForm1Page1DataQuery, usePosForm1Page1Mutation } = apiSlice