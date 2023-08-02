import ChartBoc from '../../components/chartbox/ChartBoc'
import TopBox from '../../components/topBox/TopBox'
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import './home.scss'

const Home=()=> {
  return (
    <div className="home">
      <div className="box box1"><TopBox/></div>
      <div className="box box2"><ChartBoc {...chartBoxUser}/></div>
      <div className="box box3"><ChartBoc {...chartBoxProduct}/></div>
      <div className="box box4">4</div>
      <div className="box box5"><ChartBoc {...chartBoxConversion}/></div>
      <div className="box box6"><ChartBoc {...chartBoxRevenue}/></div>
      <div className="box box7">7</div>
      <div className="box box8">8</div>
      <div className="box box9">9</div>
    </div>
  )
}

export default Home