import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice' /*импортируем в stor filterSlice*/
import cart from './slices/cartSlice'


export const store = configureStore({
  reducer: {
    filter, /*Закинул в reducer filterSlice*/
    cart,
  },
})

/* Папка Store.js - это хранилище */