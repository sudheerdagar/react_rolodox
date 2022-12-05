// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    //runs first
    console.log("constructor");
    super();
    this.state = {
      //local state every class has this
      monsters: [],
      searchField: "",
    };
  }
  //life-cycle methods
  componentDidMount() {
    //runs third
    console.log("componentdidmount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users, toprint: users };
          },
          () => console.log(users)
        );
      });
  }

onSearchChange=(event) => {
  const searchstring = event.target.value.toLowerCase();

  this.setState(() => {

    return {
      searchField: searchstring,
    };
  });

  console.log(event.target.value);

 
}


  render() {
    console.log("render is running");

    const filteredmonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
    return (
      //runs second

      //runs fourth time also because state was changed by componentdidmount
      <div className="App">
         
         <h1 className="app-title"> Monsters-Rolodox</h1>


      <SearchBox onChangeHandle={this.onSearchChange} placeholder='search-monsters' className='search-box'     />
        
        {/* components will get rerendered when props change */}
        
      
        <CardList monsters={filteredmonsters}/>
        
        
      </div>
    );
  }
}

export default App;
