import React,{ useState } from 'react';
import Card from '../../../../components/shared/Card/Card';
import EmailIcon from '@material-ui/icons/Email';
import Button from '../../../../components/shared/Button/Button';
import TextInput from '../../../../components/shared/TextInput/TextInput';
import styles from "../StepPhoneEmail.module.css";

const Email = ({onNext}) => {
    const [email, setEmail] = useState("");
  return (
    <Card title={"Enter your Email"} icon={<EmailIcon style={{color:'white', height:'35px', width:'35px'}}/>}>
      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <div className={styles.actionButtonWrap}>
        <Button text={"Next"} onClick={onNext}/> 
      </div>
        <p className={styles.bottomParagraph}>
            By entring your email, you're agreeing to our Terms of service and Privacy Policy. Thanks!
        </p>
    </Card>
  )
}

export default Email