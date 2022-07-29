import {useState, ReactNode} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {style} from "./styles";

interface ICategoryModal {
  children?: ReactNode;
  modalHeader: string;
  modalText: string;
}

export default function AvaiableCategories(props: ICategoryModal) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                {props.modalHeader}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {props.modalText}
              </Typography>
              {props.children}
            </Box>
          </Fade>
        </Modal>
      </>
    );
  }