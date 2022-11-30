import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Body from './components/Body/Body'

import { BrowserRouter } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
