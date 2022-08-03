import styles from '../styles/Loginsignup.module.css'
import { Header } from './components/header'
import { Input, Spacer } from "@nextui-org/react";
import { UnLockIcon } from "./UnLockIcon.js";
import { LockIcon } from "./LockIcon.js";
import { UserIcon } from './UserIcon';
import { AiOutlineLogin } from 'react-icons/ai';
import Link from 'next/link';
export default () => {
    return (
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Header />
            <div className={styles.loginmain}>
                <h3>Singup</h3>
                <p>Make your account and join the world best developers !</p>
                <div style={{ marginTop: 10, width: '100%' }}>
                    <Spacer y={1.6} />
                    <Input labelPlaceholder='Full name' width={'100%'} className={styles.input} />
                    <Spacer y={1} />
                    <Input labelPlaceholder='username' width={'100%'} className={styles.input} />
                    <Spacer y={1} />
                    <Input.Password labelPlaceholder="Password" width='100%' height='200px' />
                    <Spacer y={1.6} />
                    <button className={styles.login}>
                        <p>Join</p> <AiOutlineLogin size={20} />
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
