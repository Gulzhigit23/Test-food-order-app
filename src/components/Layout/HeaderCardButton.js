import  classes from './HeaderCartButton.module.css'
import React from 'react'
import CartIcons from '../icons/CartIcons'

function HeaderCardButton() {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcons/>
        </span>
        <span >Your Card</span>
        <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCardButton