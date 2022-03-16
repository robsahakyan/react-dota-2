import { connect } from "react-redux";
import { setCurrentAbilityAC, setHeroesAC, setCurrentSearchedValueAC, getHeroesThunkCreator,setFilteredHeroesAC } from "../Redux/form-reducer";
import HeroesAndFilterSections from "./HeroesAndFilterSection";

let mapStateToProps = (state) => {
    return {
        allHeroes: state.form.allHeroes,
        abilityInfo: state.form.abilityInfo,
        isLoaded: state.form.isLoaded,
        searchedValue: state.form.searchedValue,
        filteredHeroes: state.form.filteredHeroes
    }
}

const HeroesContainer = (props) => {
   

    return <HeroesAndFilterSections
        allHeroes = {props.allHeroes}
        abilityInfo = {props.abilityInfo}
        isLoaded = {props.isLoaded}
        searchedValue = {props.searchedValue}
        filteredHeroes = {props.filteredHeroes}
        setHeroes = {props.setHeroes}
        setFilteredHeroes = {props.setFilteredHeroes}
        setCurrentAbility = {props.setCurrentAbility}
        getHeroes = {props.getHeroes}
        setCurrentSearchedValue = {props.setCurrentSearchedValue}
    />
}

export default connect(mapStateToProps,{ setHeroes: setHeroesAC,
setCurrentAbility: setCurrentAbilityAC,
setCurrentSearchedValue: setCurrentSearchedValueAC,
setFilteredHeroes: setFilteredHeroesAC,
getHeroes: getHeroesThunkCreator} )(HeroesContainer);
