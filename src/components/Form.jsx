import styles from "./Form.module.css";

export default function Form({ name, setName, username, setUsername, email, setEmail, mobile, setMobile, error, setError, submitHandler }) {
    console.log(error);
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error?.name && <p className={styles.error}>Field is required</p>}
      <input
        type="text"
        placeholder="UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {error?.username && <p className={styles.error}>Field is required</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error?.email && <p className={styles.error}>Field is required</p>}
      <input
        type="text"
        placeholder="Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      {error?.mobile && <p className={styles.error}>Field is required</p>}
      <button onClick={submitHandler}>SIGNUP</button>
    </div>
  );
}
