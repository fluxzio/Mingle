import { Routes,Route } from 'react-router-dom'
import HomeView from './pages/HomeView'


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} ></Route>
    </Routes>
  )
}

export default App
