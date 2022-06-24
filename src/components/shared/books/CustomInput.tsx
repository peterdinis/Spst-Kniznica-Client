import { TextField } from '@material-ui/core';
import { useController, UseControllerProps } from 'react-hook-form'

interface Props extends UseControllerProps {
  label: string;
}

function CustomInput(props: Props) {
  const { fieldState, field } = useController({ ...props, defaultValue: "" });
  return (
    <>
      <TextField {...props} {...field} fullWidth variant="outlined" error={!!fieldState.error} />
    </>
  )
}

export default CustomInput