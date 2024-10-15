import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Main = () => {
  const {
    onSent,
    recentprompt,
    showResult,
    loading,
    resultData,
    setinput,
    input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? 
          <>
            <div className="greet">
              <p>
                <span>Hello,Dev</span>
              </p>
              <p>How can I help you today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Suggest beautiful places to visit on holiday
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Tell me about React js and React native
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Briefly summarize this concept: urban planning
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>
                Brainstorm team bonding activities for our work retreat
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        : 
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentprompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading?
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>
             }
              
            </div>
          </div>
        }

        <div className="main-bottom">
          <div className="srch-box">
            <input
              onChange={(e) => setinput(e.target.value)}
              value={input}
              type="text"
              name=""
              id=""
              placeholder="Enter prompt here"
            />
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
          </div>
        </div>
      </div>
      {/* <p className="bottom-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe
        temporibus qui, fugit nihil voluptatibus corporis, placeat autem,
        officiis sit eum tempore voluptatum inventore quos.
      </p> */}
    </div>
  );
};

export default Main;
