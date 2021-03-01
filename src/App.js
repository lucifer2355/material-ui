import React from 'react';
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Photo Album
            </Typography>

            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae maiores eveniet fugit ullam odio aperiam neque itaque
              impedit explicabo, labore totam officiis vitae minus nisi fugiat
              suscipit fuga repellendus praesentium!
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
