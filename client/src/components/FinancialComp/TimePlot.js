import React from 'react';
import {VictoryChart, VictoryArea} from 'victory'
import { useSelector } from 'react-redux';


const TimePlot = (props) => {
  const transactions = useSelector((state)=>state.transactions)
  const month = props.selectedDate.getMonth()

  const transactions_bydate = transactions.filter(obj=>new Date(obj.dateCreated).getMonth() == month)

  transactions_bydate.sort((a,b)=>new Date(a.dateCreated).getTime()- new Date(b.dateCreated).getTime());
  
  let balance = 0
  const data = transactions_bydate.map(function(obj){
    let rObj = {};
    balance = obj.amount+balance;
    


    rObj["x"] = new Date(obj.dateCreated).toLocaleDateString();
    rObj["y"] = balance;

    return rObj
  })
 


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