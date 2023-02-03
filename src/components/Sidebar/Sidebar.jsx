import React from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css'
import { SidebarData } from '../../Data/Data'
// import a from '../../imgs/IconData/user.png'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
        {/* logo */}
        <div className='logo'>
            <img src={Logo} alt="" />
            <span>
                <span>I</span>ssue <span>T</span>racking
            </span>
        </div>

        {/* menu */}
        <div className='menu'>
            {SidebarData.map((item, index)=>{
                return(
                    <div className='menuItem'>
                        {/* <item.icon/> */}
                        <img src={item.icon} width='20' height='20' alt=''/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}

            <div className='menuItem'>
                {/* <img src={a}/> */}
            </div>
        </div>
    </div>
  )
}

export default Sidebar