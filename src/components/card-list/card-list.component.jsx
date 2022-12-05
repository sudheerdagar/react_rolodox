import {Component} from 'react';
import './card-list.styles.css'
import Card  from 'C:/Users/subha/OneDrive/Desktop/react/test/src/card/card.component.jsx';
class CardList extends Component
{ 


  render()//can return only one parent level component
  {   
    const {monsters}=this.props
    console.log('render from cardlist')

    // console.log(this.props)//will log the props passed to this component 
    return (<div className='card-list' > 
       {monsters.map((monster) => {
           
       return <Card monster={monster} />


        })}
    
    
    </div>);
  
  }






}
export default CardList;