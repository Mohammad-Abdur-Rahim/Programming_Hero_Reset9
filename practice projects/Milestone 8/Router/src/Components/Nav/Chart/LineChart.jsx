import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChart = () => {
  const student = [
    { id: 1, name: "Alic", math: 85 },
    { id: 2, name: "Bob", math: 78 },
    { id: 3, name: "Chare", math: 92 },
    { id: 4, name: "Davi", math: 67 },
    { id: 5, name: "Emma", math: 74 },
    { id: 6, name: "Fran", math: 88 },
    { id: 7, name: "Grac", math: 95 },
    { id: 8, name: "Hann", math: 81 },
    { id: 9, name: "Ian", math: 90 },
    { id: 10, name: "Jac", math: 76 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LChart width={500} height={300} data={student}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="math" stroke="green" />
      </LChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
