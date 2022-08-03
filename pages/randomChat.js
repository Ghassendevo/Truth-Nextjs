import styles from '../styles/Loginsignup.module.css'
import { Header } from './components/header'
import { Input, Spacer, Loading } from "@nextui-org/react";
import { UnLockIcon } from "./UnLockIcon.js";
import { LockIcon } from "./LockIcon.js";
import { UserIcon } from './UserIcon';
import { AiOutlineLogin } from 'react-icons/ai';
import { TbWorldUpload } from 'react-icons/tb'
import Link from 'next/link';
import { useState } from 'react';
export default () => {
    const [data, setData] = useState({
        name:'',
        roomId:'',
    })
    const [isLoading, setisLaoding] = useState(false)
    const join = (e) => {
        if (e.key == 'Enter') {
            setisLaoding(!isLoading)
         }
        else if (e == 'click') {
           setisLaoding(!isLoading)
        }

    }

    return (
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Header />
            <div className={styles.loginmain}>
                <h3>RandomChat</h3>
                <p>Join your RandomChat and start talking to others !</p>
                <div style={{ marginTop: 10, width: '100%' }}>
                    <Spacer y={1.6} />
                    <Input onChange={e => setData({name:e.target.value,roomId:data.roomId })} labelPlaceholder='Your name' width={'100%'} className={styles.input} />
                    <Spacer y={1.5} />
                    <Input onChange={e => setData({name:data.name,roomId:e.target.value })} labelPlaceholder='Room id' width={'100%'} className={styles.input} />
                    <Spacer y={1.6} />
                    <button onClick={e => join('click')} className={styles.login}>
                        {isLoading && <Loading type="spinner" size="lg" color={'white'}/> || <><p>Join</p> <TbWorldUpload size={20} /></>}
                    </button>
                    <Spacer y={0.5} />
                    <Link href='/'>
                        <a style={{ fontSize: 15, textDecoration: 'underline' }}>Go back to home</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
