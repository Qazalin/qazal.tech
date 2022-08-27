import { ChartValueType, GradientAreaChartProps } from "types";
import { numberFormatter } from "utils";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import { CustomTooltip } from "./CategoricalPieChart";

export const MonoLineChart: React.FC<{
  data: ChartValueType[];
  color: string;
}> = ({ data, color }) => {
  return (
    <ResponsiveContainer width="100%" height="80%" maxHeight={300}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="x" domain={["dataMin", "dataMax"]} />
        <YAxis tickFormatter={(t) => numberFormatter(t)} />
        <Line
          type="monotone"
          dataKey="y"
          stroke={color}
          dot={false}
          strokeWidth={1.2}
        />
        <Tooltip content={CustomTooltip} />
      </LineChart>
    </ResponsiveContainer>
  );
};
