import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import styles from "./RegisterPage.module.css";
import Form from "../components/Form";
import { validateForm } from "../utils/validateForm";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const { user, setUser } = useContext(AppContext);
  const [name, setName] = useState(user?.name || "");
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [mobile, setMobile] = useState(user?.mobile || "");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const submitHandler = () => {
    const {valid, invalid} = validateForm(name, username, email, mobile) ;
    if(!valid){
      setError({...invalid});
      return;
    }
    setError(null);
    setUser({name, username, email, mobile});
    navigate('/genres');
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.background}></div>
        <div className={styles.label}>Discover new things on Superapp</div>
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Super app</h1>
          <h3 className={styles.subheading}>Create your new account</h3>
        </div>

        <Form name={name} setName={setName} username={username} setUsername={setUsername} email={email} setEmail={setEmail} mobile={mobile} setMobile={setMobile} error={error} setError={setError} submitHandler={submitHandler} />

        <div className={styles.footer}>
          
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <span>Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
