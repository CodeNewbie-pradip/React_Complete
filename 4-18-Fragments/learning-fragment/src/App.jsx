import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './Components/FoodItems';
import ErrorMessage from './Components/ErrorMessage';

function App() {
  //let foodItems=[];
  let foodItems=['Dal', 'Green vegies', 'Fruits', 'Nuts', 'Milk'];

  if(foodItems.length === 0){
    return <div>Sorry, no food items available</div>
  }
  return (
    <>
      <h1 className='food-heading'>Healthy Food Items</h1>
      <ErrorMessage foodItems={foodItems}/>
      <FoodItems foodItems={foodItems}/>
    </>
  );
}

export default App
