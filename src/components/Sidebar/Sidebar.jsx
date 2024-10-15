import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
// import { Context } from "../../context/Context";
const Sidebar = () => {
  
  const [extend, setextend] = useState(false);
  // const [onSent, previousprompt, setrecentprompt] = useContext(Context);
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={() => setextend(prev=>!prev)}className="menu"src={assets.menu_icon}
        ></img>
        <div className="new-chat">
          <img src={assets.plus_icon}></img>
          {extend ?<p>New chat</p>: null}
        </div>
        {extend ?
          <div className="recent">
            <p className="recent-title">Recent</p>
            
                <div className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item}...</p>
                </div>
           
          </div>
         : null
        }
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extend ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extend ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
