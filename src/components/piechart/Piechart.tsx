import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./Piechart.scss";

function Piechart() {
  const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];

  return (
    <div className="Piechart">
      <h1 className="title">Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer height={300} width="99%">
          <PieChart>
            <Tooltip
            contentStyle={{background:"white"}}
            />
            <Pie
              data={data}
              innerRadius={"78%"}
              outerRadius={"98%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Pie
              data={data}
              cx={420}
              cy={200}
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item)=>(
            <div className="option" key={item.name}>
                <div className="title">
                    <div className="dot" style={{backgroundColor:item.color}}></div>
                    <span className="name">{item.name}</span>
                </div>
                <span className="value">{item.value}</span>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Piechart;
