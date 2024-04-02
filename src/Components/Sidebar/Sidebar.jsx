import React,{ useState } from 'react';
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar=()=>{
    const [extended,setExtended] = useState(false)
    return(
       
        <div className='sidebar'>
            
                <div className="about">
                
                <div className="pro">
                <img  onClick={()=>setExtended(prev=>!prev)} className='profile'    src={assets.menu_icon} alt=''/>
                    <div className='info'><p>Name  :<span>Ajay</span></p></div>
                    <div className='info'><p>Mobile:<span>6379207090</span></p></div>
                    <div className='pass'><h3>Change Password</h3></div>
                </div>
                
                <div className="newchat">
                <img src={assets.plus_icon} alt=''/>
                <p>New Chat </p>
                </div>

                
             <div className="history">
                    <p className="history-title">History</p>
                    <div className="histories">
                    <img  src={assets.message_icon} alt=''/>
                    <p>What is react...</p>
                    </div>
                </div>

            </div>
            <div className="bottom">
                <div className="logout">
                <img className='log' src={assets.setting_icon} alt=''/>
                
                </div>
            </div>
        </div>
        
    );
};

export default Sidebar;