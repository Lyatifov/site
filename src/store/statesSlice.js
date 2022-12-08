import { createSlice } from "@reduxjs/toolkit"


const statesSlice = createSlice({
    name: "states",
    initialState: {
        isActiveMiniMenu: false,
        loading: true,
        error: null,
        isActiveModal: false,
    },

    reducers: {
        toggleIsActiveMiniMenu(state, action) {
            state.isActiveMiniMenu = !state.isActiveMiniMenu
        },
        toggleIsActiveModal(state, action) {
            state.isActiveModal = !state.isActiveModal
        }
    },
})

export const { toggleIsActiveMiniMenu, toggleIsActiveModal } = statesSlice.actions

export default statesSlice.reducer



