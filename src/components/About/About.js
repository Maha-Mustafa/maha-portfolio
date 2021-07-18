import React from 'react';
import poster from '../../images/poster.png';
import { makeStyles } from "@material-ui/core/styles";
import {Container, Typography,Grid, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  border: {
    borderTop: '8px dotted #95BA61',
    width: '100px',
    marginBottom: theme.spacing(2)
  },
  container:{
    marginBottom: theme.spacing(4)
  },
  title:{
    color: '#95BA61'
  },
  img:{
    [theme.breakpoints.down('sm')]: {
      width: 200,
    }
  },
  paper:{
    padding: theme.spacing(6),
    backgroundColor: '#F0F7E0'
  },
}))
const About = () => {
  const classes = useStyles();
    return (
      <Container className={classes.container} id="about">
        <div className={classes.border}></div>
        <Typography variant="h3" className={classes.title} component="h6" gutterBottom>
          About
        </Typography>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} md={6}>
            <img src={poster} alt="about-img" className={classes.img} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <Typography variant="h6">About Me</Typography>
              <Typography variant="body1" align="justify" gutterBottom>
                My expertise is in the areas of responsive web design. I like to
                build an innovative yet simple design that appeals to everyone!
              </Typography>
              <Typography variant="body1" align="justify">
                Below are some of my work that might interest you.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
}

export default About
