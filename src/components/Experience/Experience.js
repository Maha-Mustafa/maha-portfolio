import React from 'react'
import {Typography,Container, Grid} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from '@material-ui/core';
import { HiOutlineDatabase} from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";

const useStyles = makeStyles((theme) => ({
    container:{
        marginTop: theme.spacing(6),
    },
    border: {
        borderTop: '8px dotted #95BA61',
        width: '100px',
        marginBottom: theme.spacing(2)
    },
    title:{
      color: '#95BA61'
    },
    grid:{
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(2)
    }
}))
const experience = [
    {
        title: 'Front-End',
        details: 'Experience with JS & React',
        icon : <FaReact/>,
    },
    {
        title: 'Back-End',
        details: 'Experience with Node JS & MongoDB',
        icon : <HiOutlineDatabase/>,
    },
    {
        title: 'UI/UX',
        details: 'Experience with tool like Figma',
        icon : <RiToolsFill/>,
    },
]
const Experience = () => {
    const classes = useStyles();
    return (
      <Container className={classes.container} id="experience">
        <div className={classes.border}></div>
        <Typography variant="h3" className={classes.title} component="h6" gutterBottom>
          Technology
        </Typography>
        <Typography variant="body1" color="textSecondary">
          I have worked with a range of technologies in the web development
          world! From Front-end to Back-end and have design UI.
        </Typography>
        <Grid container spacing={2} justify="center" className={classes.grid}>
          {experience.map((exp) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={exp.title}>
                <Icon color="secondary">{exp.icon}</Icon>
                <Typography variant="h5">{exp.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {exp.details}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
}

export default Experience
