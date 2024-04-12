import "./Header.css";
import Button from "./Button";
import HeaderSocials from "./HeaderSocials";
import illustration1 from "../assets/goood.png";

const Header = () => {
  return (
    <header className="header_container">
      <div className="left_portion">
        <h4>We are presenting</h4>
        <h1>SenOR legal advisor using LLM</h1>
        <h3 className="text-light">
          "SenOR" represents "Sentinel of Rights,"
        </h3>
        <div className="lp-text">
        <p><br /> This smart legal chatbot is integrated into an easy-to-use
        platform. This would give users instant access to legal information
        and remove the need for laborious manual research in books or
        regulations using the power of Large Language Models. 
        <span>
           It not only grants lawyers instant access to legal information but
          also enhances their efficiency by eliminating the arduous manual
          research process.
        </span></p>
        </div>
        <Button />
      </div>
      <div className="right_portion">
        <img src={illustration1} width="100%" height="80%" alt="illustration" />
      </div>
      <p className="const_mail">senor@gmail.com</p>
      {/* <HeaderSocials/> */}
    </header>
  );
};

export default Header;
