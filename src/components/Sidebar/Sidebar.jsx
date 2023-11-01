import {Link} from 'react-router-dom';
import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import { sidebarData } from '../../Data/Data'
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {

  const[selected, setSelected] = React.useState(0)
  const[expanded, setExpanded] = React.useState(true)

  return (
    <>
    <div className='close' style={expanded?{left:'60%'}:{left:'5%'}}>
      <MenuIcon />
      </div>
    <div className="Sidebar">
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
            book<span>easy</span>
            </span>
        </div>
        <div className="menu">
          {sidebarData.map((item, index) => {
            return (
              <Link
                to={item.to}
                className={`Link ${selected === index ? 'menuItem active' : 'menuItem'}`}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </Link>
            );
          })}
          <div className="menuItem">
            <LogoutIcon />
            <span>
              Logout
            </span>
          </div>
        </div>
    </div>
    </>
  );
};

export default Sidebar
