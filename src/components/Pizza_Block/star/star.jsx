import React from "react"
import styles from './star.module.scss'; 


function Star ({data}) {
   const listItems = data?.map((star) =>
     <li className={star===1 ? styles.star_rating : styles.star_form}>★</li>
   );


   return (
    <div className={styles.star_wrapper}>
      <div>
        <ul className={styles.star_list}>
          {listItems}
        </ul>
      </div>
   </div> 
   )
}

export default Star;
