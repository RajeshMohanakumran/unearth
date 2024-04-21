import React, { useContext, useState } from 'react';
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../config/context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const { onSent, prePrompts, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (




        <div className='sidebar'>
            
                
            <div className="about">
               
           <div className="pro">
                    <img onClick={()=>setExtended(prev=>!prev)} className='profile' src={assets.menu_icon} alt='' />
                    <div className='info'><p>Name  :<span>Ajay</span></p></div>
                    <div className='info'><p>Mobile:<span>6379207090</span></p></div>
                    <div className='pass'><h3>Change Password</h3></div>
                </div>

                <div onClick={() => newChat()} className="newchat">
                    <img src={assets.plus_icon} alt='' />
                    <p>New Chat </p>
                </div>


                <div className="history">
                    <p className="history-title">History</p>
                    <div className='hist-scroll'>
                    {prePrompts?.map((item, index) => {
                        return(
                            <div onClick={()=>loadPrompt(item)} key={index} className="histories">
                                <img src={assets.message_icon} alt='' />
                                <p >{item?.slice(0,18)}...</p>
                            </div>
                        )
                    }
                    )}
                    </div>
                </div>

            </div>
            <div className="bottom">
                <div className="logout">
                    
                    <img className='log' src={assets.setting_icon} alt='' />

                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;