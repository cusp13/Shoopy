import React from 'react'
import "../styles/Navbar.css"
import paypalLogo from "./paypal.png"


const notification = <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M160-200v-60h84v-306q0-84 49.5-149.5T424-798v-29q0-23 16.5-38t39.5-15q23 0 39.5 15t16.5 38v29q81 17 131 82.5T717-566v306h83v60H160Zm320-295Zm0 415q-32 0-56-23.5T400-160h160q0 33-23.5 56.5T480-80ZM304-260h353v-306q0-74-51-126t-125-52q-74 0-125.5 52T304-566v306Z"/></svg>
const settings = <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410-480q0-29 20.5-49.5T480-550q29 0 49.5 20.5T550-480q0 29-20.5 49.5T480-410Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715-480q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538-708l-14-112h-88l-14 112q-34 7-63.5 24T306-642l-106-46-40 72 94 69q-4 17-6.5 33.5T245-480q0 17 2.5 33.5T254-413l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z"/></svg>
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='prenav'>
           <a href='#'><img className="logo" src={paypalLogo}></img></a>
            <a href='#'>Home</a>
            <a href='#'>Finances</a>
            <a href='#'>Send and Request</a>
            <a href='#'>Deals</a>
            <a href='#'>Wallet</a>
            <a href='#'>Activity</a>
            <a href='#'>Help</a>
        </div>
        <div className='logout'>
           <a className='notification' href='#'>{notification}</a>
           <a className='settings'href='#'>{settings}</a>
            
            <a href='#'>LOG OUT</a>
            
        </div>
        
      
    </div>
  )
}

export default Navbar
