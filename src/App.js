import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Sidepanel from './components/Sidepanel'
import Maincontent from './components/Maincontent'
import Footer from './components/Footer'
function App () {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <div className='row'>
        <div className='col-md-3'>
          <Sidepanel />
        </div>
        <div className='col-md-9'>
          <Maincontent />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
