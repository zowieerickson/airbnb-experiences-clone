import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './data.js'
import './App.css'

function App() {
  const cardElements = cardData.map(item => {
    return <Card
      key={item.id}
      item={item}
    />
  })


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardElements}
      </section>
    </div>
  )
}

export default App
