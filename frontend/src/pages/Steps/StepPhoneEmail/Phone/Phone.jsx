import React, { useState } from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";
import { sendOtp } from "../../../../http/index";
import { useDispatch }from "react-redux";
import { setOtp } from "../../../../store/authSlice";

const Phone = ({onNext}) => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const dispatch = useDispatch();

    async function submit () {
      //server request
      const { data } = await sendOtp({phone: phoneNumber});
      console.log(data);
      dispatch(setOtp({ phone: data.phone,hash: data.hash}));
      onNext();
    }
  return (
    <Card title={"Enter your Phone number"} icon={<PhoneIcon style={{color:'red', height:'35px', width:'35px'}}/>}>
      <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <div>
        <div className={styles.actionButtonWrap}>
            <Button text={"Next"} onClick={submit}/> 
        </div>
        <p className={styles.bottomParagraph}>
            By entring your number, you're agreeing to our Terms of service and Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Phone;
