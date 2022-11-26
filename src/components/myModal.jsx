import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

export default function MyModal({ open, onClose, children }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modal Open from parent</DialogTitle>
        <DialogContent>{!!children ? children : <p>lorem</p>}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
