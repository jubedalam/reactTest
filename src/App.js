import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UseState from './components/reactHooks/useState';
import UseEffect from './components/reactHooks/useEffect';
import UseRef from './components/reactHooks/useRef';
import UseContext from './components/reactHooks/useContext';
import UseCallback from './components/reactHooks/useCallback';
import UseReducer from './components/reactHooks/UseReducer';
import UseMemo from './components/reactHooks/useMemo';
import Navigation from './components/reactHooks/navigation';
import UseMemo2 from './components/reactHooks/useMemo2';
import Memo from './components/memo';
import UseRef2 from './components/reactHooks/useRef2';
import UseRefStopwatch from './components/reactHooks/useRefStopwatch';
import UseRefScrolImage from './components/reactHooks/useRefScrolImage';

function App() {
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
        <Route exact path="/useRef2" element={<UseRef2 />}/>
        <Route exact path="/useRefStopwatch" element={<UseRefStopwatch />}/>
        <Route exact path="/useRefScrolImage" element={<UseRefScrolImage />}/>
        <Route exact path="/useContext" element={<UseContext />}/>
        <Route exact path="/useCallback" element={<UseCallback />}/>
        <Route exact path="/useMemo" element={<UseMemo />}/>
        <Route exact path="/useMemo2" element={<UseMemo2 />}/>
        <Route exact path="/memo" element={<Memo />}/>
      </Routes>
    </Router>
  );
}

export default App;
