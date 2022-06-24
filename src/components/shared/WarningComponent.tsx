import { Backdrop, CircularProgress, Typography, Box } from "@material-ui/core";

interface Props {
  message?: string;
}

export default function WarningComponent({ message = "Načítavam..." }: Props) {
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