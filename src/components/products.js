import { Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import logo from '../media/logo.jpeg'

export default function Products() {
    return (
        <div>
            <div className="header" style={{ display: "inline-flex", marginTop: '10px' }}>
                <img src={logo} alt="logo" style={{ height: '80px', margin: '8px' }} /><Typography variant="h2" mt={2} mb={2}><b>Baby</b>Tesla.in</Typography>
            </div>

            <div className="header w3-animate-bottom" style={{ margin: "5%" }}>
                <div className="header">
                    <Typography variant="h4">Our Products</Typography>
                </div>
                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                    <Grid xs={4}>
                        <Card variant="outlined" style={{ height: "100%", margin: "2%", borderRadius: "25px", backgroundColor: "gray" }}>
                            <div style={{ margin: '30%' }}>
                                3D Model
                            </div>
                        </Card>
                    </Grid>
                    <Grid xs={8}>
                        <Card variant="outlined" style={{ height: "100%", margin: "1%", borderRadius: "25px", backgroundColor: "lightgray" }}>
                            <div className="heading1" style={{ textAlign: "left" }}>
                                <Typography variant="h5" align="left" style={{ margin: "2%" }}><b>Tinku: The walking robot</b></Typography>
                                <Typography variant="h5" align="left" style={{ margin: "2%" }}>
                                    With this product, you will make walking robot which will walk.
                                    We will provide few extra items to leave scope for innovation.
                                    Send us your customised robot we will put it on our social media handles</Typography>
                                <Button variant='contained' style={{ borderRadius: '25px', margin: '6px', backgroundColor: "lightgrey" }}>Buy Now</Button>
                                <Button variant='contained' style={{ borderRadius: '25px', margin: '6px', backgroundColor: "lightgrey" }}>Youtube Link</Button>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                    <Grid xs={4}>
                        <Card variant="outlined" style={{ height: "100%", margin: "2%", borderRadius: "25px", backgroundColor: "gray" }}>
                            <div style={{ margin: '30%' }}>
                                3D Model
                            </div>
                        </Card>
                    </Grid>
                    <Grid xs={8}>
                        <Card variant="outlined" style={{ height: "100%", margin: "1%", borderRadius: "25px", backgroundColor: "lightgray" }}>
                            <div className="heading1" style={{ textAlign: "left" }}>
                                <Typography variant="h5" align="left" style={{ margin: "2%" }}><b>Tinku: The walking robot</b></Typography>
                                <Typography variant="h5" align="left" style={{ margin: "2%" }}>
                                    With this product, you will make walking robot which will walk.
                                    We will provide few extra items to leave scope for innovation.
                                    Send us your customised robot we will put it on our social media handles</Typography>
                                <Button variant='contained' style={{ borderRadius: '25px', margin: '6px', backgroundColor: "lightgrey" }}>Buy Now</Button>
                                <Button variant='contained' style={{ borderRadius: '25px', margin: '6px', backgroundColor: "lightgrey" }}>Youtube Link</Button>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                    <Grid xs={4}>
                        <Card variant="outlined" style={{ height: "100%", margin: "2%", borderRadius: "25px", backgroundColor: "gray" }}>
                            <div style={{ margin: '30%' }}>
                                3D Model
                            </div>
                        </Card>
                    </Grid>
                    <Grid xs={8}>
                        <Card variant="outlined" style={{ height: "100%", margin: "1%", borderRadius: "25px", backgroundColor: "lightgray" }}>
                            <div className="heading1" style={{ textAlign: "left" }}>
                                <Typography variant="h5" align="left" style={{ margin: "2%" }}><b>Tinku: The walking robot</b></Typography>
                                <Typography variant="h5" align="left" style={{ margin: "2%" }}>
                                    With this product, you will make walking robot which will walk.
                                    We will provide few extra items to leave scope for innovation.
                                    Send us your customised robot we will put it on our social media handles</Typography>
                                <Button variant='contained' style={{ borderRadius: '25px', margin: '6px', backgroundColor: "lightgrey" }}>Buy Now</Button>
                                <Button variant='contained' style={{ borderRadius: '25px', margin: '6px', backgroundColor: "lightgrey" }}>Youtube Link</Button>
                            </div>
                        </Card>
                    </Grid>
                </Grid>

                <Button variant='contained' style={{ borderRadius: '25px', margin: '6px', marginTop: '30px', backgroundColor: 'gray' }} onClick={(e) => window.location = "/"}>Back</Button>

            </div>
        </div >
    )
}