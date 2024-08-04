    
import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { Chart, LinearScale, CategoryScale, PointElement, LineElement, Legend } from 'chart.js';


const { Title } = Typography;

Chart.register(LinearScale, CategoryScale, PointElement, LineElement, Legend );

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
   const chartRef = useRef(null);
   const [chartData, setChartData] = useState(null);

   useEffect(() => {
    if (coinHistory && coinHistory.data && coinHistory.data.history) {
        const coinPrice = [];
        const coinTimestamp = [];

        for (let i = 0; i < coinHistory.data.history.length; i += 1) {
            coinPrice.push(coinHistory.data.history[i].price);
        }

        for (let i = 0; i < coinHistory.data.history.length; i += 1) {
            coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
        }

        setChartData({
            labels: coinTimestamp,
            datasets: [
                {
                    label: 'Price In USD',
                    data: coinPrice,
                    fill: false,
                    backgroundColor: '#0071bd',
                    borderColor: '#0071bd',
                },
            ],
        });
    }
}, [coinHistory]); // Only re-render when coinHistory changes
    
      const options = {
        plugins: {
        legend: {
          display: true,
                    },
                  },
        scales: {
            x:{},
            y: {
                beginAtZero: true,
            },
        },
      };
      

  return (
    <>
       <Row className="chart-header"> 
            <Title level={2} className="chart-title">{coinName} Price Chart</Title>
            
            <Col className="price-container">
                <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
                <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
            </Col>
       </Row>
       {chartData && <Line ref={chartRef} data={chartData} options={options} />}
    </>
  );
}

export default LineChart;
