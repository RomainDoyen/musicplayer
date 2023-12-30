import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MusicDetail from './components/MusicDetail'
import ListMusic from './components/ListMusic'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listmusic" element={<ListMusic />} />
        <Route path="/musicdetail/:id" element={<MusicDetail />} />
        {/* <Route path="/likes" element={<Likes />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
