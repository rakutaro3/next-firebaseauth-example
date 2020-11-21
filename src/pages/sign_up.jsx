import { useState } from 'react'
import firebase from '../libs/firebase'
import styles from '../../styles/Home.module.css'

const SignUp = () => {
  const [ email, setEmail] = useState("");
  const [ password, setPassword ] = useState("");

  const signUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err.code)
        console.log(err.message)
      })
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.description}>
          Sign up with Email & Password.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <input type="email" placeholder="email" onChange={ (e) => {setEmail(e.target.value)} } />
            <input type="password" onChange={ (e) => { setPassword(e.target.value)} } />
            <button onClick={signUp}>Sign Up</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignUp