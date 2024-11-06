import { Container, CssBaseline } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BannerAd from './components/BannerAD'

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth='lg' sx= {{backgroundColor: '#f7f7f7', minHeight: '100vh', padding: '16px', borderRadius: '8px'}}>
        <Box display= "flex"alingItems = "center" justifyContent="space-between"p={2} sx={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: 1}}>
          <Navbar />
        </Box>

        <BannerAd />
        <Box mt={4}>
          <Routes>
            <Route path="/" element={<inicial />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  )
}

export default App