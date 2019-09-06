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
      backgroundColor: "rgb(250,250,100)",
    },
    card: {
        backgroundColor: "rgb(250,250,200)",
        maxWidth: 345,
        padding: 10,
      },
      media: {
        height: 140,
      },
  }));

function Helicopters(props){
    const classes = useStyles();
    return(
        <Paper className={classes.root}>
            <Typography variant="h4" component="h5">
          Helicopters
        </Typography>
    <br/>
            <Grid container>


 <Grid item xs={12} sm={3}>
 <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="ah64d.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          AH-64 Apache
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
          image="milmi24.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Mil Mi-24
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
          image="cobra.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bell AH-1 Cobra
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
          image="kamov.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Kamov KA-50
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
          image="tiger.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Tiger
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
          image="agusta.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Agusta A-129
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
          image="milmi28.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mil Mi-28 Havoc
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
          image="denel.png"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Denel Rooivalk AH-2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
          image="ah56.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            LockHeed AH-56
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
          image="Rah66.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            SikorSky RAH-66
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
          image="awa.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Agusta Westland AH-1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
          image="ag.jpg"
          title="gun1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Gazelle-SA342
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
 </Grid>
 </Paper>
    )
}
export default Helicopters; 