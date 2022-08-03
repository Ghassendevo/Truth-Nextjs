import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@nextui-org/react';
import back from '../public/back.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header } from './components/header';
import { Card, Text } from "@nextui-org/react";
import { useEffect } from 'react';
export default function Home() {
  const router = useRouter();
  const goToLogin = (e) => {
    router.push('/login')
  }
  const goToSingup = () =>{
    router.push('/signup')
  }
  const goToRandomChat = ()=>{
    router.push('/randomChat')
  }
  return (
    <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Header />
      <div className={styles.home}>
        <Card onClick={goToLogin} className={styles.card} isPressable isHoverable variant="bordered" css={{ mw: "400px" }}>
          <Card.Body>
            <h2 >Login &rarr;</h2>
            <p>Login to truth and change the world</p>
          </Card.Body>
        </Card>
        <Card onClick={goToSingup} className={styles.card} isPressable isHoverable variant="bordered" css={{ mw: "400px" }}>
          <Card.Body>
            <h2>Signup &rarr;</h2>
            <p>Create new truth and join our team</p>
          </Card.Body>
        </Card>
        <Card onClick={goToRandomChat} className={styles.card} isPressable isHoverable variant="bordered" css={{ mw: "400px" }}>
          <Card.Body>
            <h2>Random Chat &rarr;</h2>
            <p>Chat with random people ! with just easy steps</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
