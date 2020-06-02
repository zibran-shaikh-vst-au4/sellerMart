const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Seller = require('../model/seller');
const nodemailer = require('nodemailer');
const key = require('../config/keys')


router.post('/register', (req, res) => {
    let {
        name,
        email,
        password,
        password_confirmation
    } = req.body;
    if (password !== password_confirmation) {
        return res.status(400).json({
            msg: "Password do not match."
        });
    }
    if (!email || !password) {
        return res.json({msg: 'Must include email and password'})
    }
    Seller.findOne({ email })
        .then(user => {
            if (user) {
                return res.status(400).json({
                    msg: "Email is already registered. Did you forgot your password."
                });
            }
        });
    // The data is valid and new we can register the user
    let newSeller = new Seller({
        name,
        password,
        email
    });
    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newSeller.password, salt, (err, hash) => {
            if (err) throw err;
            newSeller.password = hash;
            newSeller.save().then(user => {
                return res.status(201).json({

                    success: true,
                    msg: "User has been registered Successfully!"
                });
            });
        });
    });
});

//login route
router.post('/login', (req, res) => {
    let { email, password } = req.body;
    Seller.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    user: user,
                    msg: "Username is not found.",
                    success: false
                });
            }
            // If there is user we are now going to compare the password
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    // User's password is correct and we need to send the JSON Token for that user
                    const payload = {
                        _id: user._id,
                        username: user.username,
                        name: user.name,
                        email: user.email
                    }
                    jwt.sign(payload, key, {
                        expiresIn: 604800
                    }, (err, token) => {
                        res.status(200).json({
                            success: true,
                            token: `Bearer ${token}`,
                            user: user,
                            msg: "You are now logged in!"
                        });
                    })
                } else {
                    return res.status(404).json({
                        msg: "Incorrect password.",
                        success: false
                    });
                }
            })
        });
});

//profile route
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});
router.post('/reset', (req, res) => {
    const { email } = req.body;
    Seller.findOne({ email }, function (error, userData) {
        var transporter = nodemailer.createTransport({

            service: "gmail",
            port: 2525,
            secure: false,
            auth: {
                user: "appseller2020@gmail.com",
                pass: "$eller123"
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        var currentDateTime = new Date();
        var mailOptions = {
            from: 'SellerMart sellermart@gmail.com',
            to: req.body.email,
            subject: 'Password Reset',
            // text: 'That was easy!',
            html: "<h1>sellerMart ! </h1><p>\
            <h3>Hello, "+ userData.name + "</h3>\
            If You are requested to reset your password then click on below link<br/>\
            <a href='http://localhost:3000/change-password/"+ currentDateTime + "+++" + userData.email + "'>Click On This Link</a>\
            </p>"
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("error", error);
            } else {
                console.log('Email sent: ' + info.response);
                Seller.updateOne({ email: userData.email }, {
                    token: currentDateTime,

                }, { multi: true }, (err, affected, resp) => {
                    return res.status(200).json({
                        success: false,
                        msg: info.response,
                        userlist: resp
                    });
                })
            }
        });
    })
});


router.get('/userlist', (req, res) => {
    Seller.find((err, User) => {
        if (err) return console.error(err);
        return res.status(200).json({
            success: true,
            msg: "Listed",
            userlist: User
        });
    });
})
router.put('/update', (req, res) => {
    const { _id, currentPassword, password, name, email } = req.body
    Seller.findById(_id, (err, userData) => {
        bcrypt.compare(currentPassword, userData.password).then(isMatch => {
            if (isMatch) {
                if (password) {
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(password, salt, (err, hash) => {
                            if (err) throw err;
                            hasedPassword = hash;
                            let condition = { _id };
                            let dataForUpdate = { name, email, password: hasedPassword, updatedDate: new Date() };
                            Seller.findOneAndUpdate(condition, dataForUpdate, { new: true }, function (err, updatedUser) {
                                if (err) {
                                    if (err.name === 'MongoError' && err.code === 11000) {
                                        res.status(409).send(new MyError('Mongo Db Error ', [err.message]));
                                    }

                                    res.status(500).send(new MyError('Unknown Server Error', ['Unknown server error when updating User']));
                                }
                                if (!updatedUser) {
                                    return res.status(404).json({
                                        msg: "User Not Found.",
                                        success: false
                                    });
                                }
                                return res.status(200).json({
                                    success: true,
                                    msg: "User Successfully Updated",
                                    updatedData: updatedUser
                                });
                            });
                        });
                    });
                }
                else {
                    let condition = { _id };
                    let dataForUpdate = { name, email, updatedDate: new Date() };
                    Seller.findOneAndUpdate(condition, dataForUpdate, { new: true }, (err, updatedUser) => {
                        if (err) {
                            if (err.name === 'MongoError' && err.code === 11000) {
                                return res.status(409).send(new MyError('Mongo Db Error ', [err.message]));
                            }

                            return res.status(500).send(new MyError('Unknown Server Error', ['Unknown server error when updating User']));
                        }
                        if (!updatedUser) {
                            return res.status(404).json({
                                msg: "User Not Found.",
                                success: false
                            });
                        }
                        return res.status(200).json({
                            success: true,
                            msg: "User Successfully Updated",
                            updatedData: updatedUser
                        });
                    });
                }
            } else {
                return res.status(401).json({
                    msg: "Incorrect password.",
                    success: false
                });
            }
        })
    });
})
router.post('/updatePassword', (req, res) => {
    const { email, linkDate, password, confirm_password } = req.body;
    Seller.findOne({ email }, (errorFind, userData) => {
        if (userData.token == linkDate && password == confirm_password) {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) throw err;
                    let newPassword = hash;
                    let condition = { _id: userData._id };
                    let dataForUpdate = { password: newPassword, updatedDate: new Date() };
                    Seller.findOneAndUpdate(condition, dataForUpdate, { new: true }, (error, updatedUser) => {
                        if (error) {
                            if (err.name === 'MongoError' && error.code === 11000) {
                                return res.status(500).json({ msg: 'Mongo Db Error', error: error.message });
                            } else {
                                return res.status(500).json({ msg: 'Unknown Server Error', error: 'Unknown server error when updating User' });
                            }
                        }
                        else {
                            if (!updatedUser) {
                                return res.status(404).json({
                                    msg: "User Not Found.",
                                    success: false
                                });
                            } else {
                                return res.status(200).json({
                                    success: true,
                                    msg: "Your password was Successfully Updated",
                                    updatedData: updatedUser
                                });
                            }
                        }
                    });
                });
            });
        }
        if (errorFind) {
            return res.status(401).json({
                msg: "Something Went Wrong",
                success: false
            });
        }
    }
    );

})
module.exports = router;