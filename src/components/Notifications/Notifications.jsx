import React from 'react'
import './Notifications.css'
import { NotificationsData } from '../../Data/Data'
const Notifications = () => {
  return (
    <div className="Notifications">
         {NotificationsData.map((update)=>{
            return(
                <div className="update">
                    {update.img}
                    <div className="noti">
                        <div style={{marginBottom: '0.5rem'}}>
                            <span className="name">{update.name}</span> &nbsp;
                            <span>{update.noti}</span>
                        </div>
                        <div>
                            <span>{update.time}</span>
                        </div>
                    </div>
                </div>
            )
         })}
    </div>
  )
}

export default Notifications
