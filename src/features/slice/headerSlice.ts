import { createSlice } from "@reduxjs/toolkit"
import { pageSections } from "../../utility/constants";
import { RootState } from "../redux/store";

const initialState = {
    navbarOpened: false,
    section: pageSections.hero
}

const headerSlice = createSlice({
    name: "navbarOpened",
    initialState,
    reducers: {
        toggleNavbar: (state) => {
            state.navbarOpened = !state.navbarOpened;
        },
        changePageSection: (state, { payload }) => {
            state.section = payload;
        }
    }
});

export const { toggleNavbar, changePageSection } = headerSlice.actions;
export const isNavbarOpened = (state: RootState) => state.navbarOpened;
export const getSection = (state: RootState) => state.section;
export default headerSlice.reducer;