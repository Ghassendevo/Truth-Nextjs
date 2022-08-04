import { useRouter } from "next/router"
import { useEffect } from "react"
import styles from '../styles/chat.module.css'
import { GrLogout } from "react-icons/gr"
export const Chat = ({ socket, name, roomId }) => {
    const router = useRouter()
    const logout = () =>{
       //
    }
    return (
        <div className={styles.chatmain}>
            <div className={styles.leftchat}>
                <h2>N<span style={{ marginLeft: -5 }}>c</span></h2>
                <div onClick={logout}>
                    <GrLogout size={20} />
                </div>
            </div>
            <div className={styles.rightchat}>
                dsfdsf
            </div>
        </div>
    )
}
