import './App.css'
import Header from './Header'
import Main from './Main'
import Nav from './Nav'


const menuSectionNamesArray = ['starters', 'pizzas', 'desserts']

const App = () => {
  return (
    <div id="container">
      <Header menuSectionNamesArray={menuSectionNamesArray}/>
      <Main />
      <footer>
        <a href="#top">Go to top</a>
      </footer>
    </div>
  )
}




export default App;
