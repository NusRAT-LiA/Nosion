
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
    { name: "AgriChain", VerifiedBy: 1200 },
    { name: "Data-Module", VerifiedBy: 2100 },
    { name: "ChainLink", VerifiedBy: 800 },
    { name: "IpFs", VerifiedBy: 1600 },
    { name: "Mining", VerifiedBy: 900 },
    { name: "OnlineScale", VerifiedBy: 1700 },
  ];

const chart =(title,aspect)=>{
 
    return (
        <div className="chart">
            <div className="title">Progress</div>
            <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="VerifiedBy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="VerifiedBy"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#VerifiedBy)"
          />
        </AreaChart>
      </ResponsiveContainer>
        </div>
    );

};

export default chart;