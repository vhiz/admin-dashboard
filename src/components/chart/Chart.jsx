import "./chart.scss";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { name: "January", Total: 2000 },
  { name: "Febuary", Total: 3000 },
  { name: "March", Total: 1200 },
  { name: "April", Total: 2500 },
  { name: "May", Total: 2900 },
  { name: "June", Total: 1000 },
];
export default function Chart({ aspect, title }) {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e59a59" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#e59a59" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" className="xaxis"/>
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#e59a59"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
