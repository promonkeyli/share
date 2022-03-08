import React, {Suspense} from 'react'
import './styles/common/index.scss'
import {Routes, Route} from 'react-router-dom'
import routers from './routers/index';
const Home  = React.lazy(() => import('./pages/home'))
const Index  = React.lazy(() => import('./pages/index'))
const NotFound  = React.lazy(() => import('./components/404'))

function App() {
  return (
      <div className='container'>
          <Suspense fallback={<>loading</>}>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/Index' element={<Index/>}/>
                  {routers.map((item) => <Route key={item.path} index={item?.index} path={item.path} element={item.element}/>)}
                  <Route path='*' element={<NotFound/>}/>
              </Routes>
          </Suspense>
      </div>
  )
}

export default App
