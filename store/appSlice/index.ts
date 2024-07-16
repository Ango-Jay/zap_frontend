import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type Toast = {
  message: string;
  id: string;
  type: 'success' | 'error' | 'warning';
};
type AppState = {
  /**
   * indicates that sidebar is open
   */
  hideSideBar: boolean;
  /**
   * indicates that user is logged in
   */
  isAuthenticated: boolean;
  /**
   * authentication token
   */
  token: string | null;
  /**
   * toasts state
   */
  toasts: Toast[];
  /**
   * ui state to know if a modal is open
   */
  isModalOpen: boolean;
};

const initialState: AppState = {
  hideSideBar: true,
  isAuthenticated: false,
  isModalOpen: false,
  token: '',
  toasts: [],
};

export const AppStateSlice = createSlice({
  name: 'AppState',
  initialState,
  reducers: {
    toggleHideSideBar: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        hideSideBar: action.payload,
      };
    },
    toggleIsModalOpen: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isModalOpen: action.payload,
      };
    },
    toggleIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    },
    storeToken: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        token: payload,
      };
    },
    clearAppState: () => initialState,
    addToast: (
      state,
      action: PayloadAction<{
        message: string;
        type: 'success' | 'error' | 'warning';
      }>
    ) => {
      const newToast: Toast = {
        ...action.payload,
        id: uuidv4(),
      };
      return {
        ...state,
        toasts: [...state.toasts, newToast],
      };
    },
    removeToast: (state, action: PayloadAction<string>) => {
      const filteredToast = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
      return {
        ...state,
        toasts: filteredToast,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleHideSideBar,
  toggleIsAuthenticated,
  storeToken,
  clearAppState,
  addToast,
  removeToast,
  toggleIsModalOpen,
} = AppStateSlice.actions;

export default AppStateSlice.reducer;
