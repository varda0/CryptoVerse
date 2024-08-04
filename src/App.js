import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';


import { Navbar, Crytocurrencies, CryptoDetails, Homepage, Exchanges } from './components'
import '/Users/vardayinichougule/Desktop/cryptoapp/src/App.css';

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
             <Navbar />
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    <Routes>

                    <Route path="/" element={<Homepage />} />

                    <Route path="/exchanges" element={<Exchanges />} />

                    <Route path="/cryptocurrencies" element={<Crytocurrencies />} />

                    <Route path="/crypto/:coinId" element={<CryptoDetails />} />

                    </Routes>

                </div>
            </Layout>

        
        <div className="footer">
            <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                Cryptoverse <br />
                All rights reserved
            </Typography.Title>
            <Space>
                 <Link to="/">Home</Link>
                 <Link to="/exchanges">Exchanges</Link>
            </Space>
            </div>

        </div>
      
    </div>
  )
}

export default App
