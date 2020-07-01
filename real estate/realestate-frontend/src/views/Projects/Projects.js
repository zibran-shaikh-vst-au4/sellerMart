import React, { Fragment } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
import Sidebar from "../../components/Sidebar/Sidebar"
import {Button as CustomButtons} from "@material-ui/core";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { Typography } from "@material-ui/core";


import Icon from "@material-ui/core/Icon";
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Table from "../../components/Table/Table.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import { IconButton, createSvgIcon, ButtonGroup } from "@material-ui/core";

//import avatar from "assets/img/faces/marc.jpg";
/* 
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  
  
};


const useStyles = makeStyles(styles); */
const useStyles = makeStyles(theme => ({
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


export default function Projects() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [showing, setShowing] = React.useState(false)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleForm = ()=>{
    setShowing(!showing)
  }
  const handleSubmit =()=>{
    setShowing(false)
  }

  return (
    <Fragment>
      <Sidebar />

      <GridContainer justify={'center'}>
         <GridItem xs={12} sm={12} md={8}>
         <CustomButtons variant="contained" 
         style={{background: "linear-gradient(60deg, #ab47bc, #8e24aa)", color:"white"}}  
         onClick={handleForm}>New Project<FontAwesomeIcon className='ml-2 mb-2' icon={faPlus}/></CustomButtons>
        {showing?<Card>
          <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add Projects</h4>
              <p className={classes.cardCategoryWhite}>Add details of project</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Project Title"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
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
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Contact No."
                    id="contact-number"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
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
                <GridItem xs={12} sm={12} md={4}>

                  <label htmlFor="exampleFormControlFile1">Project images </label>
                  <Typography>
                    <Button variant="contained" component="label">Upload File<input type="file" style={{ display: "none" }} />
                    </Button>
                  </Typography>

                </GridItem>
                <GridItem xs={12} sm={12} md={4}>



                  <label htmlFor="exampleFormControlFile1">Address map image </label>
                  <Typography>
                    <Button variant="contained" component="label">Upload File<input type="file" style={{ display: "none" }} />
                    </Button>
                  </Typography>

                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <label htmlFor="exampleFormControlFile1">Upload brochure </label>
                  <Typography>
                    <Button variant="contained" component="label">Upload File<input type="file" style={{ display: "none" }} />
                    </Button>
                  </Typography>
                </GridItem>



              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>

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
              <Button color="primary" onClick={handleSubmit}>Add</Button>
            </CardFooter>
          </Card> : null}
        </GridItem>
      </GridContainer>


      {/* table */}
      <GridContainer justify={'center'}>
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
                  ["1", "Prestige", "898989898", "xyz@gmail.com", <Fragment><ButtonGroup variant="text"><Tooltip title="Edit"><Button style={{ color: '#fc9006' }} size="small" onClick={handleOpen}><FontAwesomeIcon icon={faEdit} /></Button></Tooltip><Tooltip title="Delete"><Button style={{ color: '#fd2121cf' }} size=""><FontAwesomeIcon icon={faTrash} /></Button></Tooltip></ButtonGroup></Fragment>],
                  ["2", "Minerva Hooper", "676767676", "abc@ymail.com", <Fragment><ButtonGroup variant="text"><Tooltip title="Edit"><Button style={{ color: '#fc9006' }} size="small" onClick={handleOpen}><FontAwesomeIcon icon={faEdit} /></Button></Tooltip><Tooltip title="Delete"><Button style={{ color: '#fd2121cf' }} size=""><FontAwesomeIcon icon={faTrash} /></Button></Tooltip></ButtonGroup></Fragment>]
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
                style={{ width: '100%' }}
              >
                <Fade in={open}>
                  <div className={classes.paper} >
                    <GridContainer>
                      <GridItem xs={10} sm={12} md={12}>
                       
                            <GridContainer>
                            <h4>Edit Project</h4>
                              <GridItem xs={10} sm={12} md={12}>
                                <CustomInput
                                  labelText="Project Title"
                                  id="username"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                />
                              </GridItem>
                              <GridItem xs={10} sm={12} md={12}>
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
                              <GridItem xs={10} sm={12} md={12}>
                                <CustomInput
                                  labelText="Contact No."
                                  id="contact-number"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                />
                              </GridItem>
                              <GridItem xs={10} sm={12} md={12}>
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
                              <GridItem xs={10} sm={12} md={6}>

                                <label htmlFor="exampleFormControlFile1">Project images </label>
                                <Typography>
                                  <Button variant="contained" component="label">Upload File<input type="file" style={{ display: "none" }} />
                                  </Button>
                                </Typography>

                              </GridItem>
                              <GridItem xs={10} sm={12} md={6}>



                                <label htmlFor="exampleFormControlFile1">Address map image </label>
                                <Typography>
                                  <Button variant="contained" component="label">Upload File<input type="file" style={{ display: "none" }} />
                                  </Button>
                                </Typography>

                              </GridItem>
                              <GridItem xs={10} sm={12} md={6}>
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
                         
                            <Button color="primary">Add</Button>
                          
                        
                      </GridItem>
                    </GridContainer>
                  </div>
                </Fade>
              </Modal>

            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

    </Fragment>
  );
}
