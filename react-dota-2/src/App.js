import React from 'react';
import Header from './components/Header/Header.jsx';
import './App.css';
import { Routes,Route,Navigate } from 'react-router';
import Footer from './components/Footer/Footer.jsx';
import { withSuspense } from './hoc/withSuspense.js';
import { HomePage } from './components/HomePage/HomePage.jsx';
const HeroesContainer = withSuspense(React.lazy(() => import('./components/Heroes/HeroesContainer')));
const AboutHero = withSuspense(React.lazy(() => import('./components/Heroes/AboutHero/AboutHero.jsx')));
const CompareHeroesContainer = withSuspense(React.lazy(() => import('./components/CompareHeroes/CompareHeroesContainer.jsx')));

function App() {
  let data = JSON.parse(localStorage.getItem("allHeroes"));
  
  return (
    <div className="rootParts">
        <div className="rootHeader">
          <Header/>
        </div>
        <div className="rootSections">
          <Routes>
              <Route 
                path="/home"
                element = {<HomePage/>}>
              </Route>
              <Route 
                path="/heroes"  
                element = {<HeroesContainer/>}>
              </Route>
              <Route
                path="/"
                element={<Navigate from = "/" to="/home"/>}>
              </Route>
              <Route
                path="*"
                element={<Navigate from = "/" to="/home"/>}>
              </Route> 
              <Route 
                path="/compareheroes"
                element = {<CompareHeroesContainer/>}>
              </Route>
              {data.map(item => {
                return (
                  <Route
                    path={`/heroes/${item.localized_name.toLowerCase().split(' ').join('')}`}
                    element = {<AboutHero currentHero = {item} allHeroes = {data}/>}>
                  </Route>)}
                )}
          </Routes> 
        </div>
        <div className="rootFooter">
           <Footer/>
        </div>
    </div>
  ) 
}

export default App;
