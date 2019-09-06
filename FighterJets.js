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
      backgroundColor: "rgb(100,250,250)",
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

function FighterJets(props){
    const classes = useStyles();
    return(
        <Paper className={classes.root}>
            <Typography variant="h4" component="h5">
          Fighter Jets
        </Typography>
    <br/>
            <Grid container>
 <Grid item xs={12} sm={3}>
 <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="F160.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            F-16
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
          image="f22raptor.jpeg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            F-22 Raptor
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
          image="euro.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Eurofighter Typhoon
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
          image="rafale.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dassault Rafale
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
          image="f15e.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          F-15E Strike Eagle
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
          image="mirage.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Mirage
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
          image="sukhoi.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Sukhoi
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
          image="mikoyan.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           MiG-21
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
<br/>
 <Grid item xs={12} sm={3}>
 <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="mig29.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Micoyan MiG-29
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Is a twin-engine jet fighter aircraft designed in the Soviet Union. Developed by the Mikoyan design bureau as an air superiority fighter during the 1970s </Typography>
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
          image="jas39.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           JAS-39 Griper
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Is a light single-engine multirole fighter aircraft manufactured by the Swedish aerospace company Saab. It was designed to replace the Saab 35 Draken and 37 Viggen </Typography>
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
          image="f14.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          F-14 TomCat
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Grumman F-14 Tomcat is an American supersonic, twin-engine, two-seat, twin-tail, variable-sweep wing fighter aircraft. It was the first such U.S. jet fighter with twin tails.  </Typography>
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
          image="j7_new.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Chengdu J-7
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It is a People's Republic of China license-built version of the Soviet Mikoyan-Gurevich MiG-21. </Typography>
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
          image="mig23.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           MiG-23 Flogger
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A variable-geometry fighter aircraft, designed by the Mikoyan-Gurevich design bureau in the Soviet Union. It is a third-generation jet fighter</Typography>
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
          image="mig15.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          MiG-15
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          It is a jet fighter aircraft developed by Mikoyan-Gurevich for the Soviet Union. The MiG-15 was one of the first successful jet fighters to incorporate swept wings to achieve high transonic speeds. </Typography>
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
          image="tejas.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Tejas
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The HAL Tejas is an Indian single-engine, delta wing, multirole light fighter designed by the Aeronautical Development Agency (ADA) and Hindustan Aeronautics Limited (HAL) for the Indian Air Force and Indian Navy.</Typography>
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
          image="jaguar.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Jaguar
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The SEPECAT Jaguar is a British-French jet attack aircraft originally used by the British Royal Air Force and the French Air Force in the close air support and nuclear strike role.</Typography>
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
export default FighterJets; 