import React from 'react'
import mealsImages from '../../assets/meals.jpeg'
import classes from '../Header.module.css'
function Header() {
  return (
    <>
        <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
        <img src={mealsImages} alt="food" />
        </div>
    </>
  )
}

export default Header