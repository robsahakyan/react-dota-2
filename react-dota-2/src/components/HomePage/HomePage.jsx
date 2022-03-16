import React, { useEffect, useRef } from "react";
import "./HomePage.css"
import ReactPlayer from 'react-player'
import {IoGameControllerOutline} from 'react-icons/io5'
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
    const { t } = useTranslation();
    const joinTheBattleRef = useRef(null); 
    const chooseYourHeroRef = useRef(null);

    useEffect(()=> {
        gsap.fromTo(joinTheBattleRef.current, {
            autoAlpha: 0,
            bottom: "-20rem",
        },
        {
            bottom: "-10rem",
            duration: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
                trigger: joinTheBattleRef.current,
                toggleActions: "restart reset restart reset",
            }
        });
        gsap.fromTo(chooseYourHeroRef.current, {
            autoAlpha: 0,
            top: "20rem"
        },
        {
            top: "10rem",
            duration: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
                scaleX: 0,
                trigger: chooseYourHeroRef.current,
                toggleActions: "restart reset restart reset",
            }
        })
    },[])

    
    return (
        <div className="homePage">
            <div className="videoPart">
            <ReactPlayer
                width="100%"
                height="45rem"
                muted                
                loop
                playing
                url='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm'
                />
            </div>
            <div className="playFor">
                <div className="descriptionForPlay">
                    {t("a_mod_mult_mast")}
                </div>
                <div className="distructoid">
                {t("destructoid")}
                </div>
                <div className="playForFreeHm">
                    <a href="https://store.steampowered.com/app/570/Dota_2/">
                    <IoGameControllerOutline/> {t("play_for_free")}
                    </a>
                </div>
            </div>
            <div className="battleOfTheAncientsPart">
                <div className="joinTheBattle" ref={joinTheBattleRef}>
                    <div className="minor1">{t("join_the")}
                    </div>
                    <div className="battleName">{t("battle_of_the_ancients")}
                    </div>
                    <div className="hrBattlePart">
                    </div>
                    <div className="battlePartText">
                        {t("text_BOTA")}
                    </div>
                    <div className="LinkDiv">
                        <a href="https://www.dota2.com/news" className="battleLink">
                            {t("button_BOTA")}
                        </a>
                    </div>
                </div>
            </div>
            <div className="chooseYourHero">
                <div ref={chooseYourHeroRef} className="chooseYourHeroContent">
                    <div className="minor2">{t("who_will_you")}
                    </div>
                    <div className="choose">{t("choose")}
                    </div>
                    <div className="hrBattlePart">
                    </div>
                    <div className="chooseText">{t("hero_text")}
                    </div>
                    <div className="LinkHeroDiv">
                        <NavLink to="/heroes" className="battleLink">
                            {t("view_all_heroes")}
                        </NavLink>
                    </div>
                </div>
               
            </div>
        </div>)
}