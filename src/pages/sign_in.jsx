import { useState } from 'react'
import { useRouter } from 'next/router'
import firebase from '../libs/firebase'
import styles from '../../styles/Home.module.css'

const SignIn = () => {
  const router = useRouter()

  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()

  const signIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        router.push('/home')
      })
      .catch(err => {
        console.log(err.code)
        console.log(err.message)
      })
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Sign In</h1>
        <p className={styles.description}>
          Sign in with Email & Password.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <input type="email" placeholder="email" onChange={ (e) => {setEmail(e.target.value)} } />
            <input type="password" onChange={ (e) => { setPassword(e.target.value)} } />
            <button onClick={signIn}>Sign In</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignIn