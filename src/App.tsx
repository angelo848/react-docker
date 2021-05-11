import React from 'react';
import { Container, CssBaseline, Grid, MuiThemeProvider } from "@material-ui/core";

import { Form } from './components/Form';
import { Title } from './components/Title';
import theme from './theme';
import { UsersList } from './components/UsersList';
import { UsersProvider } from './components/UsersProvider';

function App() {

  return (
    <UsersProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Title>
            Título
          </Title>
          <Grid container>
            <Grid item xs={6}>
              <Form />
            </Grid>
            <Grid item xs={6}>
              <UsersList />
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </UsersProvider>
  );
}

export default App;
