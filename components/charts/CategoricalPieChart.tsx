import React, { ReactText } from "react";
import { Pie, Cell, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { numberFormatter } from "utils";

export const CategoricalPieChart: React.FC<{
  data: any;
  colors: string[];
}> = ({ data, colors }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie dataKey="y" nameKey="x" data={data}>
          {data.map((_d: any, index: number) => (
            <Cell key={`pie-${index}`} fill={colors[index % 20]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export const CustomTooltip: React.FC<{ active?: boolean; payload?: any[] }> = ({
  payload,
  active,
}) => {
  if (active && payload) {
    const x = payload[0].payload.x;
    return (
      <div className="bg-gray-200 dark:bg-gray-800 p-5 rounded-md shadow-xl">
        <p className="capitalize">{`${x} : ${numberFormatter(
          payload[0].value
        )}`}</p>
      </div>
    );
  }
  return null;
};
