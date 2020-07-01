import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import 'react-notifications/lib/notifications.css';
import { connect } from "react-redux";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">

                Vengurlekar
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const styles = (theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1462396240927-52058a6a84ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class SignIn extends Component {
    state = { name: "", password: "", errors: {} };

    handleInput = e => {
        e.preventDefault();

        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleForm = e => {
       
        e.preventDefault();
        if (this.state.name === '' || this.state.password === '') {
            NotificationManager.warning("Name And Password Required");
            return false;
        }
        const data = { name: this.state.name, password: this.state.password };
        axios
            .post("http://localhost:6969/admin/login", data)
            .then(result => {
                localStorage.setItem("token", result.data.token);
                localStorage.setItem("admin", JSON.stringify(result.data.admin));
                this.props.setLogin(JSON.stringify(result.data.admin));
                 NotificationManager.success(result.data.msg);
                
               console.log("result", result)

            })
            .catch(err => {
                if (err.response && err.response.status === 404)
                    NotificationManager.error(err.response.data.msg);
                else
                    NotificationManager.error("Something Went Wrong");
                
                    this.setState({ errors: err.response })
            });
    }
   
    render() {
        const { classes } = this.props

        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <NotificationContainer/>
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Admin
          </Typography>
                        <form className={classes.form} noValidate onSubmit={this.handleForm}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label=" name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                type="text"
                                onChange={this.handleInput}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handleInput}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>

                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLogin: admin => dispatch({ type: "SET_LOGIN", payload: admin })
    };
};
const  styler = withStyles(styles, { withTheme: true })
const connector = connect(null, mapDispatchToProps)

export default styler(connector(SignIn));

