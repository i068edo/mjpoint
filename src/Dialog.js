import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog( { open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"入力内容に誤りがあるようです"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            支払う人と受け取る人が同じではありませんか。支払う点数が
            マイナスの数ではありませんか。もう一度確認した上で操作してください。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>わかっとるわいくそボケが！</Button>
          <Button onClick={handleClose} autoFocus>
            はい、分かりました。もう間違えません。
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}