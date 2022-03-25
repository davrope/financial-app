import React from 'react';
import {VictoryChart, VictoryArea} from 'victory'
import { useSelector } from 'react-redux';


const TimePlot = () => {
  const transactions = useSelector((state)=>state.transactions)

  transactions.sort((a,b)=>new Date(a.dateCreated).getTime()- new Date(b.dateCreated).getTime());
  
  let balance = 0
  const data = transactions.map(function(obj){
    let rObj = {};
    balance = obj.amount+balance;
    


    rObj["x"] = new Date(obj.dateCreated).toLocaleDateString();
    rObj["y"] = balance;
    
    console.log(balance)
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