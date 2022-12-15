import { createSlice } from "@reduxjs/toolkit"


const statesSlice = createSlice({
    name: "states",
    initialState: {
        isActiveMiniMenu: false,
        loading: true,
        error: null,
        isActiveModal: false,
        isActivePopUp: false
    },

    reducers: {
        toggleIsActiveMiniMenu(state, action) {
            state.isActiveMiniMenu = !state.isActiveMiniMenu
        },
        toggleIsActiveModal(state, action) {
            state.isActiveModal = !state.isActiveModal
        },
        toggleIsisActivePopUp(state, action) {
            state.isActivePopUp = !state.isActivePopUp
        },
    },
})

export const { toggleIsActiveMiniMenu, toggleIsActiveModal, toggleIsisActivePopUp } = statesSlice.actions

export default statesSlice.reducer



