import React from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';
import gears from '../media/gears.jpeg'
import logo from '../media/logo.jpeg'

import './index.css'

export default function Landing() {
    return (
        <div>
            <div className="header" style={{ display: "inline-flex", marginTop: '10px' }}>
                <img src={logo} alt="logo" style={{ height: '80px', margin: '8px' }} /><Typography variant="h2" mt={2} mb={2}><b>Baby</b>Tesla.in</Typography>
            </div>
            <div className="header w3-animate-bottom" style={{ margin: "5%" }}>
                <Grid container spacing={2}>
                    <Grid xs={8}>
                        <div className="heading1" style={{ textAlign: "left" }}>
                            <Typography variant="h2" align="left" style={{ margin: "2%" }}><b>Inspire future Tesla</b></Typography>
                            <Typography variant="h5" align="left" style={{ margin: "2%" }}>Someone gifted Robert Curl a chemistry set when he was nine years old. He
                                was so fascinated by it that he developed interest in chemistry and went on
                                to win noble price, most prestigious award in scientific community. We want
                                to be that someone for your child.</Typography>
                            <Button variant="contained" style={{ margin: "2%", backgroundColor: "black", color: "yellow" }} onClick={(e) => window.location = "/products"}>See Our Products</Button>
                        </div>
                    </Grid>
                    <Grid xs={4}>
                        <img className='gears' src={gears} alt="gear" style={{ height: '100px' }} />
                        <img className='gears2' src={gears} alt="gear" style={{ height: '100px', marginTop: '100px' }} />
                        <img className='gears' src={gears} alt="gear" style={{ height: '100px' }} />
                    </Grid>
                </Grid>
            </div>

            <div className="header w3-animate-right">
                <div className="heading1" >
                    <Typography variant="h3" style={{ margin: "2%" }}><b>About Us</b></Typography>
                    <Typography variant="h5" style={{ margin: "2%" }}>We are engineers who love to make robots in our free time. </Typography>
                    <FacebookIcon style={{ margin: "2%" }} />
                    <TwitterIcon style={{ margin: "2%" }} />
                    <LinkedInIcon style={{ margin: "2%" }} />
                </div>
            </div>

            <div className='profiles'>
                <Grid container spacing={2} style={{ margin: '3%' }}>
                    <Grid xs={2} className="w3-animate-left"></Grid>
                    <Grid xs={4} className="w3-animate-left">
                        <Card style={{ borderRadius: "2%" }}>
                            <CardContent>
                                <div className="heading1">
                                    <center>
                                        <Avatar
                                            // src="/static/images/avatar/1.jpg"
                                            sx={{ width: 125, height: 125 }}
                                        />
                                    </center>
                                    <br></br>
                                    <Typography variant="h5">Ninad Kale</Typography><LinkedInIcon /><br />
                                    <span><i>IIT Bombay 20' | MS Robotics, SUNY Buffalo</i></span><br />
                                    <Typography style={{ margin: "2%", fontSize: '15px' }}>During my time in IT Bombay, I led team of 50+ member to make Autonomus Underwater Vehicle for Indian Navy. Once, for a national underwater vehicle competition, I was working for 48hrs straight. I was so much engaged in building robot i didnt even realised time but when that robot won a competition, I was most happy, satisfied and content. The process of making a robot is really elevating for our curious mind and I want to give such exposure to every child in india. This is startup is my honest attempt towards it. For queries contact us here: support@babytesla.com</Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4} className="w3-animate-right">
                        <Card style={{ borderRadius: "2%" }}>
                            <CardContent>
                                <div className="heading1">
                                    <center>
                                        <Avatar
                                            // src="/static/images/avatar/1.jpg"
                                            sx={{ width: 125, height: 125 }}
                                        />
                                    </center>
                                    <br></br>
                                    <Typography variant="h5">Anshul Maurya</Typography><LinkedInIcon /><br />
                                    <span><i>IIT Bombay 20' | MS Robotics, SUNY Buffalo</i></span><br />
                                    <Typography style={{ margin: "2%", fontSize: '15px' }}>During my time in IT Bombay, I led team of 50+ member to make Autonomus Underwater Vehicle for Indian Navy. Once, for a national underwater vehicle competition, I was working for 48hrs straight. I was so much engaged in building robot i didnt even realised time but when that robot won a competition, I was most happy, satisfied and content. The process of making a robot is really elevating for our curious mind and I want to give such exposure to every child in india. This is startup is my honest attempt towards it. For queries contact us here: support@babytesla.com</Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={2} className="w3-animate-left"></Grid>
                </Grid>
            </div>
        </div >
    )
}