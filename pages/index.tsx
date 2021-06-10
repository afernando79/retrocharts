import Head from 'next/head'
import styles from '../styles/Home.module.css'
import RadarChart from 'react-svg-radar-chart';
import InputForm from '../components/InputForm';

import 'react-svg-radar-chart/build/css/index.css';
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

const data = [
  {
    data: {
      people: 0.5,
      process: 0.5,
      technology: 0.9,
      other: 0,
    },
    meta: { color: 'blue' }
  },
  {
    data: {
      people: 0.9,
      process: 0.3,
      technology: 0.3,
      other: 0.25,
    },
    meta: { color: 'green' }
  },
];

export interface Captions {
  process: string;
  people: string;
  technology: string;
  other: string;
}

const captions = {
  process: 'Process',
  people: 'People',
  technology: 'Technology',
  other: 'Other',
};

export interface RadarValues {
  process?: Number;
  people?: Number;
  technology?: Number;
  other?: Number;
}


export default function Home() {

  const [radarValues, setRadarValues] = useState({
    process: 0,
    people: 0,
    technology: 0,
    other: 0,
  });


  return (
    <div className={styles.container}>
      <Head>
        <title>RetroCharts</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          RetroChart
        </h1>
        <Row
          style={{
            display: "flex",
          }}
        >
          <InputForm
            categories={captions}
            setRadarValues={setRadarValues}
          />
          <RadarChart
            captions={captions}
            data={
              [{
                data: radarValues,
                meta: {
                  color: "green",
                }
              }]
            }
            size={450}
          />
        </Row>
      </main>
    </div>
  )
}
