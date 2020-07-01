import React, { Fragment } from "react";
// react plugin for creating charts
/* import ChartistGraph from "react-chartist"; */
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Container} from "@material-ui/core"
import {Apartment} from "@material-ui/icons";


// @material-ui/icons
/* import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud"; */
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
/* import Tasks from "../../components/Tasks/Tasks.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Danger from "../../components/Typography/Danger.js"; */
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import { Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit,faTrash, faBuilding, faQuestionCircle, faUser, faEye} from '@fortawesome/free-solid-svg-icons'
/* import { bugs, website, server } from "variables/general.js"; */

/* import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js"; */

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";



import { IconButton, createSvgIcon, ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles(styles,theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openAdmin, setOpenAdmin] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenAdmin = () => {
    setOpenAdmin(true);
  };
  const handleCloseAdmin = () => {
    setOpenAdmin(false);
  };


  return (
    <div >
      <Container  ml={8}>
        <GridContainer>
          <GridItem xs={9} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon><FontAwesomeIcon  icon={faBuilding} /></Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Total Projects</p>
                <h3 className={classes.cardTitle}>12</h3>
              </CardHeader>
              <CardFooter stats>
                {/* <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Get more space
                </a>
              </div> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={9} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon><FontAwesomeIcon  icon={faQuestionCircle} /></Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Enquires</p>
                <h3 className={classes.cardTitle}>5</h3>
              </CardHeader>
              <CardFooter stats>
                {/* <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={9} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon><FontAwesomeIcon  icon={faUser} /></Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Admins</p>
                <h3 className={classes.cardTitle}>5</h3>
              </CardHeader>
              <CardFooter stats>
                {/* <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div> */}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={9} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon><FontAwesomeIcon  icon={faEye} /></Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Page views</p>
                <h3 className={classes.cardTitle}>245</h3>
              </CardHeader>
              <CardFooter stats>
                {/* <div className={classes.stats}>
                <Update />
                Just Updated
              </div> */}
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        {/* <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer> */}
        <GridContainer>
          <GridItem xs={10} sm={12} md={6}>

            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Project Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  All Project details
              </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["ID", "Project Tite", "Contact", "email id", "", ""]}
                  tableData={[
                    ["1", "Prestige", "898989898", "xyz@gmail.com", <Fragment><ButtonGroup variant="text"><Tooltip title="Edit"><Button style={{ color: '#fc9006' }} size="small" onClick={handleOpen}><FontAwesomeIcon icon={faEdit}/></Button></Tooltip><Tooltip title="Delete"><Button style={{ color: '#fd2121cf' }} size=""><FontAwesomeIcon icon={faTrash} /></Button></Tooltip></ButtonGroup></Fragment>],
                    ["2", "Minerva Hooper", "676767676", "abc@ymail.com", <Fragment><ButtonGroup variant="text"><Tooltip title="Edit"><Button style={{ color: '#fc9006' }} size="small" onClick={handleOpen}><FontAwesomeIcon icon={faEdit}/></Button></Tooltip><Tooltip title="Delete"><Button style={{ color: '#fd2121cf' }} size=""><FontAwesomeIcon icon={faTrash} /></Button></Tooltip></ButtonGroup></Fragment>]
                  ]}
                />
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                  style={{ width: '50%' }}
                >
                  <Fade in={open}>
                    <div className={classes.paper} style={{ background: 'aliceblue' }}>
                      <GridContainer>
                        <GridItem xs={10} sm={12} md={12}>
                          <Card>
                            <CardHeader>
                              <h2 id="transition-modal-title">Project Details Edit</h2>
                            </CardHeader>
                            <CardBody>
                              <GridContainer>
                                <GridItem xs={10} sm={12} md={6}>
                                  <CustomInput
                                    labelText="Project Title"
                                    id="username"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                  />
                                </GridItem>
                                <GridItem xs={10} sm={12} md={6}>
                                  <CustomInput
                                    labelText="Email address"
                                    id="email-address"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                  />
                                </GridItem>

                              </GridContainer>
                              <GridContainer>
                                <GridItem xs={10} sm={12} md={6}>
                                  <CustomInput
                                    labelText="Contact No."
                                    id="contact-number"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                  />
                                </GridItem>
                                <GridItem xs={10} sm={12} md={6}>
                                  <CustomInput
                                    labelText="Google map link"
                                    id="map-link"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                  />
                                </GridItem>

                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={10} sm={12} md={4}>

                                  <label htmlFor="exampleFormControlFile1">Project images </label>
                                  <Typography>
                                    <Button variant="contained" component="label">Upload File<input type="file" style={{ display: "none" }} />
                                    </Button>
                                  </Typography>

                                </GridItem>
                                <GridItem xs={10} sm={12} md={4}>



                                  <label htmlFor="exampleFormControlFile1">Address map image </label>
                                  <Typography>
                                    <Button variant="contained" component="label">Upload File<input type="file" style={{ display: "none" }} />
                                    </Button>
                                  </Typography>

                                </GridItem>
                                <GridItem xs={10} sm={12} md={4}>
                                  <label htmlFor="exampleFormControlFile1">Upload brochure </label>
                                  <Typography>
                                    <Button variant="contained" component="label">Upload File<input type="file" style={{ display: "none" }} />
                                    </Button>
                                  </Typography>
                                </GridItem>



                              </GridContainer>

                              <GridContainer>
                                <GridItem xs={10} sm={12} md={12}>

                                  <CustomInput
                                    labelText="Enter full address"
                                    id="about-me"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                    inputProps={{
                                      multiline: true,
                                      rows: 5
                                    }}
                                  />
                                </GridItem>

                              </GridContainer>
                            </CardBody>
                            <CardFooter>
                              <Button color="primary">Add</Button>
                            </CardFooter>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  </Fade>
                </Modal>

              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={10} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Enquiry Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  Enquires received
              </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["ID", "Name", "email id", "subject"]}
                  tableData={[
                    ["1", "Wiley", "xyz@gmail.com", "visit for your project in mumbai"],
                    ["2", "St Minerv", "abc@ymail.com", "price list for your new project"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem xs={10} sm={12} md={6}>

            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Admin</h4>
                <p className={classes.cardCategoryWhite}>
                  Admin details
              </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["ID", "Admin name", "Password", "", ""]}
                  tableData={[
                    ["1", "Admin 1", "123@33",  <Fragment><ButtonGroup variant="text"><Tooltip title="Edit"><Button style={{ color: '#fc9006' }} size="small" onClick={handleOpenAdmin}><FontAwesomeIcon icon={faEdit} /></Button></Tooltip><Tooltip title="Delete"><Button style={{ color: '#fd2121cf' }} size=""><FontAwesomeIcon icon={faTrash} /></Button></Tooltip></ButtonGroup></Fragment>],
                    ["2", "Admin 2", "uru56",  <Fragment><ButtonGroup variant="text"><Tooltip title="Edit"><Button style={{ color: '#fc9006' }} size="small" onClick={handleOpenAdmin}><FontAwesomeIcon icon={faEdit} /></Button></Tooltip><Tooltip title="Delete"><Button style={{ color: '#fd2121cf' }} size=""><FontAwesomeIcon icon={faTrash} /></Button></Tooltip></ButtonGroup></Fragment>]
                  ]}
                />
                <Modal
                  aria-labelledby="transition-modal-title-admin"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={openAdmin}
                  onClose={handleCloseAdmin}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                  style={{ width: '50%' }}
                >
                  <Fade in={openAdmin}>
                    <div className={classes.paper} style={{ background: 'aliceblue' }}>
                      <GridContainer>





                        <GridItem xs={10} sm={12} md={12}>
                          <Card>
                            <CardHeader>
                              <h2 id="transition-modal-title-admin">Admin Details Edit</h2>
                            </CardHeader>
                            <CardBody>
                              <GridContainer>
                                <GridItem xs={10} sm={12} md={6}>
                                  <CustomInput
                                    labelText="Name"
                                    id="firstname"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                  />
                                </GridItem>
                                <GridItem xs={10} sm={12} md={6}>
                                  <CustomInput
                                    labelText="Password"
                                    id="lastname"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                  />
                                </GridItem>

                              </GridContainer>




                            </CardBody>
                            <CardFooter>
                              <Button color="primary">Add</Button>
                            </CardFooter>
                          </Card>
                        </GridItem>
                      </GridContainer>


                    </div>
                  </Fade>
                </Modal>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </Container>
    </div>
  );
}
