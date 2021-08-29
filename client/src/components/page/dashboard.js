import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import icon1 from '../../images/payment.png';
import icon2 from '../../images/user.png';
import icon3 from '../../images/ticket.png';
import icon4 from '../../images/room.png';
import icon5 from '../../images/food.jpg';
import icon6 from '../../images/patient.jpg';
import icon7 from '../../images/employee.jpg';
import icon8 from '../../images/medical.png';

import useStyles from './styles';
 
const Dashboard = ({ }) => {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={icon1}
                            title="Contemplative Reptile"
                        />
                        <CardContent  className={classes.contentTest} >
                            <Typography gutterBottom variant="h5" align="center" component="h2">
                                Finance
                            </Typography>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={icon2}
                            title="Contemplative Reptile"
                        />
                        <CardContent  className={classes.contentTest} >
                            <Typography gutterBottom variant="h5" align="center" component="h2">
                                User Mangment
                            </Typography>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={icon3}
                            title="Contemplative Reptile"
                        />
                        <CardContent  className={classes.contentTest} >
                            <Typography gutterBottom variant="h5" align="center" component="h2">
                                Ticket System
                            </Typography>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={icon4}
                            title="Contemplative Reptile"
                        />
                        <CardContent  className={classes.contentTest} >
                            <Typography gutterBottom variant="h5" align="center" component="h2">
                                Room Managment
                            </Typography>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={icon5}
                            title="Contemplative Reptile"
                        />
                        <CardContent  className={classes.contentTest} >
                            <Typography gutterBottom variant="h5" align="center" component="h2">
                                Food Managment
                            </Typography>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={icon6}
                            title="Contemplative Reptile"
                        />
                        <CardContent  className={classes.contentTest} >
                            <Typography gutterBottom variant="h5" align="center" component="h2">
                                Patient Managment
                            </Typography>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid> 
            <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={icon7}
                            title="Contemplative Reptile"
                        />
                        <CardContent  className={classes.contentTest} >
                            <Typography gutterBottom variant="h5" align="center" component="h2">
                                Employee Managment
                            </Typography>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid> 
            <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            image={icon8}
                            title="Contemplative Reptile"
                        />
                        <CardContent  className={classes.contentTest} >
                            <Typography gutterBottom variant="h5" align="center" component="h2">
                                Medical Managment
                            </Typography>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid> 
        </Grid>
    );
}

export default Dashboard;