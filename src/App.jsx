import './App.css'
import Footer from './Layout/Footer';
import Header from './Layout/Header'
import Home from './PAGES/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 


function App() {

  // Env function
  // async function showApi() {
  //   console.log(`${import.meta.env.VITE_BASE_URL}/users`)
  //   const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users`)
  //   console.log(res)
  // }
  // useEffect(() => {  
  //   showApi()
  // }, [])
  return (
    <>
     <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="Classes" element={<Classes />} />
          <Route path="BlogPage" element={<BlogPage />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} /> */}
          </Routes>
      <Footer />
      </Router >
    </>
     
    </>
  )
}

export default App
