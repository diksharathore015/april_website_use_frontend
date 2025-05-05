/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface HomepageState {
  homepageTitle: any | null;
  location: any | null;
  seoData: any | null;
  courseLocation: any | null;
  showform: any | null;
  formSubmitted: any | null;
}
const initialState: HomepageState = {
  homepageTitle: "",
  location: "",
  seoData: "",
  courseLocation: "",
  showform: false,
  formSubmitted :false
};

const HomepageSlice = createSlice({
  name: "homepage",

  initialState,
  reducers: {
    setHomepageTitle: (state, action: PayloadAction<any>) => {
      state.homepageTitle = action.payload;
    },
    setLocation: (state, action: PayloadAction<any>) => {
      state.location = action.payload;
    },
    setCourseLocation: (state, action: PayloadAction<any>) => {
      state.location = action.payload;
    },
    setSeoData: (state, action: PayloadAction<any>) => {
      state.seoData = action.payload;
    },
    setShowForm: (state, action: PayloadAction<any>) => {
      state.showform = action.payload;
    },
    setFormSubmitted: (state, action: PayloadAction<any>) => {
      state.formSubmitted = action.payload;
    },
  },
});
export const {
  setLocation,
  setHomepageTitle,
  setSeoData,
  setCourseLocation,
  setShowForm,
  setFormSubmitted
} = HomepageSlice.actions;
export default HomepageSlice.reducer;
