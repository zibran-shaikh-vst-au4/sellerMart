import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import { connect } from "react-redux";

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Dashboard from "../../views/Dashboard/Dashboard";
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
    backgroundColor: '#FFF',
    color: "purple"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Sidebar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    props.logout();
  };
  console.log("sidebar", props.children)

  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            VENGURLEKAR ADMIN
          </Typography>
          <FontAwesomeIcon style={{ cursor: "pointer" }} size="2x" className="ml-auto" icon={faUser} ></FontAwesomeIcon>
          {/* <Button onClick={handleLogout}>Logout</Button> */}
          <NavLink
            className="nav-link"
            to="/logout"
            onClick={handleLogout}
          >
            Logout
                  </NavLink>

        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem className="ml-2"><Link to="/dashboard"><FontAwesomeIcon icon={faHome} size="lg" /><span className="ml-2" style={{ fontSize: "15px" }}>Dashboard</span></Link></ListItem>
          <ListItem className="ml-2"><Link to="/contentmanagement"><FontAwesomeIcon icon={faUser} size="lg" /><span className="ml-2" style={{ fontSize: "15px" }}>Content Management</span></Link></ListItem>
          <ListItem className="ml-2"><Link to="/projects"><FontAwesomeIcon icon={faUser} size="lg" /><span className="ml-2" style={{ fontSize: "15px" }}>Projects</span></Link></ListItem>
          <ListItem className="ml-2"><Link to="/corevalues"><FontAwesomeIcon icon={faUser} size="lg" /><span className="ml-2" style={{ fontSize: "15px" }}>Core Values</span></Link></ListItem>
          <ListItem className="ml-2"><Link to="/redevelopment"><FontAwesomeIcon icon={faUser} size="lg" /><span className="ml-2" style={{ fontSize: "15px" }}>Re-Development</span></Link></ListItem>
          <ListItem className="ml-2"><Link to="/buyersguide"><FontAwesomeIcon icon={faUser} size="lg" /><span className="ml-2" style={{ fontSize: "15px" }}>Buyers Guide</span></Link></ListItem>
          <ListItem className="ml-2"><Link to="/contactus"><FontAwesomeIcon icon={faUser} size="lg" /><span className="ml-2" style={{ fontSize: "15px" }}>Contact Us</span></Link></ListItem>
          <ListItem className="ml-2"><Link to="/adminmanagement"><FontAwesomeIcon icon={faUser} size="lg" /><span className="ml-2" style={{ fontSize: "15px" }}>Admin</span></Link></ListItem>
          <ListItem className="ml-2"><Link to="/report"><FontAwesomeIcon icon={faUser} size="lg" /><span className="ml-2" style={{ fontSize: "15px" }}>Report</span></Link></ListItem>

        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        {/* <Dashboard/> */}



      </main>
    </div>

  );
}
/* const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
}; */

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: "SET_LOGOUT" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
