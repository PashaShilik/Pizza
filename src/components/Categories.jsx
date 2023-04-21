import React from "react";

function Categories ({ value,  onChangeCategory }) {
  /*     *//* Синтаксис Хука UseState */

    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];/* Создаем массив в котором отображаем все категории, что бы мы могли оставить толькло одну li */

  /*   const onClickCategory = (index) => { 
        setAcriveIndex(index)
    } */

    return (     
        <div className="categories">
            <ul>
               {categories.map((categoryName, index) =>(
                <li 
                key={index}
                onClick={() => onChangeCategory(index)} 
                className={value == index ? 'active' : ''}>
                {categoryName}
                </li>))}
            </ul> {/*Передача всех категорий через index и метод map */}
        </div>       
    );
}

export default Categories;