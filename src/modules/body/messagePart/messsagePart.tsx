import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessages } from '../../../redux/actions'

export default function RightPart() {
    const dispatch = useDispatch()
    const chooseUsers: Array<string> = useSelector((state: any) => state.fetchUsersData.choosenUsers);
    const [message, setMessage] = useState('');
    function textAreaChange(e: string) {
        setMessage(e)
    }
    function sendMessage() {
        dispatch(sendMessages({ users: chooseUsers, message: message }));
    }

    return (
        <div style={styles.main}>
            <h3>Enter the message to send</h3>
            <div>
                <TextareaAutosize
                    aria-label="minimum height"
                    rowsMin={3}
                    placeholder="Enter message here"
                    style={styles.textArea}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        const event = e.target.value;
                        textAreaChange(event)
                    }} />
            </div>
            <Button variant="contained" color="primary" size='large' disabled={false} onClick={sendMessage}>
                Send messages
            </Button>
        </div>
    )
}