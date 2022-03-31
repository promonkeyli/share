import React, {Suspense, useEffect} from 'react'
import './styles/common/index.scss'
import {Routes, Route, useNavigate} from 'react-router-dom'
import routers from './routers/index';
import {RouteObject} from "react-router";
const Home  = React.lazy(() => import('./pages/home'))
const Index  = React.lazy(() => import('./pages/index'))
const NotFound  = React.lazy(() => import('./components/404'))

function App() {
    const navigate = useNavigate();
    useEffect(() => {  navigate('/home') },[])
  return (
      <div className='container'>
          <Suspense fallback={<>loading</>}>
              <Routes>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/' element={<Index/>}> {generateRoutes(routers)}</Route>
                  <Route path='*' element={<NotFound/>}/>
              </Routes>
          </Suspense>
      </div>
  )
}
function generateRoutes(r: Array<RouteObject|any>) {
    return r.map((item) => <Route key={item.path} index={item?.index} path={item.path} element={<item.element/>}/>)
}
export default App
