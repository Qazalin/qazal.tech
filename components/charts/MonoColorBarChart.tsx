import { ChartValueType, GradientAreaChartProps } from "types";
import { numberFormatter } from "utils";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { CustomTooltip } from "./CategoricalPieChart";

export const MonoColorBarChart: React.FC<{
  data: ChartValueType[];
  color: string;
}> = ({ data, color }) => {
  return (
    <ResponsiveContainer width="100%" height="80%" maxHeight={300}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="x" domain={["dataMin", "dataMax"]} />
        <YAxis tickFormatter={(t) => numberFormatter(t)} />
        <Bar type="monotone" dataKey="y" fillOpacity={1} fill={color} />
        <Tooltip content={CustomTooltip} />
      </BarChart>
    </ResponsiveContainer>
  );
};
