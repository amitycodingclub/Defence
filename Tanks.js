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
import { red } from '@material-ui/core/colors';

  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      maxWidth: 1200,
      marginLeft: 70,
      backgroundColor: "rgb(100,250,200)",
    },
    card: {
      backgroundColor: "rgb(200,250,250)",
        maxWidth: 345,
        padding: 10,
        height: 450,
      },
      media: {
        height: 200,
      },
  }));

function Tanks(props){
    const classes = useStyles();
    return(
        
        <Paper className={classes.root}>
            <Typography variant="h4" component="h5">
          Tanks
        </Typography>
    <br/>
            <Grid container>
 <Grid item xs={12} sm={3}>
 <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="t90m.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            T-90M Bhishma
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The General Dynamics F-16 Fighting Falcon is a single-engine supersonic multirole fighter aircraft originally developed by General Dynamics (its aviation unit now part of Lockheed Martin) for the United States Air Force (USAF). </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
 </Grid>

 <Grid item xs={12} sm={3}>
 <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="arjun.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Arjun MK-2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Lockheed Martin F-22 Raptor is a fifth-generation, single-seat, twin-engine, all-weather stealth tactical fighter aircraft developed for the United States Air Force (USAF).
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
 </Grid>

 <Grid item xs={12} sm={3}>
 <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="karna.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Karna 2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Eurofighter Typhoon is a twin-engine, canard–delta wing, multirole fighter. The Typhoon was designed originally as an air superiority fighter</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
 </Grid>

 <Grid item xs={12} sm={3}>
 <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="t90.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            MBT T-90
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A French twin-engine, canard delta wing, multirole fighter aircraft designed and built by Dassault Aviation. Equipped with a wide range of weapons </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
 </Grid>
 <Grid item xs={12} sm={3}>
 <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="bmd2.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Boyevaya Mashina Desanta-2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The McDonnell Douglas (now Boeing) F-15E Strike Eagle is an American all-weather multirole strike fighter derived from the McDonnell Douglas F-15 Eagle. </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
 </Grid>

 <Grid item xs={12} sm={3}>
 <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="bmp2.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Boyevaya Mashina Pekhoty-2 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Dassault Mirage 2000 is a French multirole, single-engine fourth-generation jet fighter manufactured by Dassault Aviation. It was designed in the late 1970s as a lightweight fighter</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
 </Grid>

 <Grid item xs={12} sm={3}>
 <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="t721.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          T-72 Ural
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A twinjet multirole air superiority fighter developed by Russia's Sukhoi and built under licence by India's Hindustan Aeronautics Limited (HAL) for the Indian Air Force (IAF).</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
 </Grid>

 <Grid item xs={12} sm={3}>
 <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="m4.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           M-4 Sherman
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It is a supersonic jet fighter and interceptor aircraft, designed by the Mikoyan-Gurevich Design Bureau in the Soviet Union. </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
 </Grid>

 </Grid>
 </Paper>
    )
}
export default Tanks; 