import React, { useEffect } from "react";
import {setPrevHeroAC, setNextHeroAC,setCurrentHeroAC, getHeroesThunkCreator } from "../../Redux/heroInfo-reducer"

import { connect } from "react-redux";
import { AboutHero } from "./AboutHero";

let mapStateToProps = (state) => {
    return {
        prevHero: state.heroInfo.prevHero,
        nextHero: state.heroInfo.nextHero,
    }
}

const AboutHeroContainer = (props) => {
console.log(props);
    return <AboutHero
            prevHero = {props.prevHero}
            nextHero = {props.nextHero}
            allHeroes = {props.allHeroes}
            currentHero = {props.currentHero}
            setPrevHero = {props.setPrevHero}
            setNextHero = {props.setNextHero}
            setCurrentHero = {props.setCurrentHero}
            getHeroes = {props.getHeroes}
        />
}

export default connect(mapStateToProps,{
    setPrevHero: setPrevHeroAC,
    setNextHero: setNextHeroAC,
    setCurrentHero: setCurrentHeroAC,
    getHeroes: getHeroesThunkCreator
})(AboutHeroContainer);