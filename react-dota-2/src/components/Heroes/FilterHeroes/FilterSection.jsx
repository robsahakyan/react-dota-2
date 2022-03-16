import React,{ useEffect, useState } from "react";
import "./FilterSection.css"
import {GoSearch} from "react-icons/go"
import { useTranslation } from "react-i18next";

const FilterSection = (props) => {
 const { t } = useTranslation();
  
    const [searchInput, setSearchInput] = useState("");
    const [isDisabled,setIsDisabled] = useState(false);
    const [checked, setChecked] = useState({ 
      abilityStatus: {
        Agility: false, Strength: false,Intelligence: false}, 
      currentRadio: null
     });

  useEffect(() => {
    props.setCurrentAbility(checked);
    
  },[checked]);
  
  useEffect(() => {
    props.setCurrentSearchedValue(searchInput)
    setIsDisabled(()=>{
      if (searchInput !== "")
      {
        props.setCurrentAbility(setChecked({abilityStatus: {
          Agility: false, Strength: false,Intelligence: false},
          currentRadio: null         
          }))
          return true
        }
    })
  },[searchInput]);

    const resetChecked = (e) => {
      setChecked(() => {
        if (e.target.checked) {
            return {
              abilityStatus: {
              Agility: false, Strength: false,Intelligence: false},
              currentRadio: null         
              }
          }
      });
    }
    const changeRadio = (e) => {
      setChecked(() => {
        return {
          abilityStatus: {
          Agility: false, Strength: false,Intelligence: false,
          [e.target.value]: true},
          currentRadio: e.target.value        
        };
      });
    };
   
    const changedInput = (e) => {
      setSearchInput(e.currentTarget.value);
 
     
    }

    

   
    return (<>
        <div className="FH">
          {t("filter_heroes")}
        </div>
        <div className="Attribute">
            <h3 className="AttributeLabel">{t("attribute")}</h3>      
            <form className="AttributeForm">
                <input onClick={resetChecked}  checked={checked.abilityStatus.Agility} onChange={changeRadio} disabled = {isDisabled} type="radio" name="AttributeRadio" id="Agility" value="Agility" className="RadioInput" />
                <label htmlFor="Agility" className="RadioLabel">
                <img className="AttributeIcons" src={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png"} alt="Agility"></img>
                </label>

                <input onClick={resetChecked}  checked={checked.abilityStatus.Strength} onChange={changeRadio} disabled = {isDisabled} type="radio" name="AttributeRadio" id="Strength" value="Strength" className="RadioInput" />
                <label htmlFor="Strength" className="RadioLabel">
                <img className="AttributeIcons" src={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png"} alt="Strength"></img>
                </label>

                <input  onClick={resetChecked}  checked={checked.abilityStatus.Intelligence} onChange={changeRadio} disabled = {isDisabled} type="radio" name="AttributeRadio" id="Intelligence" value="Intelligence" className="RadioInput" />
                <label htmlFor="Intelligence" className="RadioLabel">
                <img className="AttributeIcons" src={"https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png"} alt="Intelligence"></img>
                </label>
            </form>
        </div>
        <div className="Search">
            <GoSearch className="SearchIcon"/>
            <input
             type="text"
             className="SearchBar"
              value = {searchInput}
              onChange={changedInput}
             ></input>
        </div>
        </>
    )
}
  
export default FilterSection;