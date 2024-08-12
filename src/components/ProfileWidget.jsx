import styles from './ProfileWidget.module.css';
import { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import profileImage from '../assets/profile.png';

export default function ProfileWidget() {
    const { user, selectedGenres } = useContext(AppContext);
    console.log(user);
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={profileImage} alt="User Image" />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{user.name}</p>
        <p className={styles.email}>{user.email}</p>
        <h2 className={styles.username}>{user.username}</h2>
        <div className={styles.genres}>
            {selectedGenres.slice(0,4).map((genre, index)=>(
                <div key={index} className={styles.genre}>{genre}</div>
            ))}
        </div>
      </div>
    </div>
  )
}
