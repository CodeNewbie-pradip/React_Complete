import React, {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './Components/FoodItems';
import ErrorMessage from './Components/ErrorMessage';
import Container from './Components/Container';
import FoodInput from './Components/FoodInput';

function App() {
  //let foodItems=[];
  const [foodItems, setFoodItems]=useState(['Dal', 'Green vegies', 'Fruits', 'Nuts', 'Milk']);
  
  //let foodItems=['Dal', 'Green vegies', 'Fruits', 'Nuts', 'Milk'];

  //let textToShow="Food items entered by user";


  // if(foodItems.length === 0){
  //   return <div>Sorry, no food items available</div>
  // }

  const handleKeyDown=(e)=>{
    if(e.key==='Enter'){
      let newFoodItems=e.target.value;
      let newItems=[...foodItems, newFoodItems];
      setFoodItems(newItems);
      e.target.value='';
    }
  }

  return (
    <div>
    <Container>
      <h1 className='food-heading'>Healthy Food Items</h1>
      <FoodInput handleKeyDown={handleKeyDown}/>
      <ErrorMessage foodItems={foodItems}/>
      <FoodItems items={foodItems}/>
    </Container>
    <Container>
      <p>Above is the list of healthy foods that are good for your health and well being.</p>
    </Container>
    </div>
  );
}

export default App
