import {getHeroesApi } from "../../api/api";

const SET_ALL_HEROES = "SET_ALL_HEROES";
const SET_CURRENT_ABILITY = "SET_CURRENT_ABILITY";
const SET_CURRENT_SEARCHED_VALUE = "SET_CURRENT_SEARCHED_VALUE";
const SET_FILTERED_HEROES = "SET_FILTERED_HEROES";

let initialState = {
    abilityInfo: {
        abilityStatus: {
            Agility: false,
            Intelligence: false,
            Strength: false
            },
            currentRadio: null
        },
    searchedValue: "",
    allHeroes: [],
    filteredHeroes: []
}

export const formReducer = (state = initialState,action) => {
    switch(action.type) {
        case SET_ALL_HEROES:
            return {
                ...state,
                allHeroes: [...action.allHeroes],
            }
        case SET_CURRENT_ABILITY:
            
            return {
                ...state,
                abilityInfo: action.abilityInfo
               
            }
        case SET_CURRENT_SEARCHED_VALUE:
            return {
                ...state,
                searchedValue: action.searchedValue
            }
        case SET_FILTERED_HEROES:
            return {
                ...state,
                filteredHeroes: [...action.filteredHeroes],
            }    
        default:
            return state;
        }
}

export const setHeroesAC = (allHeroes) => ({type: SET_ALL_HEROES,allHeroes})
export const setCurrentAbilityAC = (abilityInfo) => ({type: SET_CURRENT_ABILITY,abilityInfo})
export const setCurrentSearchedValueAC = (searchedValue) => ({type:SET_CURRENT_SEARCHED_VALUE,searchedValue})
export const setFilteredHeroesAC = (filteredHeroes) => ({type: SET_FILTERED_HEROES,filteredHeroes})
export const getHeroesThunkCreator = () => {
    return (dispatch) => {
        getHeroesApi().then(
            (result) => {
                dispatch(setHeroesAC(result.data));
            }
        )
    }
}
