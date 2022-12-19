import { createSlice } from "@reduxjs/toolkit"


const statesSlice = createSlice({
    name: "states",
    initialState: {
        isActiveMiniMenu: false,
        loading: true,
        error: null,
        isActiveModal: false,
        modalData: {
            name: '',
            phone: '',
            email: '',
            comments: ''
        },
        modalProps: [],
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
        addModalData(state, action) {
            state.modalData = {
                ...state.modalData,
                ...action.payload
            }
        },
        addModalProps(state, action) {

            state.modalProps = [...action.payload]
        }
    },
})

export const { toggleIsActiveMiniMenu, toggleIsActiveModal, toggleIsisActivePopUp, addModalData, addModalProps } = statesSlice.actions

export default statesSlice.reducer



