import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className="logo">
            <img src="{Logo}" alt="" />
            <span>
            book<span>easy</span>
            </span>
        </div>
        <div className="menu">
          <div className="menuItem">
            <div>
              <DashboardIcon />
            </div>
            <span>Dashboard</span>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
