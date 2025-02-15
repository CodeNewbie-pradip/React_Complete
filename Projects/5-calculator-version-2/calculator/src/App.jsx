import React,{ useState } from 'react'
import styles from './App.module.css'
import ButtonContainer from './Components/ButtonContainer'
import Display from './Components/Display'

function App() {
  let[calVal, setCalVal]=useState('');
  const onButtonClick=(buttonName)=>{
    if(buttonName==="C"){
      setCalVal("");
    }else if(buttonName==="="){
        try{
          setCalVal(eval(calVal).toString())
        }catch{
          setCalVal("Error");
        }
    }else{
      setCalVal(calVal+buttonName);
    }

  }
  return (
    <div className={styles.container}>
      <Display calVal={calVal}/>
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  )
}

export default App
