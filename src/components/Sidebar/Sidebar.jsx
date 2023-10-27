import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import { sidebarData } from '../../Data/Data'
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {

  const[selected, setSelected] = React.useState(0)
  return (
    <div className="Sidebar">
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
            book<span>easy</span>
            </span>
        </div>
        <div className="menu">
          {sidebarData.map((item, index) => {
            return(
              <div className={selected===index?'menuItem active':'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}>
                <item.icon />
                <span>
                  {item.heading}
                </span>
              </div>
            )
          })}
          <div className="menuItem">
            <LogoutIcon />
            <span>
              Logout
            </span>
          </div>
        </div>
    </div>
  );
};

export default Sidebar
