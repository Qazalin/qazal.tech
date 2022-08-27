import React, { ReactText } from "react";
import { Pie, Cell, PieChart, ResponsiveContainer } from "recharts";

export const PercentageDonut: React.FC<{
  percentage: number;
  color: string;
}> = ({ percentage, color }) => {
  const data = [
    { x: "", y: percentage },
    { x: "", y: 100 - percentage },
  ];
  const colors = [color, "#939EAA"];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          dataKey="y"
          nameKey="x"
          data={data}
          innerRadius={60}
          outerRadius={80}
        >
          {data.map((_d: any, index: number) => (
            <Cell key={`pie-${index}`} fill={colors[index % 20]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
