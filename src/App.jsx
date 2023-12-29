import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MusicDetail from './components/MusicDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musicdetail/:id" element={<MusicDetail />} />
        {/* <Route path="/likes" element={<Likes />} />
        <Route path="/movie/:id" element={<MusicDetail />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
