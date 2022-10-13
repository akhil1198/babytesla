import React from 'react'
import { Typography } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { Button } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Landing() {
    return (
        <div>
            <div className="header">
                <Typography variant="h2" mt={2} mb={2}>BabyTesla.in</Typography>
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
                            <Button variant="contained" style={{ margin: "2%", backgroundColor: "gray" }} >See Our Products</Button>
                        </div>
                    </Grid>
                    <Grid xs={4}>
                    </Grid>
                </Grid>
            </div>
            <div className="header w3-animate-right" style={{ margin: "5%" }}>
                <div className="heading1" >
                    <Typography variant="h2" style={{ margin: "2%" }}><b>About Us</b></Typography>
                    <Typography variant="h5" style={{ margin: "2%" }}>We are engineers who love to make robots in our free time. </Typography>
                    <FacebookIcon style={{ margin: "2%" }} />
                    <TwitterIcon style={{ margin: "2%" }} />
                    <LinkedInIcon style={{ margin: "2%" }} />
                </div>
            </div>
        </div>
    )
}