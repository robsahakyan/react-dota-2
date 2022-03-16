import {getHeroesApi } from "../../api/api";

const ADD_COMPARED_HERO = "ADD_COMPARED_HERO";
const DELETE_COMPARED_HERO = "DELETE_COMPARED_HERO";
const SET_ALL_HEROES = "SET_ALL_HEROES";

let initialState = {
    allHeroes: [],
    comparedHeroes: {
        comparedHero1: null,
        comparedHero2: null
    }
}

export const compareHeroesReducer = (state = initialState,action) => {
    switch(action.type) {
        case SET_ALL_HEROES: {
            return {
                ...state,
                allHeroes: action.allHeroes
            }
        }
        case ADD_COMPARED_HERO: {
            return {
                ...state,
                comparedHeroes: action.comparedHeroes
                }
            }
        case DELETE_COMPARED_HERO: {
            return {
                ...state,
                comparedHeroes: action.comparedHeroes
            }
        }
        default:
            return state;
    }
}

export const setHeroesAC = (allHeroes) => ({type: SET_ALL_HEROES,allHeroes});
export const addComparedHeroAC = (comparedHeroes) => ({type: ADD_COMPARED_HERO,comparedHeroes});
export const deleteComparedHeroAC = (comparedHeroes) => ({type: DELETE_COMPARED_HERO,comparedHeroes});

export const getHeroesThunkCreator = () => {
    return (dispatch) => {
        getHeroesApi().then(
            (result) => {
                dispatch(setHeroesAC(result.data));
            }
        )
    }
}