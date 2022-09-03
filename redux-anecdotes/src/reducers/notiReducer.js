import { createSlice } from "@reduxjs/toolkit"


const initialState = ''
const notiSlice = createSlice({
    name: 'notis',
    initialState,
    reducers: {
        changeNoti(state, action) {
            const content = action.payload
            return content
        },
        removeNoti(state, action) {
            const empty = ''
            return empty
        }
    }
})

export const { changeNoti, removeNoti } = notiSlice.actions
export default notiSlice.reducer