import React, { useEffect, useState } from "react";
import "./HeroesSection.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeroesSection = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
   
    useEffect(() => {
      props.getHeroes();
      setIsLoaded(true);
    },[])
  
    if (!isLoaded) {
      return <div></div>;
    }   
      return (
        <div className="HeroesList">
        <ShowItems allHeroes = {props.allHeroes} currentRadio = {props.currentRadio} searchedValue = {props.searchedValue} /> 
       </div>
       )
  }

const ShowItems = (props) => {
  const { t } = useTranslation();

  if (props.currentRadio) {
      let currentRadio = props.currentRadio.toLowerCase().slice(0,3);

      return (
      <>
          {props.allHeroes.map(item => (
            (item.primary_attr === currentRadio) ?
            <HeroItem item = {item} key = {item.id}/> 
           : item.continue
          ))}
      </>
    );
  }
  else if(props.searchedValue) {  
     let filteredArray = props.allHeroes.filter(e => e.localized_name.toLowerCase().startsWith(props.searchedValue.toLowerCase()))
        if (filteredArray.length) {
          return (
            <>
                {filteredArray.map(item => (
                  <HeroItem item = {item} key = {item.id}/> 
              ))}
            </>
          )
        }
        return (
          <div className="emptyFilteredDiv">
            <h1 className="emptyFilterdHeading">{t("no_heroes_match_your_filter")}</h1>
          </div>
        )
    }         
      return (
      <>
         {props.allHeroes.map(item => (
          <HeroItem item = {item} allHeroes = {props.allHeroes} key = {item.id} /> 
        ))}
      </>
    )
  }

const CurrentHeroeIcon = (props) => {
    let currentHero;
    let urlRoot = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_";
    
    switch(props.AbilityOfImg) {
        case "agi" :
            currentHero = `${urlRoot}agility.png`;
            break;  
        case "int" :
            currentHero = `${urlRoot}intelligence.png`;
            break;
        default:
            currentHero = `${urlRoot}strength.png`;
            break;
    }
  
    return (
        <img className="AbilityOnHover" src={currentHero} alt={props.currentAbility}/>
    )
}


export const HeroItem = ({item}) => {
  const urlRoot = "https://api.opendota.com";

  return (
    <Link to={`${item.localized_name.toLowerCase().split(' ').join('')}`} state={item}>
    <div className="ImageSection">
        <img src={urlRoot + item.img} alt = {item.localized_name}  className = "ImgHeroes"/>
        <div className="ImageOverlay">
            <CurrentHeroeIcon AbilityOfImg = {item.primary_attr}/>
            <h1 className="HeroNameOnHover">{item.localized_name}</h1>
        </div>
    </div>
    </Link>
  )
}

export default HeroesSection;
