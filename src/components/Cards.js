import React, { Component } from 'react';
import { Grid, Typography, Card, CardActions, CardContent, Paper, Switch, Slider, Select, FormControl, MenuItem } from '@material-ui/core';

class Cards extends Component {
    constructor(props) {
        super(props)
        // Variables for each card.
        this.state ={
            online: true,
            volume: 20,
            quality: "none",
            notifications: [],
        }
    }
    componentDidUpdate = (prevProps, prevState) =>{
        // Creates a variable to check the length in the array to be used with setState.
        let notificationChanges = this.state.notifications.length;
        // If statement sets the notifications array back to 0 before checking each button variable.
        if(this.state.notifications.length > 0){
            this.state.notifications.length = 0;
        }
        // If statement checks if the variables online, volume, quality change and if so it's added to the notifications array.
        if(this.state.online === false){
            this.state.notifications.push("Your application is offline. You won't be able to share or stream music to other devices.");
        }
        if(this.state.volume >= 80){
            this.state.notifications.push("Listening to music at a high volume could cause long-term hearing loss.")       
        }
        if(this.state.quality === 'low'){
            this.state.notifications.push("Music quality is degraded. Increase quality if your connection allows it.")
        }

        // If statement calls setState by using notificationChanges variable called above.
        if(prevState.notifications.length !== notificationChanges){
            this.setState({
                notifications: this.state.notifications,
            });
        }
    }

    // toggleOnline is used to toggle the switch from true to false.
    toggleOnline = (e) => {
        e.preventDefault();
        this.setState({
            online: !this.state.online,
        });
    }

    // toggleVolume displays a scale from 0-100 by 10s.
    toggleVolume = (e, value) => {
    e.preventDefault();
        this.setState({
            volume: value
        });
    }

    // toggleQuality displays a drop down and allows the user to choose from low, normal, or high. 
    toggleQuality = (e, value) => {
    let sound = e.target.value;
    let soundQuality = {
        1: "low",
        2: "normal",
        3: "high"
    }
        this.setState({
            quality: soundQuality[sound]
        });
    }
    render() {
        // Below displays each card.
        return (
            <div><h1>Welcome User!</h1>
                <Grid container justify="center" spacing={4}>
                    <Grid item>
                        <Paper>
                            <Card className="cardStyle">
                                <CardContent>
                                    <Typography variant="h6" component="h2" >
                                        Online Mode
                                    </Typography>
                                    <br />
                                    <Typography color="textSecondary">
                                        Is this application connected <br /> to the Internet?
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Switch checked={this.state.online} onChange={this.toggleOnline} ></Switch>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <Card className="cardStyle">
                                <CardContent>
                                    <Typography variant="h6" component="h2">
                                        Master Volume
                                    </Typography>
                                    <br />
                                    <Typography color="textSecondary">
                                        Overrides all other sound <br /> settings in this application
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Slider
                                        defaultValue={20}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="auto"
                                        step={10}
                                        marks
                                        min={0}
                                        max={100}
                                        onChange={this.toggleVolume}></Slider>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <Card className="cardStyle">
                                <CardContent>
                                    <Typography variant="h6" component="h2">
                                        Sound Quality
                                    </Typography>
                                    <br />
                                    <Typography color="textSecondary">
                                        Manually control the music <br /> quality in event of poor <br /> connection
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <FormControl >
                                    <Select
                                        value={this.state.quality}
                                        onChange={this.toggleQuality}>
                                        <MenuItem value={this.state.quality}>
                                            <em>{this.state.quality}</em>
                                        </MenuItem>
                                        <MenuItem value={1}>low</MenuItem>
                                        <MenuItem value={2}>normal</MenuItem>
                                        <MenuItem value={3}>high</MenuItem>
                                    </Select>
                                </FormControl>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
                <div className="notifications">
                <h2>System Notifications:</h2>
                 <p>{this.state.notifications[0]}</p>
                 <p>{this.state.notifications[1]}</p>
                 <p>{this.state.notifications[2]}</p>
                </div>
            </div>
        )
    }
}
export default Cards;