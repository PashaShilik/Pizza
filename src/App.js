import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
/* import NotFount from './pages/NotFount'; */
import Cart from './pages/cart';

import React from 'react';/* Ипорт React для подключения хуков */
import { Routes, Route, } from 'react-router-dom';/* Подключение Ract router */
import NotFound from './pages/NotFount';

export const AppContext = React.createContext();  

function App() { 
  const [searchValue, setSearchValue] = React.useState('')

    return (
      <div className="wrapper">
        <AppContext.Provider value={{searchValue,setSearchValue}}>
          <Header/>
           <div className="content">
              <div className="container">
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='*' element={<NotFound/>}/>
                </Routes>
            </div>
          </div>
        </AppContext.Provider>
      </div> 
    ) 
}
export default App;

  