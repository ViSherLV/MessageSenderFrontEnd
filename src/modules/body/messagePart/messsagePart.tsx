import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { sendMessages, showAlert } from "../../../redux/actions";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function RightPart() {
  const dispatch = useDispatch();
  const chooseUsers: Array<string> = useSelector(
    (state: any) => state.fetchUsersData.choosenUsers
  );
  const loading = useSelector((state: any) => state.app.loading);
  const alert = useSelector((state: any) => state.app.alert);
  const confirmAlert = useSelector((state: any) => state.app.confirmAlert);
  console.log(`alrt`, alert);
  const [message, setMessage] = useState("");
  function textAreaChange(e: string) {
    setMessage(e);
  }
  function sendMessage() {
    if (!chooseUsers.length) {
      dispatch(showAlert("Please select at least one customer"));
    } else if (!message.length) {
      dispatch(showAlert("Please enter text"));
    } else {
      dispatch(sendMessages({ users: chooseUsers, message: message }));
    }
  }
  return (
    <div style={styles.main}>
      {alert ? <Alert severity="error">{alert}</Alert> : null}
      {confirmAlert ? (
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      ) : null}
      {loading ? (
        <div style={styles.CircularProgressWrapper}>
          <CircularProgress style={styles.circularProgress} />
        </div>
      ) : (
        <div>
          <h3>Enter the message to send</h3>
          <div>
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={3}
              placeholder="Enter message here"
              style={styles.textArea}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const event = e.target.value;
                textAreaChange(event);
              }}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={false}
            onClick={sendMessage}
          >
            Send messages
          </Button>
        </div>
      )}
    </div>
  );
}
