import { useRouter } from "next/router"
import { useCallback, useEffect } from "react"
import styles from '../styles/chat.module.css'
import { GrLogout } from "react-icons/gr"
import { useState } from "react"
import { AiOutlineSend } from "react-icons/ai";
import { Textarea, Spacer } from "@nextui-org/react";
import { useRef } from "react"

export const Chat = ({ socket, name, roomId }) => {
    const router = useRouter()
    const [socketJoinData, setsockeJoinData] = useState([]);
    const [socketMessageData, setsocketMessageData] = useState([]);
    const [message, setMessage] = useState("");
    const messageEndref = useRef(null);
    const logout = () => {
    }
    const sendmessage = async () => {
        if (message !== "") {
            const data = {
                name: name,
                roomId: roomId,
                message: message
            }
            await setsocketMessageData((liste => [...liste,data]));
            await socket.emit("send_message", data);
        }
    }
    useEffect(() => {
        socket.on("new_user", (data) => {
            setsockeJoinData([...socketJoinData, data]);
        })
        socket.on("receive_message", (data) => {
            setsocketMessageData((liste) =>[...liste,data]);
        })
        messageEndref.current?.scrollIntoView()
    }, [socket])
    return (
        <div className={styles.chatmain}>
            <div className={styles.leftchat}>
                <h2>N<span style={{ marginLeft: -5 }}>c</span></h2>
                <div onClick={logout}>
                    <GrLogout size={20} />
                </div>
            </div>
            <div className={styles.rightchat}>
                <div className={styles.forChat}>
                    <div className={styles.lastinchat} ref={messageEndref}>
                        {
                            socketMessageData.map((value, index,) => {
                                return (
                                    <div style={{ display: 'flex' }}>
                                        <p style={{ fontWeight: '600',color:value.name==name? 'red' : 'black' }}>{value.name}</p>
                                        <p style={{ marginLeft: 5 }}>{value.message}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className={styles.forsendMessage}>
                    <div style={{ width: '90%' }}>
                        <Textarea fullWidth={true} onChange={e => setMessage(e.target.value)}
                            placeholder="Enter your amazing ideas."
                        />
                    </div>
                    <div className={styles.sendMessageButton} onClick={sendmessage}>
                        <AiOutlineSend size={35} color="white" />
                    </div>
                </div>
            </div>
        </div>
    )
}
