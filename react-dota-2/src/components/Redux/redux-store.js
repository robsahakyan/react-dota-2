import {combineReducers,createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { compareHeroesReducer } from "./compareHeroes-reducer";
import { formReducer } from "./form-reducer";
import { heroInfoReducer } from "./heroInfo-reducer";


let rootReducer = combineReducers({   
    form: formReducer,
    heroInfo: heroInfoReducer,
    compareHeroes: compareHeroesReducer
})


const store = createStore(rootReducer,applyMiddleware(thunk));

window.store = store;



export default store