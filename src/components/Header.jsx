import PropTypes from 'prop-types'
// import Button from './button'
import { useEffect } from 'react'

const Header = ({ title, displayForm, showAdd }) => {
  const useHandleClick = () => {
    console.log('Çlick')
  }

  useEffect(()=>{
    useHandleClick()
  },[])
  return (
    <header className='header'>
        <h1>{title}</h1>
        {/* <button onClick={displayForm}>Add</button> */}
        <button className='btn' onClick={displayForm} style={{backgroundColor: showAdd ? 'red' : 'green'}}>{showAdd ? 'Close' : 'Add'}</button>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in jsx
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header