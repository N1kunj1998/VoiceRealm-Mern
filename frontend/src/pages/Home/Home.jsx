import React from "react";
import styles from "./Home.module.css";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  const history = useNavigate();
  function startRegister() {
    history("/authenticate");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title={"Welcome to Voice Realm!"} icon={<ChatBubbleIcon />}>
        <p className={styles.text}>
          Get ready to immerse yourself in a world of great conversations and
          amazing connections. 🌍💬 Our high-quality audio technology ensures
          that you can communicate clearly with people from all over the globe.
          So, come join us and start exploring the realm of voices! 🌟
        </p>
        <div>
          <Button onClick={startRegister} text={"Let's Go"} />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an Invite text?</span>
        </div>
      </Card>
    </div>
  );
};

export default Home;
