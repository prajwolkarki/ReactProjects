
import './App.css'
import Header from './Header';
import Card from './Card';
function App() {


  return (
    <>
     <Header/>
     {/* <Card hobby={['playing','learning','reading']}/>
     <Card info={{name:"prajwol",age:21}}/> */}
     <Card device="Macbook"/>
     <Card device="ASUS"/>
     <Card device="ACER"/>
    </>
  )
}

export default App
