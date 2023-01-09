import React from "react";
import ReactDom from "react-dom/client";
// import header1Logo from './images';

const Logoleft = () => (
    <div className="logoleft">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkML6BRWil3kliTdFT-6LYBEeRsnkd_hmMNAowM3oalP-VbwLnT7vvG70rlP2_gcxbd0&usqp=CAU' className= "" alt="logo on left"></img>
    </div>
)


const SearchMid = () => (
    <div className="search-icon">
        <input type="text"/>
        <button>Search </button> 
    </div>
)


const UserIcon =  (
    <div>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWm7kgMH1PEsycRwkyqPcPB1b2NITpD8j2g&usqp=CAU' alt="UserIcon "></img>
    </div>
)


const Header = () => (
    <div className="header">
        {Logoleft()}
        <SearchMid/>
        {UserIcon}
    </div>
)


const getRoot = ReactDom.createRoot(document.getElementById('root'));
getRoot.render(Header())


