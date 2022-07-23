import {useState, ReactNode} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styles} from "./styles"

interface IProps {
  name: string;
  btnName: string;
  children?: ReactNode;
}

export default function ReturnBook(props: IProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{props.btnName}</Button>
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
          <Box sx={styles}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {props.name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {props.children}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}