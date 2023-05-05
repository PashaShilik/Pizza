import React from "react"
import axios from "axios";
import qs from 'qs';

import { useSelector, useDispatch } from "react-redux";
import {setCategoryId} from '../redux/slices/filterSlice'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlocks from '../components/Pizza_Block/index';
import Skeleton from '../components/Pizza_Block/skeleton'
import { useEffect } from 'react';
import Pagination from "../components/Pagination/Pagination";

import { AppContext } from "../App";

import styled from "@emotion/styled";
import Slider from "react-slick";

const Home = () => {
    const dispatch = useDispatch ();/*Вшиваем метод redux DISPATCH*/

    const categoryId = useSelector((state) => state.filter.categoryId );/*Передаем все данные Filter*/
    const sortType = useSelector((state) => state.filter.sort.sortProperty);/*Передаем все данные sort*/

    const {searchValue} = React.useContext(AppContext)

    const [items, setItems] = React.useState([]);
    const [currentPage, setcurrentPage] = React.useState(1);


    const [viewSliderCount, setViewSliderCount] = React.useState(localStorage.getItem("sliderCount") ?? 3);
    const [count, setCount] = React.useState();

    const handleChangeViewSliderCount = (value) => {

      setViewSliderCount(value);
    }


    const handleSetCount = () => {
      localStorage.setItem("sliderCount", viewSliderCount)
      setCount(viewSliderCount);

      setTimeout(() => {
        window.location.reload();

      }, 500)
    }
   

    const onChangeCategory = (id) => {
      dispatch(setCategoryId(id));
    };/*через setCategoryId заставляем работать категории*/

    const [isloading, setIsLoading] = React.useState(true);/* Хук для загрузки скелетона на страницу*/

    React.useEffect(() => { /* Хук для передачи запроса с Backend */
      setIsLoading(true); 

      const sortBy = sortType.replace('-', '');
      const order = sortType.includes('-') ? 'asc' : 'desc';
      

        axios.get(
          `https://6437ab88894c9029e8c2d9a7.mockapi.io/items?page=${currentPage}&limit=10&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortBy}&order=${order}`
          )
          .then((res) => {
            setItems(res.data);
            setIsLoading(false);
          });
      }, [categoryId, sortType, currentPage]);

      const pizzas =  items.filter(obj => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())){
          return true;
        } 
          return false;
        })
      
       ?.map((obj) => <PizzaBlocks key={obj.id} {...obj}/>);
      const sceletons = [...new Array(4)].map((_, index) => <Skeleton key={index}/>); 


      let options = {
        dots: false,
        infinite: true,
        speed:1500,
        autoplaySpeed:1500,
        slidesToShow: Number(localStorage.getItem("sliderCount")),
        autoplay:true,
        slidesToScroll:1,
        arrows: false,
      };

console.log(options);
  
    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort/>
            </div>
                <h2 className="content__title">Все пиццы</h2>
                
            <div className='content__items'>
              <SliderWrapper>
                  <Slider {...options}>
                   {isloading ? sceletons : pizzas} {/* Рендер скелетона и пицц при загрузке*/}
          
                  </Slider>
                    <div className="slider_input">
                      <input value={viewSliderCount} onChange={(e) => handleChangeViewSliderCount(e.target.value)}  className='input_slide' maxlength="1" placeholder="Cлайды..." />  
                      <input  disabled={Number(viewSliderCount) > 4 || Number(viewSliderCount) < 1 } onClick={handleSetCount} className='input_submit' type="button" value="Отправить"/>
                    </div>
              </SliderWrapper>
            </div> 
        {/*     <Pagination countElements={2} onChangePage = {(number) => setcurrentPage(number)}/> */}
        </>
    )
    
}

export default Home;

const SliderWrapper = styled("div")`

`;


