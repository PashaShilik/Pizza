import {createSlice} from '@reduxjs/toolkit'/* импортируем слайс из библиотеки*/

const initialState = {/* Первоночальное состояние */
    categoryId: 0, /* Состояние категорий */
    sort: { /*Состояние сортировки*/
        name: 'популярности',
        sortProperty: 'rating',
    },
};/*Создал первоночальный стейт для filterSlice*/

const filterSlice = createSlice ({/*Создаю логику для filterSlice*/
    name: 'filter',/*Название слайса*/
    initialState,/*Первоначальное состояние Slice*/
    reducers: { /*Передаю действия (action) для этого Slise*/
      setCategoryId(state, action) {/*Создал первый метод для filterSlice*/
        state.categoryId = action.payload
      },   
      setSort(state, action) {
        state.sort = action.payload
      }
    }
});

export const { setCategoryId, setSort } = filterSlice.actions; /*Экспортируем переменную setCategoryId*/

export default filterSlice.reducer;/*Экспортируем редюсер */