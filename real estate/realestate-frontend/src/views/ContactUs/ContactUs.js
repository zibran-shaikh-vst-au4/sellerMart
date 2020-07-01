import React from "react";
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
import { Button as CustomButtons } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlus } from '@fortawesome/free-solid-svg-icons'


//import avatar from "assets/img/faces/marc.jpg";

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
    }
};

const useStyles = makeStyles(styles);

export default function ContactUs() {
    const classes = useStyles();
    const [showing, setShowing] = React.useState(false)

    
    const handleForm = () => {
        setShowing(!showing)
    }
    const handleSubmit = () => {
        setShowing(false)
    }

    return (
        <div>
            <Sidebar/>
            <GridContainer justify={'center'}>
                <GridItem xs={12} sm={12} md={6}>
                <CustomButtons variant="contained"
                        style={{ background: "linear-gradient(60deg, #ab47bc, #8e24aa)", color: "white" }}
                        onClick={handleForm}>Add Contact<FontAwesomeIcon className='ml-2 mb-2' icon={faPlus} /></CustomButtons>
                    {showing?
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Conatct Us</h4>
                            <p className={classes.cardCategoryWhite}>Add details for Contact Us</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Contact No."
                                        id="firstname"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Email id"
                                        id="firstname"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>

                                <GridItem xs={12} sm={12} md={12}>

                                    <CustomInput
                                        labelText="Enter address"
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
                    </Card>: null}
                </GridItem>
            </GridContainer>
        </div >
    );
}