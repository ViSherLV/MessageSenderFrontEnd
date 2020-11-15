import React, { useState, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../../redux/actions'
import CheckboxList from '../../../components/list/list'
import Button from '@material-ui/core/Button'
import { styles } from './styles'
import CircularProgress from '@material-ui/core/CircularProgress';

const UsersPart = () => {
    interface User {
        phoneNumber: string,
        chatId: string,
        name: string
    }
    const [fetchedUsers, setList] = useState<User[]>([])
    const [checkedAll, setCheckedAll] = useState(false);
    const dispatch = useDispatch()
    const usersFetched = useSelector((state: any) => state.fetchUsersData.users);

    useEffect(() => {
        dispatch(fetchUser())
    }, []);
    useEffect(() => {
        setList(usersFetched);
    });

    const users: Array<object> = [];
    if (fetchedUsers && fetchedUsers.length) {
        fetchedUsers.forEach(function (item: User): void {
            const user = { number: item.phoneNumber, chatId: item.chatId, name: item.name }
            users.push(user)
        })
    }

    return (
        <div style={styles.main}>
            <h3>Select phone numbers to send</h3>
            <CheckboxList data={users} checkedAll={checkedAll}></CheckboxList>
            <Button variant="contained" color="primary" size='large' disabled={false} onClick={() => { setCheckedAll(!checkedAll) }}>
                Choose all
            </Button>
        </div>
    )
}


export default UsersPart;