import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UseReducer from './reactHooks/UseReducer';
import UseState from './reactHooks/useState';
import UseEffect from './reactHooks/useEffect';
import UseRef from './reactHooks/useRef';
import UseContext from './reactHooks/useContext';
import UseCallback from './reactHooks/useCallback';
import UseMemo from './reactHooks/useMemo';
import Navigation from './reactHooks/navigation';

const RouterComponent = () => {
  return (
    <Router>
      <Navigation />
    <Routes>
      {/* /React hooks */}
      <Route path="/" element={<UseReducer />}/>
      <Route path="/UseReducer" element={<UseReducer />}/>
      <Route exact path="/useState" element={<UseState />}/>
      <Route exact path="/useEffect" element={<UseEffect />}/>
      <Route exact path="/useRef" element={<UseRef />}/>
      <Route exact path="/useContext" element={<UseContext />}/>
      <Route exact path="/useCallback" element={<UseCallback />}/>
      <Route exact path="/useMemo" element={<UseMemo />}/>
    </Routes>
  </Router>
  )
}

export default RouterComponent