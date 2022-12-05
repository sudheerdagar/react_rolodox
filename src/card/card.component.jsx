import {Component} from 'react'
import './card.styles.css'




class Card extends Component 
{
  render()
  {
     const {id,name,email}=this.props.monster;
     return(<div className='card-container'>
     <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}  />
    <h2 key={id*3}>{name}</h2>
    <p key={id*4}>{email}</p>

</div>)



  }







}
export default Card;