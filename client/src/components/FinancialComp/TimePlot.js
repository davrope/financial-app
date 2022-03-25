import React from 'react';
import {VictoryChart, VictoryArea} from 'victory'
import { useSelector } from 'react-redux';


const TimePlot = () => {
  const transactions = useSelector((state)=>state.transactions)

  const data = transactions.map(function(obj){
    let rObj = {};
    rObj["x"] = new Date(obj.dateCreated).toLocaleDateString();
    rObj["y"] = obj.amount;
    return rObj
  })
 

  console.log(data)


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