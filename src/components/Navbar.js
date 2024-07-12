import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import { useState } from 'react'
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { logoutUser, user } = useAppContext()
  return (
    <Wrapper>
      <div className='nav-center'>
        <a type='' className='' ></a>
        <div>
          <h2>JobBoard</h2>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'show-dropdown' : 'dropdown'}>
            <button type='button' onClick={logoutUser}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
