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
const Singup = () => {
    const [data, setData] = useState({
        fullname: '',
        username: '',
        password: '',
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
                <h3>Singup</h3>
                <p>Make your account and join the world best developers !</p>
                <div style={{ marginTop: 10, width: '100%' }}>
                    <Spacer y={1.6} />
                    <Input onChange={e => setData({ fullname: e.target.value, username: data.username, password: data.password })} labelPlaceholder='Full name' width={'100%'} className={styles.input} />
                    <Spacer y={1} />
                    <Input onChange={e => setData({ fullname: data.fullname, username: e.target.value, password: data.password })} labelPlaceholder='username' width={'100%'} className={styles.input} />
                    <Spacer y={1} />
                    <Input.Password onKeyUp={e => join(e)} onChange={e => setData({ fullname: data.fullname, username: data.username, password: e.target.value })} labelPlaceholder="Password" width='100%' height='200px' />
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
export default Singup;