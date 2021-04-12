import { FormEvent, useContext, useRef } from "react";
import {
  Box,
  TextField,
  Button,
  makeStyles
} from "@material-ui/core";
import UsersContext from "../UsersContext";

const useStyles = makeStyles({
  buttonWrapper: {
    marginLeft: '8px'
  }
})

interface FormProps {
}

export const Form: React.FunctionComponent<FormProps> = (props) => {
  const classes = useStyles()

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const [users, setUsers] = useContext(UsersContext)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()

    setUsers([
      ...users,
      {
        name: nameRef.current!.value,
        email: emailRef.current!.value
      }
    ])
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField fullWidth label="Nome" inputRef={nameRef} />
      <TextField fullWidth label="E-mail" inputRef={emailRef} />
      <Box mt={1} className={classes.buttonWrapper}>
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </Box>
    </form>
  )
}
