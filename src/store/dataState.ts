import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface AuthState {
  token: string;
}

export interface ProductsState {
  loader: boolean;
  data: any[];
}

export interface AppState {
  loader: boolean;
  auth: AuthState;
}

export interface DataState {
  value: {
    app: AppState;
    menu: {
      help: any[],
      main: any[],
      profile: any[],
      decorCategory: any[],
    };
    products: ProductsState;
}};

const initialState: DataState = {
  value: {
    app: {
      loader: true,
      auth: {
        token: '',
      },
    },
    menu:{
      help: [],
      main: [],
      profile: [],
      decorCategory:[],
    },
    products: {
      loader: true,
      data: [],
    },
  },
};

export const dataSlice = createSlice({
  name: 'dataState',
  initialState,
  reducers: {
    loaderSwitch: (state, action: PayloadAction<boolean>) => {
      state.value.app.loader = action.payload;
    },
    authToken: (state, action: PayloadAction<string>) => {
      state.value.app.auth.token = action.payload;
    },
    removeToken: (state) => {
      localStorage.removeItem('my_token');
      state.value.app.auth.token = '';
    },
    reloadMainMenu: (state, action: PayloadAction<any[]>) => {
      state.value.menu.main = action.payload;
    },
    reloadHelpMenu: (state, action: PayloadAction<any[]>) => {
      state.value.menu.help = action.payload;
    },
    reloadProfileMenu: (state, action: PayloadAction<any[]>) => {
      state.value.menu.profile = action.payload;
    },
    reloadProducts: (state, action: PayloadAction<any[]>) => {
      state.value.products.data = action.payload;
    },
    reloadDecorCategory: (state, action: PayloadAction<any[]>) => {
      state.value.menu.decorCategory = action.payload;
    },
  },
});

export const { authToken, reloadMainMenu, loaderSwitch, reloadHelpMenu, reloadProfileMenu, reloadProducts, reloadDecorCategory} = dataSlice.actions;


// Другой код, например селекторы, может использовать импортированный тип RootState.
export const selectCount = (state: RootState) => state.dataState.value;

export default dataSlice.reducer;