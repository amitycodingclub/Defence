import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper' 
import Avatar from '@material-ui/core/Avatar';

  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      maxWidth: 400,
      marginLeft: 70,
      backgroundColor: "rgb(220,220,220)",
    },
      media: {
        height: 200,
      },
      bigAvatar: {
        margin: 10,
        width: 70,
        height: 70,
      },
  }));

function Main(props){
    const classes = useStyles();
    return(
        <Paper className={classes.root}>
            <Typography variant="h4" component="h5">
                <b>Indian Defence System</b>
            </Typography>
            <Grid container justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src="flag.svg" className={classes.bigAvatar} />
            </Grid>
        </Paper>
    )
}
export default Main; 