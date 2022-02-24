import React, {Suspense} from 'react'
import './styles/common/index.scss'
import {Routes, Route} from 'react-router-dom'
const Home  = React.lazy(() => import('./pages/home'))
const NotFound  = React.lazy(() => import('./components/404'))

function App() {
  return (
      <div className='container'>
          <Suspense fallback={<>loading</>}>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='*' element={<NotFound/>}/>
              </Routes>
          </Suspense>
      </div>
  )
}

export default App
