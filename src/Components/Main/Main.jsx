import React from 'react';
import './Main.css'
import { assets } from '../../assets/assets';
import { Context } from '../../config/context';
import { useContext } from 'react';
const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData,setRecentPrompt, setInput, input,newChat} = useContext(Context);
    

    return (
        <div className='mainn'>
            <div className="nav">
                <div className="nav-logo">
                    <p className="nav-name">UnEarth</p>
                </div>
                <div className="nav-menu" id="myNavMenu">
                    <ul className="nav_menu_list">
                        
                        <li className="nav_list">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav_list">
                            <a href="#home" className="nav-link">About</a>
                        </li>
                        <li className="nav_list">
                            <a href="#home" className="nav-link">Contact</a>
                        </li>
                        
                    </ul>
                </div> 
            </div>



            <div className="main-container">
                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello...</span></p>
                            <p><span>How can i help you today?</span></p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>What are the latest development in mine technology</p>

                            </div>
                            <div className="card">
                                <p>Can you provide information on mine safety regulations</p>

                            </div>
                            <div className="card">
                                <p>Can you recommend strategies for mine site rehabilition</p>

                            </div>
                            <div className="card">
                                <p>Can you suggest methods for cost reduction in mining operations</p>

                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt='' />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                        
                            <img src={assets.code_icon} alt='' />
                            {loading?
                            <div className="loader">
                                <p>Please wait</p>
                            </div>:<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        }
                            
                        </div>
                    </div>}

                <div className="main-bottom">
                    
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter prompt here...' />
                        <div>
                            
                            <img onClick={() => onSent()} src={assets.send_icon} alt='' />
                            
                        </div>
                    </div>
                    <p className="bottom-info">
                        UnEarth can display inacurate information.Kindly check when searching important information
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;