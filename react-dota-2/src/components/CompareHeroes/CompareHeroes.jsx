import { useEffect, useState } from "react"
import {BsPlusCircle} from "react-icons/bs"
import {GiBroadsword,GiHeavyArrow} from "react-icons/gi"
import "./CompareHeroes.css"
import { useTranslation } from "react-i18next"

export const CompareHeroes = (props) => {
    const { t } = useTranslation();
    const [unSetItem,setedItem] = useState( {
        comparedHero1: null,
        comparedHero2: null
    });

    useEffect(()=> {
        props.getHeroes();
    },[])
    useEffect(()=> {
        props.addComparedHero(unSetItem);
        props.deleteComparedHero(unSetItem);
    },[unSetItem])

    const addToCompare = (item,id) => {
        switch(id) {
            case 1:
                setedItem({
                    comparedHero1: item,
                    comparedHero2: unSetItem.comparedHero2
                });
                break;
            case 2:
                setedItem({
                    comparedHero1: unSetItem.comparedHero1,
                    comparedHero2: item
                });
                break;
            default: break;
            }
       
    }
    const deleteCompared = (item) => {
        switch(item) {
            case unSetItem.comparedHero1:
                setedItem({
                    comparedHero1: null,
                    comparedHero2: unSetItem.comparedHero2
                });
                break;
            case unSetItem.comparedHero2:
                setedItem({
                    comparedHero1: unSetItem.comparedHero1,
                    comparedHero2: null
                });
                break;
            default: break;
        }
    }
    const onDragHandler = (e) => {
        e.dataTransfer.setData("cardHero",e.target.id);
    }
    const droppedHero = (e,id) => {
        e.preventDefault();
        
        let droppedHeroId = props.allHeroes.find(item => (item.id == e.dataTransfer.getData("cardHero")));
        
        addToCompare(droppedHeroId,id);
        e.dataTransfer.clearData();
    }
    
    return (
        <div className="compareHeroes">
           <div className="comparedPart">
                <div className="selectedHeroes">
                    <div id="selected1" className={(unSetItem.comparedHero1) ? "activeCmp" : ""} onClick = {()=> {return (deleteCompared(unSetItem.comparedHero1))}} >
                        {(!unSetItem.comparedHero1) ?  
                            (
                            <div className="unsetCard"  onDragOver={(e) => { return(e.preventDefault())}} onDrop = {(e) => { return (droppedHero(e,1))}}>
                                <h2 className="addHeroHeading">{t("add_a_hero")}</h2>
                                <BsPlusCircle className="addHeroIcon"/>
                            </div>) :
                            (
                            <div className="DroppedCard">
                                 <HeroCard item={unSetItem.comparedHero1}></HeroCard>
                            </div>)
                        }
                    </div>
                    <div id="selected2"  className={(unSetItem.comparedHero2) ? "activeCmp" : ""} onClick = {()=> {return (deleteCompared(unSetItem.comparedHero2))}}>
                    {(!unSetItem.comparedHero2) ?  
                            (
                            <div className="unsetCard" onDragOver={(e) => { return(e.preventDefault())}} onDrop = {(e) => { return (droppedHero(e,2))}}>
                                <h2 className="addHeroHeading">{t("add_a_hero")}</h2>
                                <BsPlusCircle className="addHeroIcon"/>
                            </div>) :
                            (
                            <div className="DroppedCard">
                                <HeroCard item={unSetItem.comparedHero2}></HeroCard>
                           </div>)
                        }
                    </div>
                </div>
                <div className="statsSelectedHeroes">
                    {(!unSetItem.comparedHero2 || !unSetItem.comparedHero1) ? <h2 className="noData">{t("no_data")}</h2> :                
                       <table className="statsTable">
                           <tr>
                               <td>{unSetItem.comparedHero1.base_str}</td>
                               <td className="nameOfComparison">{t("strength")}</td>
                               <td>{unSetItem.comparedHero2.base_str}</td>
                           </tr>
                           <tr className="evenRow">
                               <td>{unSetItem.comparedHero1.base_agi}</td>
                               <td className="nameOfComparison">{t("agility")}</td>
                               <td>{unSetItem.comparedHero2.base_agi}</td>
                           </tr>
                           <tr>
                               <td>{unSetItem.comparedHero1.base_int}</td>
                               <td className="nameOfComparison">{t("intelligence")}</td>
                               <td>{unSetItem.comparedHero2.base_int}</td>
                           </tr>
                           <tr  className="evenRow">
                               <td>{unSetItem.comparedHero1.roles.length}</td>
                               <td className="nameOfComparison">{t("roles_count")}</td>
                               <td>{unSetItem.comparedHero2.roles.length}</td>
                           </tr>
                           <tr>
                               <td>{unSetItem.comparedHero1.attack_range}</td>
                               <td className="nameOfComparison">{t("attack_range")}</td>
                               <td>{unSetItem.comparedHero2.attack_range}</td>
                           </tr>
                           <tr  className="evenRow">
                               <td>{unSetItem.comparedHero1.attack_rate}</td>
                               <td className="nameOfComparison">{t("attack_range")}</td>
                               <td>{unSetItem.comparedHero2.attack_rate}</td>
                           </tr>
                           <tr>
                               <td>{unSetItem.comparedHero1.base_attack_min}</td>
                               <td className="nameOfComparison">{t("base_attack_min")}</td>
                               <td>{unSetItem.comparedHero2.base_attack_min}</td>
                           </tr>
                           <tr  className="evenRow">
                               <td>{unSetItem.comparedHero1.base_attack_max}</td>
                               <td className="nameOfComparison">{t("base_attack_max")}</td>
                               <td>{unSetItem.comparedHero2.base_attack_max}</td>
                           </tr>

                       </table> 
                    }
                </div>
           </div>
           <div className="heroesPart">
                <div className="heroesListCmpHeadingDiv">
                <h2 className="heroesListCmpHeading">{t("heroes_list")}</h2>
                </div>
                <div className="heroesListCmp">
                    {props.allHeroes.map(item => {
                        if (item === unSetItem.comparedHero1 || item === unSetItem.comparedHero2 ) {
                            return (    
                            <div  className="disabledItem" key={item.id}>
                                <HeroCard item={item}></HeroCard>
                            </div>) 
                        } 
                        else {
                            return (
                            <div  className="heroCmpItem" key={item.id} id = {item.id} onDragStart={(e) => { return (onDragHandler(e))}} draggable="true">
                                <HeroCard item={item}></HeroCard>
                            </div>
                                )
                        }
                    })
                    }
                </div>
           </div> 
        </div>
    )
}

const HeroCard = ({item}) => {
    let urlRoot = "https://api.opendota.com";
    
    return (<>
        <div className="abilityAttTypeAndImg">
            <img src={urlRoot + item.img} alt = {item.localized_name} draggable="false" className = "imgHeroCmp"/>
            <div className="abilityAndAttType">
                <img src={urlRoot + item.icon} alt = {item.localized_name} draggable="false" className = "iconHeroCmp"/>
                <CurrentHeroeIcon draggable="false" AbilityOfImg = {item.primary_attr}/>
                {(item.attack_type === "Melee") ? <GiBroadsword className="attackTypeIcon" draggable="false"/>  : <GiHeavyArrow className="attackTypeIcon" draggable="false"/> }
            </div>
        </div>
        <div className="cmpHeroHeading">
            <h2 className="nameHeroCmp">{item.localized_name}</h2>
        </div>
    </>)
}

const CurrentHeroeIcon = (props) => {
    let currentHero;
    let urlAbilityRoot = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_";
    
    switch(props.AbilityOfImg) {
        case "agi" :
            currentHero = `${urlAbilityRoot}agility.png`;
            break;  
        case "int" :
            currentHero = `${urlAbilityRoot}intelligence.png`;
            break;
        default:
            currentHero = `${urlAbilityRoot}strength.png`;
            break;
    }
  
    return (
        <img className="abilityIconCmp" src={currentHero} alt={props.currentAbility}/>
    )
}