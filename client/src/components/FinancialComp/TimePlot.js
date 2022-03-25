import React from 'react';
import {VictoryChart, VictoryArea} from 'victory'


const TimePlot = () => {
    const data = [
        { x: new Date(2021, 5, 1), y: 8 },
        { x: new Date(2021, 5, 2), y: 10 },
        { x: new Date(2021, 5, 3), y: 7 },
        { x: new Date(2021, 5, 4), y: 4 },
        { x: new Date(2021, 5, 7), y: 6 },
        { x: new Date(2021, 6, 8), y: 12 },
        { x: new Date(2021, 5, 9), y: 7 },
        { x: new Date(2021, 5, 10), y: 9 },
        { x: new Date(2021, 5, 8), y: 13 }
      ];

    //   const discontinuousScale = scaleDiscontinuous(
    //     d3Scale.scaleTime()
    //   ).discontinuityProvider(discontinuitySkipWeekends());

  return (
    <VictoryChart 
      width={400} 
      height={400} 
    //   scale={{ x: discontinuousScale }}
    >
      <VictoryArea 
        data={data} 
        style={{data: { fill: 'lightblue', stroke: 'teal' }}} 
      />
    </VictoryChart>
  )
}

export default TimePlot