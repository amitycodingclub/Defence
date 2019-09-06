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

  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      maxWidth: 1200,
      marginLeft: 70,
      backgroundColor: "rgb(250,100,250)",
    },
    card: {
        backgroundColor: "rgb(250,200,250)",
        maxWidth: 345,
        padding: 10,
        height: 450,
    },
    media: {
      height: 200,
    },
  }));

function Missiles(props){
    const classes = useStyles();
    return(
        <Paper className={classes.root}>
            <Typography variant="h4" component="h5">
          Missile System
        </Typography>
    <br/>
            <Grid container>

            <Grid item xs={12} sm={3}>
 <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="agni22.jpeg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Agni-II
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Boeing AH-64 Apache is an American twin-turboshaft attack helicopter with a tailwheel-type landing gear arrangement and a tandem cockpit for a crew of two.</Typography>
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
          image="agni.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Agni-III
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Boeing AH-64 Apache is an American twin-turboshaft attack helicopter with a tailwheel-type landing gear arrangement and a tandem cockpit for a crew of two.</Typography>
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
          image="pra.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Prithvi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Mil Mi-24 is a large helicopter gunship, attack helicopter and low-capacity troop transport with room for eight passengers </Typography>
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
          image="prah.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Prahaar
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Bell AH-1 Cobra is a two-blade, single-engine attack helicopter manufactured by Bell Helicopter. It was developed using the engine, transmission and rotor system </Typography>
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
          image="agni6.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
        Agni-VI
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Kamov KA-50 Black Shark is a single-seat Russian attack helicopter with the distinctive coaxial rotor system of the Kamov design bureau.</Typography>
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
          image="dhan.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dhanush
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Tiger is a four-bladed, twin-engined attack helicopter which first entered service in 2003. It is manufactured by Eurocopter</Typography>
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
          image="sag.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Sagarika
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Agusta A129 Mangusta is an attack helicopter originally designed and produced by Italian company Agusta.</Typography>
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
          image="bra.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Brahmos
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The Agusta A129 Mangusta is an attack helicopter originally designed and produced by Italian company Agusta.</Typography>
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
export default Missiles; 