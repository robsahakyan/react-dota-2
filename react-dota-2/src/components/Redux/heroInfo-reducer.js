import {getHeroesApi} from "../../api/api"

const SET_PREV_HERO = "SET_PREV_HERO";
const SET_NEXT_HERO = "SET_NEXT_HERO";
const SET_CURRENT_HERO = "SET_CURRENT_HERO";
const SET_ALL_HEROES = "SET_ALL_HEROES";

let initialState = {
    allHeroes: [],
    currentHero: {},
    prevHero: {},
    nextHero: {}   
}

export const heroInfoReducer = (state = initialState,action) => {
    switch(action.type) {
        case SET_PREV_HERO: {
            return {
                ...state,
                prevHero: action.prevHero
            }
        }
        case SET_NEXT_HERO: {
            return {
                ...state,
                nextHero: action.nextHero
            }
        }
        case SET_ALL_HEROES: {
            return {
                ...state,
                allHeroes: [...action.allHeroes],
            }
        }
        case SET_CURRENT_HERO: {
            return {
                ...state,
                currentHero: action.currentHero,
            }
        }
        default:
            return state
    }
}

export const setCurrentHeroAC = (currentHero) => ({type:SET_CURRENT_HERO,currentHero})
export const setHeroesAC = (allHeroes) => ({type: SET_ALL_HEROES,allHeroes})
export const setPrevHeroAC = (prevHero) => ({type:SET_PREV_HERO,prevHero})
export const setNextHeroAC = (nextHero) => ({type:SET_NEXT_HERO,nextHero})

export const getHeroesThunkCreator = () => {
    return (dispatch) => {
        getHeroesApi().then(
            (result) => {
                dispatch(setHeroesAC(result.data));
            }
        )
    }
}

