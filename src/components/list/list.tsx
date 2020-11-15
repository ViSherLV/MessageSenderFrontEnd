import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { saveChoosenUsers } from '../../redux/actions'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: "200px",
    maxWidth: 360,
    margin: '0 auto',
    overflowY: 'scroll',
    whiteSpace: 'nowrap',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxList({ data, checkedAll }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [checkedAllItems, setCheckedAll] = React.useState(checkedAll)
  const loading = useSelector(state => state.app.loading);
  const dispatch = useDispatch()
  const checkedUsers = []
  useEffect(() => {
    setCheckedAll(checkedAll)
    if (checkedAll) {

      data.forEach(function (item) {
        checkedUsers.push(item.chatId)
      })
      dispatch(saveChoosenUsers(checkedUsers))
    } else {
      dispatch(saveChoosenUsers([]))
      setChecked([])
    }
  }, [checkedAll]);

  const handleToggle = (value) => () => {
    setCheckedAll(false)
    const currentIndex = checked.indexOf(value);
    const newCheckedUsers = [...checked];
    if (currentIndex === -1) {
      newCheckedUsers.push(value);
    } else {
      newCheckedUsers.splice(currentIndex, 1);
    }
    setChecked(newCheckedUsers);
    dispatch(saveChoosenUsers(newCheckedUsers))
  };

  return (
    loading ? <div style={{ paddingBottom: '1px' }}>
      <CircularProgress style={{ width: '41%', height: '41%' }} />
    </div> :
      <List className={classes.root} >
        {data && data.length ? data.map((value, index) => {
          const labelId = `checkbox-list-label-${value.number}`;

          return (
            <ListItem key={index} role={undefined} dense button onClick={handleToggle(value.chatId)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checkedAllItems ? true : checked.indexOf(value.chatId) !== -1}
                  tabIndex={-1}
                  defaultChecked={true}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value.name}: ${value.number}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        }) : <h1>Номерів немає</h1>}
      </List>
  );
}
