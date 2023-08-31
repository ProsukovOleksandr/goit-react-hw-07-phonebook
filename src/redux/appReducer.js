import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constants';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    addContacts(state, action) {
      state.contacts = action.payload;
    },
    deleteContacts(state, action) {
      state.contacts = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
// Генератори екшенів
export const { addContacts, deleteContacts, setFilter } = appSlice.actions;

//Селектори
export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
// Редюсер слайсу

const persistConfig = {
  key: 'app',
  storage,
  blacklist: ['filter'],
};
export const appReducer = appSlice.reducer;

export const persistedAppReducer = persistReducer(persistConfig, appReducer);
//export const appReducer = (state = initialState, action) => {
//  switch (action.type) {
//   case 'app/setContacts': {
//      return { ...state, contacts: action.payload };
//   }
//   case 'app/deleteContacts': {
//      return { ...state, contacts: action.payload };
//   }
//  case 'app/filterContacts': {
//    return { ...state, filter: action.payload };
//   }
//   default:
//     return state;
// }
//};
//export const setContacts = (payload)=>{
//  return {
//   type:"app/addContacts",
//    payload,
//  }
//}
//export const setDelete = (payload)=>{
//  return {
//    type:"app/deleteContacts",
//    payload,
//  }
//}
//export const setFilter = (payload)=>{
//  return {
//    type:"app/filterContacts",
//    payload
//  }
//}
