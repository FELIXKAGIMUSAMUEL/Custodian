import { Link } from 'react-router-dom';
import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import { sidebarData } from '../../Data/Data'
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import {useHistory} from "react-router-dom";

const Sidebar = () => {
  const history =useHistory()
  const [selected, setSelected] = React.useState(0)
  const [expanded, setExpanded] = React.useState(false)
  const [accessToken,setAcessToken]=React.useState(localStorage.getItem('accessToken'))
  const [refreshToken,setrefreshToken]=React.useState(localStorage.getItem('refreshToken'))
  const sideBarvariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }

  const handleLogOut = (event) => {
    event.preventDefault();
  
    const url = 'https://groupa-backend.onrender.com/logout';

    // Define the options for the fetch request
    const options = {
      method: 'DELETE',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
        'x-access-token':accessToken,
        'x-refresh-token':refreshToken,
      }
    };

    // Use the fetch API to send the POST request
    fetch(url, options)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        // Handle the JSON response data as needed
        console.log('Response from server:', data);
         history.push('/login')
        // window.location.href=`${window.location.pathname}`
      })
      .catch((error) => {
        // Handle errors (e.g., show an error message)
        console.error('Error:', error);
      });

  };

  return (
    <>
      <div className='close' style={expanded ? { left: '60%' } : { left: '5%' }}
        onClick={() => setExpanded(!expanded)}>
        <MenuIcon />
      </div>
      <motion.div
        className="Sidebar"
        variants={sideBarvariants}
        animate={window.innerWidth <= 768 ? (expanded ? 'true' : 'false') : ''}
      >
        <div className="logo">
         
          <span>
            Hostel<span>Ease</span>
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
          <div className="menuItem" onClick={handleLogOut}>
            <LogoutIcon />
            <span>
              Logout
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar
