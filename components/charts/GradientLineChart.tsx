import { ResponsiveContainer, LineChart, Line } from "recharts";
import { ChartValueType } from "types";

export const GradientLineChart: React.FC<{
  data: ChartValueType[];
  gradient: React.ReactNode;
}> = ({ gradient, data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        {gradient}
        <Line
          type="monotone"
          dataKey="y"
          stroke="url(#colorUv)"
          strokeLinecap="round"
          strokeWidth={4}
          animationDuration={8000}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
