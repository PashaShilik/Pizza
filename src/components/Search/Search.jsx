import React from "react";
import logoSearch from '../../assets/img/header/ico-search.svg';
import { AppContext } from "../../App";

import styles from './Search.module.scss'; 

const Search = () => {
    const {searchValue, setSearchValue} = React.useContext(AppContext)
    return (
        <div className={styles.search_block}>
            <img src={logoSearch} alt="Search" className={styles.ico_search} />
            <input onChange={(event) => setSearchValue(event.target.value)} className={styles.root} placeholder="Поиск пиццы..." />     
        </div>
    )   
}

export default Search;