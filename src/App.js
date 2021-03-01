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
          <PhotoCamera className={classes.icon} />
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

            <div className={classes.button}>
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

        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://source.unsplash.com/random'
                  title='Image Title'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5'>
                    Heading
                  </Typography>
                  <Typography>This is media card.</Typography>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          Something here to give a purpose
        </Typography>
      </footer>
    </>
  );
};

export default App;
