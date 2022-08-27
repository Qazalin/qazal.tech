import { numberFormatter } from "utils";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
} from "recharts";
import { ChartValueType } from "types";
import { CustomTooltip } from "./CategoricalPieChart";
export const RainbowBarChart: React.FC<{ data: ChartValueType[] }> = ({
  data,
}) => {
  const pastel = ["#fcf6bd", "#ff99c8", "#d0f4de", "#a9def9", "#e4c1f9"];

  return (
    <ResponsiveContainer width="100%" height="80%" maxHeight={300}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="x" />
        <YAxis tickFormatter={(t) => numberFormatter(t)} />
        <Tooltip
          cursor={{
            opacity: 0.2,
          }}
          content={CustomTooltip}
        />
        <Bar dataKey="y" fill="#00a0fc">
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={pastel[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
