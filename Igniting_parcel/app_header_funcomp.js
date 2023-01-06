import React from "react";
import ReactDom from "react-dom/client";
// import header1Logo from './images';

const Logoleft = () => (
    <div>
    <img src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' alt="logo on left"></img>
    </div>
)


const SearchMid = () => (
    <div>
    <img src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' alt="logo on left"></img>
    </div>
)


const UserIcon =  (
    <div>
    <img src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' alt="logo on left"></img>
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


