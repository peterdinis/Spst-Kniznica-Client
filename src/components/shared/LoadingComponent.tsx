import { Backdrop, CircularProgress, Typography, Box } from "@mui/material";

interface Props {
  message?: string;
}

export default function LoadingComponent({ message = "Načítavam..." }: Props) {
  return (
    <Backdrop open={true} invisible={true}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress size={100} color="secondary" />
        <Typography variant="h4">{message}</Typography>
      </Box>
    </Backdrop>
  );
}