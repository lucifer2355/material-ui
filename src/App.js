import React from 'react';
import {
  Typography,
  AppBar,
  Button,
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

import useStyles from './style';

const App = () => {
  const classes = useStyles();

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
        <div className={classes.container}>
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

            <div>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photo
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
