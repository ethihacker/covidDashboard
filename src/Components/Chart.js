import React,{PureComponent} from 'react';
import {useState,useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = (props) =>{
    const [chartData,setChartData] = useState([]);
    const [chartApi, setChartApi] = useState("")
    const [filter, setFilter] = useState("")
  useEffect(() => { 
     ///take set state out of the use effect!!!
    const fetchCovidData = async () => {
    const res = await fetch("https://corona.lmao.ninja/v2/historical/"+ props.countryFilter.toLowerCase()+ "?lastdays=365");
    const data = await res.json(); 
        for (const [key, value] of Object.entries(data.timeline.cases)) {
            setChartData(previousData=>{
                return [...previousData,{date:key,value:value}]
                
            })
          }
     }
     setChartData([]);
  fetchCovidData() 
}, [props.countryFilter,chartApi]);
console.log(`chart data${JSON.stringify(chartData)}`)

   return(
    <>
    <ResponsiveContainer width="100%" height={300}>
        <AreaChart  data={chartData} >
            <Area dataKey="value" stroke="#8884d8" fill="#f3172d"type="monotoneX" />
            <XAxis dataKey="date"/>
            <YAxis dataKey="value"/>
            <Tooltip />
        </AreaChart>
  </ResponsiveContainer>

  </>
        );
};
export default Chart;

