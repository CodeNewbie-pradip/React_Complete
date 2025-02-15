import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './Components/FoodItems';
import ErrorMessage from './Components/ErrorMessage';
import Container from './Components/Container';
import FoodInput from './Components/FoodInput';

function App() {
  //let foodItems=[];
  let foodItems=['Dal', 'Green vegies', 'Fruits', 'Nuts', 'Milk'];

  if(foodItems.length === 0){
    return <div>Sorry, no food items available</div>
  }
  return (
    <div>
    <Container>
      <h1 className='food-heading'>Healthy Food Items</h1>
      <ErrorMessage foodItems={foodItems}/>
      <FoodInput/>
      <FoodItems foodItems={foodItems}/>
    </Container>
    <Container>
      <p>Above is the list of healthy foods that are good for your health and well being.</p>
    </Container>
    </div>
  );
}

export default App
