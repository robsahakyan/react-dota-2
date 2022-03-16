import React, { useEffect } from "react";
import "./AboutHero.css"
import {GiBroadsword,GiHeavyArrow} from "react-icons/gi"
import {AiFillCaretRight,AiFillCaretLeft} from "react-icons/ai"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutHero = ({allHeroes,...props}) => {
    const { t } = useTranslation();
    const urlRootHeroes = "https://api.opendota.com";
    const urlAbility = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_";
    const item = props.currentHero;
    let currentAbilityIcon,currentAbilityName;
    let rolesList = ["Carry","Support","Nuker","Disabler","Jungler","Durable","Escape","Pusher","Initiator"];
    let indexOfItem = allHeroes.findIndex( e => e.id === item.id);
    let prevHero = (indexOfItem === 0) ? allHeroes[allHeroes.length - 1] : allHeroes[(indexOfItem -1)];
    let nextHero = (indexOfItem === allHeroes.length - 1) ? allHeroes[0] : allHeroes[(indexOfItem + 1)];
    
    useEffect(() => {
      window.scrollTo(0,0);  
      }, [item])
    
    switch(item.primary_attr) {
        case "agi" :
            currentAbilityName = "agility";
            currentAbilityIcon = `${urlAbility}${currentAbilityName}.png`;
            break;  
        case "int" :
            currentAbilityName = "intelligence";
            currentAbilityIcon = `${urlAbility}${currentAbilityName}.png`;
            break;
        default:
            currentAbilityName = "strength";
            currentAbilityIcon = `${urlAbility}${currentAbilityName}.png`;
            break;
    }
    
    return (
    <>
        <div className="aboutHero" key={item.id}>
            <div className="rotatedDiv">
                <img className="rotatedImg" src={currentAbilityIcon} alt = {currentAbilityName}></img>
                <div>
                    <h2 className="rotatedHeading">{item.localized_name}</h2>
                </div>
                <div>
                    <p className="idNumber">{item.id}</p>
                </div>
                
                <div className="verticalLine"></div>
            </div>
            <div className="descriptionHero">
                <div className="abilityIconAndName">
                    <img className="abilityIconHeading" src={currentAbilityIcon} alt = {currentAbilityName}></img>
                    <h2 className="abilityHeading">{t(currentAbilityName)}</h2>
                </div>
                <div className="nameDiv" >
                    <h1 className="nameHeading">{item.localized_name}</h1>
                </div>
                <div className="imageDiv">
                    <img className="imgHero" src={urlRootHeroes + item.img} alt = "imageHero"></img>
                </div>
                <div className="attackType">
                    <h3 className="attTypeHeading">{t("attack_type")}</h3>
                </div>
                <div className="attackTypeIconAndLabel">
                    <span>
                    {(item.attack_type === "Melee") ? <GiBroadsword className="attackTypeIcon"/> : <GiHeavyArrow className="attackTypeIcon"/> }
                    </span>
                    <span>
                        <h3 className="attackTypeLabel">{t(item.attack_type)}</h3>
                    </span>
                </div>
            </div>
            <div className="HeroStats">
               <div id="part1" className="Parts"> 
                    <div className="infoHeading">
                    {t("attributes")}    
                    </div>
                    <div className="attributesDiv">
                        <div className="attributesAndStats">
                            <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" alt="attrImg"></img>
                            <h4>{item.base_str}</h4>
                            <h6>+{item.str_gain}</h6>
                        </div>
                        <div className="attributesAndStats">
                            <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"  alt="attrImg"></img>
                            <h4>{item.base_agi}</h4>
                            <h6>+{item.agi_gain}</h6>
                        </div>
                        <div className="attributesAndStats">
                            <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"  alt="attrImg"></img>
                            <h4>{item.base_int}</h4>
                            <h6>+{item.int_gain}</h6>
                        </div>
                    </div>
                </div>
                <div id="part2" className="Parts">
                    <hr className="lineHr" />
                    <div className="infoHeading">
                        {t("roles")} 
                    </div>
                    <div className="rolesList">
                        {rolesList.map(name => {
                            return (
                                <div>
                                   <div>{t(`${name}`)}</div>
                                   {item.roles.includes(name) ? 
                                     <div className="range"></div> :
                                     <div className="rangeIncludes"></div>
                                   }
                                </div>
                            )
                          }
                        )}
                    </div>
                </div>                 
                <div id="part3" className="Parts">
                    <hr className="lineHr" />
                    <div className="infoHeading">
                        {t("stats")} 
                    </div>
                    <div className="valueStats" >
                        <div className="attPart">
                            <div className="attDefMob">{t("attack")}</div>
                            <div className="IconAndValue">
                                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png" alt="base_att"></img>
                                <div>
                                    {item.base_attack_min} - {item.base_attack_max}
                                </div>
                            </div>
                            <div className="IconAndValue">
                                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png" alt="att_time" ></img>
                                <div>
                                    {item.attack_rate}
                                </div>
                            </div>
                            <div className="IconAndValue">
                                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png" alt="att_range"></img>
                                <div>
                                    {item.attack_range}
                                </div>
                            </div>
                            <div className="IconAndValue">
                                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png" alt="proj_speed" ></img>
                                <div>
                                    {item.projectile_speed}
                                </div>
                            </div>
                        </div>
                        <div className="defPart">
                            <div className="attDefMob">{t("defense")}</div>
                            <div className="IconAndValue">
                                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png" alt="magic_resist"></img>
                                <div>
                                    25%
                                </div>
                            </div>
                        </div>
                        <div className="mobPart">
                            <div className="attDefMob">{t("mobility")}</div>
                            <div className="IconAndValue">
                                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png" alt="movement_speed"></img>
                                <div>
                                    {item.move_speed}
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
            <div className="nextLink2">
                <Link to={`/heroes/${prevHero.localized_name.toLowerCase().split(' ').join('')}`} className="nextLinkLeft">
                <AiFillCaretLeft className="linkIcons"/>
                </Link>
                <Link to="/heroes" className="nextLinkAll">
                    <div className="boxes2"></div>
                    <div className="boxes2"></div>
                    <div className="boxes2"></div>
                    <div className="boxes2"></div>
                    <div className="boxes2"></div>
                    <div className="boxes2"></div>
                </Link>
                <Link to={`/heroes/${nextHero.localized_name.toLowerCase().split(' ').join('')}`} className="nextLinkRight">
                <AiFillCaretRight className="linkIcons"/>
                </Link>
            </div>
        </div>
        <div className="nextLink">
            <Link className="prevHeroLink" to={`/heroes/${prevHero.localized_name.toLowerCase().split(' ').join('')}`}>
                        <img src={urlRootHeroes + prevHero.img} alt = {prevHero.localized_name}  className = "linksImg"/>
                    <div className="linksInfo">
                        <div className="futLinkName">{t("previous_hero")}</div>
                        <div className="futLinkHeroName">{prevHero.localized_name}</div>
                        <div className="futLinkAttType">
                            {(prevHero.attack_type === "Melee") ? <GiBroadsword className="attackTypeIconLink"/> : <GiHeavyArrow className="attackTypeIconLink"/> }
                            {t(prevHero.attack_type)}
                        </div>
                    </div>
            </Link>
                <a  className="allHeroesLink" href="/heroes">
                <div>
                    <div className="boxesAllheroes">
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                        <div className="boxes"></div>
                    </div>
                    <div>
                    {t("all_heroes")}
                    </div>
                </div>
                </a>
            <Link className="nextHeroLink" to={`/heroes/${nextHero.localized_name.toLowerCase().split(' ').join('')}`}>
                    <img src={urlRootHeroes + nextHero.img} alt = {nextHero.localized_name}  className = "linksImg"/>
                <div className="linksInfo">
                    <div className="futLinkName">{t("next_hero")}</div>
                    <div className="futLinkHeroName">{nextHero.localized_name}</div>
                    <div className="futLinkAttType">
                        {(nextHero.attack_type === "Melee") ? <GiBroadsword className="attackTypeIconLink"/> : <GiHeavyArrow className="attackTypeIconLink"/> }
                        {t(nextHero.attack_type)}
                    </div>
                </div>
            </Link>
        </div>
    </>
    )
}

export default AboutHero