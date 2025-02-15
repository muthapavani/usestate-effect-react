import './App.css'
import Card from './useeffect/card'
import Adddata from './usestate/additems'
import Counter from './usestate/counter'
import Formdata from './usestate/form'
import Toggle from './usestate/toggle'
import Value from './usestate/value'

function App() {

  return (
    <>
     <Counter/>
     <br></br>
     <Formdata/>
     <Card/>
     <Adddata/>
     <Toggle/>
     <Value/>
    </>
  )
}

export default App
