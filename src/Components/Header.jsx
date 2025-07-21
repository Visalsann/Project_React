

import { Link } from 'react-router-dom'
const Header = ({onMenuClick}) => {
  return (
    <header className='w-full h-[120px] flex  bg-black'>
      <div className="header flex items-center justify-between w-[80%] mx-auto h-[100%]">
          <img className='w-[90px] h-[90px] rounded-full' src="https://images-platform.99static.com/hx63znXlD4oTtOIHP-heJqhSp3k=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/82/82279/attachment_82279868" alt="" />
          <div className="menu flex gap-[20px]">
              <Link id='a' className='text-gray-300 text-lg font-bold hover:text-white' to="/">Home</Link>
              <button
              className='text-gray-300 text-lg font-bold hover:text-white'
              onClick={onMenuClick}
            >
            Menu
          </button>
              <Link id='a' className='text-gray-300 text-lg font-bold hover:text-white' to="/about">About</Link>
              <Link id='a' className='text-gray-300 text-lg font-bold hover:text-white' to="/contact">Contact</Link>
              <Link id='a' className='text-gray-300 text-lg font-bold hover:text-white' to="/location">Location</Link>
          </div>
      </div>
    </header>
  )
}
export default Header