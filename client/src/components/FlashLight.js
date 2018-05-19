import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

export const FlashLight = ({ open, handleClose }) => {
  const actions = [
    <FlatButton label="Pass" primary={true} onClick={handleClose} />,
    <FlatButton label="To Event" primary={true} onClick={() => {}} />
  ];

  return (
    <div>
      <Dialog
        title="Congratulations!"
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={handleClose}
      >
        This is the beginning of an adventure
      </Dialog>
    </div>
  );
};

export default FlashLight;
