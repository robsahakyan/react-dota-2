import React from "react";
import { connect } from "react-redux";
import {getHeroesThunkCreator, addComparedHeroAC, deleteComparedHeroAC} from "../Redux/compareHeroes-reducer";
import { CompareHeroes } from "./CompareHeroes";

let mapStateToProps = (state) => {
    return {
    allHeroes: state.compareHeroes.allHeroes,
    comparedHero1: state.compareHeroes.comparedHeroes.comparedHero1,
    comparedHero2: state.compareHeroes.comparedHeroes.comparedHero2
    }
}

const CompareHeroesContainer = (props) => {
    return <CompareHeroes
        allHeroes = {props.allHeroes}
        getHeroes = {props.getHeroes}
        comparedHero1 = {props.comparedHero1}
        comparedHero2 = {props.comparedHero2}
        addComparedHero = {props.addComparedHero}
        deleteComparedHero = {props.deleteComparedHero}
    />
}

export default connect(mapStateToProps,{
    getHeroes: getHeroesThunkCreator,
    addComparedHero: addComparedHeroAC,
    deleteComparedHero: deleteComparedHeroAC
})(CompareHeroesContainer)