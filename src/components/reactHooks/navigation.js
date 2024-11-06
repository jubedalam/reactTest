import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <div style={{display:'flex',background: '#d7d7d7'}}>
            <p style={{paddingRight: '5px'}}><NavLink to="/useState">UseState </NavLink></p>
            <p style={{paddingRight: '5px'}}><NavLink to="/useEffect">UseEffect </NavLink></p>
            <p style={{paddingRight: '5px'}}><NavLink to="/useRef">UseRef </NavLink></p>
            <p style={{paddingRight: '5px'}}><NavLink to="/useContext">UseContext </NavLink></p>
            <p style={{paddingRight: '5px'}}><NavLink to="/useReducer">UseReducer </NavLink></p>
            <p style={{paddingRight: '5px'}}><NavLink to="/useMemo">UseMemo </NavLink></p>
            <p style={{paddingRight: '5px'}}><NavLink to="/useMemo2">UseMemo2 </NavLink></p>
            <p style={{paddingRight: '5px'}}><NavLink to="/useCallback">UseCallback </NavLink></p>
            <p style={{paddingRight: '5px'}}><NavLink to="/memo">React Memo</NavLink></p>
        </div>
    </div>
  )
}

export default Navigation