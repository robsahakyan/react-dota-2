import React, { useEffect, useRef, useState } from "react"
import "./Header.css"
import logo from "../../Images/dota-2-logo.png"
import {MdLanguage} from 'react-icons/md'
import i18next from "i18next";
import {AiFillCaretRight} from "react-icons/ai"
import {IoMdArrowDropdown} from 'react-icons/io'
import {IoGameControllerOutline} from 'react-icons/io5'
import {BiMenu} from "react-icons/bi"
import {IoCloseSharp} from "react-icons/io5"
import {NavLink,useMatch } from "react-router-dom"
import { useTranslation } from "react-i18next";

 const Header = () => {
    const { t } = useTranslation();
    const menuDiv = useRef(null);
    const header = useRef(null);
    const showMenu = useRef(null);
    const homeRef = useRef(null);
    const menuIcon = useRef(null);
    const [width, changeWidth] = useState(window.innerWidth);
    const languages = [
        {
            code: "fr",
            name: "Français",
            country_code: "fr",
            country_name: "france"
        },
        {
            code: "en",
            name: "English",
            country_code: "gb",
            country_name: "united-kingdom"
        },
        {
            code: "ru",
            name: "Русский",
            country_code: "ru",
            country_name: "russia"
        }
    ];
    const currentLanguageCode = localStorage.getItem('i18nextLng') || 'en';
    const currentLanguageName = languages.find(lng => lng.code === currentLanguageCode).name;
     
    useEffect(()=> {
        return (()=> {
            window.addEventListener('resize',(() => {changeWidth(window.innerWidth)}));
             showMenu.current.style.width = `${width}px`;
        })
    },[width])

    const menuClickHnadler = () => {  
            header.current.style["padding-inline"] = "0";
            showMenu.current.style.width = `${width}px`;
            showMenu.current.style.display = "block";
            showMenu.current.style.height = "100%";
            menuIcon.current.style.display = "none";
            homeRef.current.style.display = "none";
    }
    const closeMenuHandler = () => {
            header.current.style["padding-inline"] = "2rem";
            showMenu.current.style.height = "0%";
            showMenu.current.style.display = "none";
            homeRef.current.style.display = "block";
            menuIcon.current.style.display = "block";
    }

    return (
    <header>
         <div className = "header" ref={header}>
            <div className="item-1" ref={homeRef}>
                <NavLink to = "/home">
                <span>
                      <img src={logo} alt = "Dotalogo" />
                </span>
                 <span>
                      <h1 className="dotaNameOnHeader"> &nbsp;DOTA 2</h1>
                 </span>
                 </NavLink>
           </div>  
                <CurrentLink
                    to="/heroes"
                    label={t("heroes")} 
                />
                <CurrentLink  
                    to="/compareheroes" 
                    label={t("compare_heroes")}
                />
    

          
            <div className="item-4">
                <div>
                    <button id="droppedLng">
                        <MdLanguage/>{t("select_language")}<IoMdArrowDropdown/>
                    </button>
                    <ul className="ulLng" aria-labelledby="droppedLng">
                        {languages.map(({code,name,country_code,country_name}) => (

                            <li key={country_code}>
                                <button onClick={()=> i18next.changeLanguage(code)} disabled={code === currentLanguageCode}>
                                <span>
                                    <img className="imgFlag" style={{opacity: code === currentLanguageCode ? 0.5 : 1}} src={`https://www.countryflags.com/wp-content/uploads/${country_name}-flag-png-large.png`} alt="imgFlag"></img>
                                </span>
                                {name}     
                                </button> 
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="item-5">
                <a href="https://store.steampowered.com/app/570/Dota_2/">
            <IoGameControllerOutline/> &nbsp; {t("play_for_free")}
                </a>
            </div>
            <div ref={menuDiv}>
                <div className="menu" ref={menuIcon}>
                    <BiMenu className="menuIcon" onClick={menuClickHnadler}/>
                </div>
                <div className="menuProps" ref={showMenu}>
                    <div>
                        <h1 className="dotaNameOnHeader"> &nbsp;DOTA 2</h1>
                    </div>
                    <div className="topPartMenu">
                        <div>
                        <img  className="imgDotaMenu" src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_horiz.png" alt="menuDotaImg"></img>
                        </div>
                        <IoCloseSharp className="closeIcon" onClick={closeMenuHandler}/>
                    </div>
                    <div className="linksMenuDiv">
                        <NavLink onClick={closeMenuHandler} to="/heroes" className="linkMenuHeroes">{t("heroes")} <AiFillCaretRight/> </NavLink>
                        <NavLink onClick={closeMenuHandler}  to="/compareheroes" className="linkMenuCmpHeroes">{t("compare_heroes")} <AiFillCaretRight/></NavLink>
                        <div className="changeLanguageMenu">
                            <button id="droppedLngMenu">
                                <MdLanguage/>{currentLanguageName}<IoMdArrowDropdown/>
                            </button>
                            <ul className="ulLngMenu" aria-labelledby="droppedLngMenu">
                                {languages.map(({code,name,country_code,country_name}) => (
                                    <li key={country_code}>
                                        <button onClick={()=> i18next.changeLanguage(code)} disabled={code === currentLanguageCode}>
                                        <span>
                                            <img className="imgFlag" style={{opacity: code === currentLanguageCode ? 0.5 : 1}} src={`https://www.countryflags.com/wp-content/uploads/${country_name}-flag-png-large.png`} alt="imgFlag"></img>
                                        </span>
                                        {name}     
                                        </button> 
                                    </li>
                                ))}
                            </ul>    
                        </div>
                    </div>

                   <div className="pFFD">
                        <div className="playForFreeMenu">
                                <a href="https://store.steampowered.com/app/570/Dota_2/">
                                    <IoGameControllerOutline/> &nbsp; {t("play_for_free")}
                                </a>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </header>
           
);
}              


const CurrentLink = (props) => {
    const { t } = useTranslation();
    let match = useMatch({
        path: props.to,
    });

    return (
        <div className={(props.label === `${t("heroes")}`) ? "item-2" : "item-3"}>
         {match && " "}
        <NavLink  id={match ? "active" : ""}  to={props.to}>{props.label}</NavLink>
        </div>
    );
}


              
           





export default Header;
