import React, {useState} from 'react';
import Card from '../../../components/shared/Card/Card';
import TextInput from '../../../components/shared/TextInput/TextInput';
import Button from '../../../components/shared/Button/Button';
import LockIcon from "@material-ui/icons/Lock";
import styles from "./StepOtp.module.css";
import { verifyOtp } from '../../../http';
import { useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
import { useDispatch } from 'react-redux';

const StepOtp = ({onNext}) => {
  const [otp, setOtp] = useState(0);
  const dispatch = useDispatch();
  const dataFromStore = useSelector((state) => state.auth.otp);
  async function submit() {
    try {
      const { data } = await verifyOtp({ otp, phone: dataFromStore.phone, hash: dataFromStore.hash});
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <div className={styles.cardWrapper}>
      <Card title="Enter the OTP code" icon={<LockIcon style={{color:"yellow", height:'35px', width:'35px'}}/>}>
        <TextInput value={otp} onChange={(e) => setOtp(e.target.value)}/>
        <div className={styles.actionButtonWrap}>
          <Button onClick={submit} text="Next"/>
        </div>
      </Card>
    </div>
    </>
  )
}

export default StepOtp