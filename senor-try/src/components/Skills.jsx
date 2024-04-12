import "./Skills.css";
import { GrTechnology } from "react-icons/gr";
import search from "../assets/gifc.gif"

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills_main">
        <div className="skills_intro">
          <h4>Hello and Welcome Folks!</h4>
          <h1>I'm a Legal Advisor!👋</h1>
          <br />
          <h4>(But you can also call me)</h4>
          <br />
          <h3>
            Your Defender Of Rights 👩‍💻 from <span>Bangalore, India.</span>
          </h3>
          <br></br>
          <h4>This app is a smart legal chatbot that is integrated into an easy-to-use platform. This would give lawyers instant access to legal information and remove the need for laborious manual research in books or regulations using the power of Large Language Models. It not only grants lawyers instant access to legal information but also enhances their efficiency by eliminating the arduous manual research process.</h4>
          <img src={search} width="40%"alt="gif-not-found"/>
        </div>
        <div className="skills_msg">
          <h3 style={{textAlign:"center"}}>Features</h3>
          <div className="focus_skill">
            <div className="focus_skill1">
              <ul>
                <li>{<GrTechnology />} Users can adjust token length to control the length of generated responses, allowing for customization based on specific requirements or constraints.</li>
              </ul>
              <br></br>
            </div>
            <div className="focus_skill2">
              <ul>
                <li>{<GrTechnology />} Users can adjust the temp to control response randomness. Higher values (e.g., 0.5) produce diverse but less focused responses, while low values (e.g., 0.1) result in more focused but less varied answers.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
