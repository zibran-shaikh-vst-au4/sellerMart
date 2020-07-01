import React, { Fragment } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
import Sidebar from "../../components/Sidebar/Sidebar"

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
import { Route } from 'react-router-dom';
import { Button as CustomButtons } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Table from "../../components/Table/Table.js";

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IconButton, createSvgIcon, ButtonGroup } from "@material-ui/core";


//import avatar from "assets/img/faces/marc.jpg";

/* const styles = {
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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
};


const useStyles = makeStyles(styles);
 */
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

export default function Admin() {
    const classes = useStyles();
    const [showing, setShowing] = React.useState(false)

    const [openAdmin, setOpenAdmin] = React.useState(false);



    const handleOpenAdmin = () => {
        setOpenAdmin(true);
    };
    const handleCloseAdmin = () => {
        setOpenAdmin(false);
    };



    const handleForm = () => {
        setShowing(!showing)
    }
    const handleSubmit = () => {
        setShowing(false)
    }

    return (
        <Fragment>
            <Sidebar />
            <GridContainer justify={"center"}>
                <GridItem xs={10} sm={12} md={6} >
                    <CustomButtons variant="contained"
                        style={{ background: "linear-gradient(60deg, #ab47bc, #8e24aa)", color: "white" }}
                        onClick={handleForm}>Add admin<FontAwesomeIcon className='ml-2 mb-2' icon={faPlus} /></CustomButtons>
                    {showing ?
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Add Admin</h4>
                                <p className={classes.cardCategoryWhite}>Add details of admin</p>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Name"
                                            id="firstname"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
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
                                <Button color="primary" onClick={handleSubmit}>Add</Button>
                            </CardFooter>
                        </Card> : null}
                </GridItem>

            </GridContainer>

            <GridContainer justify={'center'}>
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
                                    ["1", "Admin 1", "123@33", <Fragment><ButtonGroup variant="text"><Tooltip title="Edit"><Button style={{ color: '#fc9006' }} size="small" onClick={handleOpenAdmin}><FontAwesomeIcon icon={faEdit} /></Button></Tooltip><Tooltip title="Delete"><Button style={{ color: '#fd2121cf' }} size=""><FontAwesomeIcon icon={faTrash} /></Button></Tooltip></ButtonGroup></Fragment>],
                                    ["2", "Admin 2", "uru56", <Fragment><ButtonGroup variant="text"><Tooltip title="Edit"><Button style={{ color: '#fc9006' }} size="small" onClick={handleOpenAdmin}><FontAwesomeIcon icon={faEdit} /></Button></Tooltip><Tooltip title="Delete"><Button style={{ color: '#fd2121cf' }} size=""><FontAwesomeIcon icon={faTrash} /></Button></Tooltip></ButtonGroup></Fragment>]
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
                                style={{ width: '100%' }}
                            >
                                <Fade in={openAdmin}>
                                    <div className={classes.paper} >
                                        <GridContainer>
                                            <GridItem xs={10} sm={12} md={12}>

                                                <GridContainer>
                                                    <h4>Edit Admin</h4>
                                                    <GridItem xs={10} sm={12} md={12}>
                                                        <CustomInput
                                                            labelText="Name"
                                                            id="firstname"
                                                            formControlProps={{
                                                                fullWidth: true
                                                            }}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={10} sm={12} md={12}>
                                                        <CustomInput
                                                            labelText="Password"
                                                            id="lastname"
                                                            formControlProps={{
                                                                fullWidth: true
                                                            }}
                                                        />
                                                    </GridItem>

                                                </GridContainer>


                                                <Button color="primary" onClick={handleCloseAdmin}>Add</Button>

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
