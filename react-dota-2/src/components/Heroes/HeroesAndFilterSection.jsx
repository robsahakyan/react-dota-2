import React, { useEffect } from "react";
import "./HeroesAndFilterSections.css"
import FilterSection from "./FilterHeroes/FilterSection";
import HeroesSection from "./HeroesSection/HeroesSection";
import Description from "./Description/Description"



const HeroesAndFilterSections = (props) => {

    useEffect(()=> {
        window.scroll(0,0);
    },[])

    return (
       <>
        <Description/>
            <div className="Sections">
                <div className="FilterSection">
                    <FilterSection 
                        abilityInfo={props.abilityInfo}
                        searchedValue = {props.searchedValue} 
                        setCurrentAbility = {props.setCurrentAbility}
                        setCurrentSearchedValue = {props.setCurrentSearchedValue}
                        />
                </div>
                    <HeroesSection 
                        allHeroes = {props.allHeroes}
                        filteredHeroes = {props.filteredHeroes}
                        currentRadio = {props.abilityInfo.currentRadio}
                        searchedValue = {props.searchedValue}
                        setFilteredHeroes = {props.setFilteredHeroes}
                        getHeroes = {props.getHeroes}
                        />      
            </div>
    </>
     
  )
}
export default HeroesAndFilterSections