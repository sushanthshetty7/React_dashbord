import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import './BarChat.scss'
type Props = {
    color:string;
    title:string;
    dataKey:string;
    chartData:object[];
}

function BarChat(props:Props) {
  return (
    <div className='BarchartBox'>
        <h1>{props.title}</h1>
        <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
        <BarChart data={props.chartData}>
            <Tooltip
            contentStyle={{background:"#2a3447",borderRadius:"5px"}}
            labelStyle={{display:'none'}}
            cursor={{fill:"none"}}
            />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChat