import React, { useState } from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import styles from "./StepPhoneEmail.module.css";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrap}>
            <button
              className={`${styles.tabButton} ${type==="phone" ? styles.active : ''}`}
              onClick={() => setType("phone")}
            >
              <PhoneIcon style={{ color: "white" }} />
            </button>
            <button
              className={`${styles.tabButton} ${type==='email' ? styles.active : ''}`}
              onClick={() => setType("email")}
            >
              <EmailIcon style={{ color: "white" }} />
            </button>
          </div>
          <Component onNext={onNext} />
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
