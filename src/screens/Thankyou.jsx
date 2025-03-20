import { Box, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import QuickLinks from './QuickLinks'

const Thankyou = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", height: "100vh" }}>
                <Typography variant="h2" sx={{
                    typography: { xs: 'h4', sm: 'h2' }, fontWeight: "700"
                }} >
                    Thank you for contacting us, we will be in touch shortly!
                </Typography>
            </Box>
            <QuickLinks />
        </>
    )
}

export default Thankyou