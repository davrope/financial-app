import React from 'react';
import {VictoryChart, VictoryArea, VictoryLine} from 'victory'
import { useSelector } from 'react-redux';


const TimePlot = (props) => {
  const transactions = useSelector((state)=>state.transactions)
  const month = props.selectedDate.getMonth()

  const transactions_bydate = transactions.filter(obj=>new Date(obj.dateCreated).getMonth() == month)

  transactions_bydate.sort((a,b)=>new Date(a.dateCreated).getTime()- new Date(b.dateCreated).getTime());

  function currentBalance(){
    const prev_transactions = transactions.filter(obj=>new Date(obj.dateCreated).getMonth()<month)
    const current_amount = prev_transactions.map(function(obj){
      return obj.amount
    })
  
    const initial_amount = 0;
    const sumWithInitial = current_amount.reduce(
      (previousValue, currentValue)=>previousValue+currentValue,
      initial_amount
    )

    return sumWithInitial
  }
  
  let balance = currentBalance()
  const data = transactions_bydate.map(function(obj){
    let rObj = {};
    balance = obj.amount+balance;
    


    rObj["x"] = new Date(obj.dateCreated).toLocaleDateString();
    rObj["y"] = balance;

    return rObj
  })
 


  return (
    <VictoryChart 
      width={1080} 
      height={720} 
      padding= {{top:40, bottom:60, left: 80, right:80}}
    //   scale={{ x: discontinuousScale }}
    >
      {/* <VictoryArea 
        data={data} 
        style={{data: { fill: 'lightblue', stroke: 'teal' }}} 
      /> */}

      <VictoryLine
        data= {data}
        // style = {{data: {fill}}}
      />
    </VictoryChart>
  )
}

export default TimePlot