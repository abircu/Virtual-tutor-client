import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { baseUrl } from "../../../config/config";
const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7f7f",
  "#6a0dad",
  "#ff6347",
];
const Cart = () => {
  const [chatInfo, setChatInfo] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseUrl}/dash-board/get/home`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = res.data; // Correct variable usage
        const transformedData = [
          {
            name: "Students",
            uv: Number(data.totalStudents),
            value: Number(data.totalStudents),
            pv: Number(data.totalStudents),
            amt: Number(data.totalStudents),
          },
          {
            name: "Teachers",
            uv: Number(data.totalTeachers),
            value: Number(data.totalTeachers),
            pv: Number(data.totalTeachers),
            amt: Number(data.totalTeachers),
          },
          {
            name: "Modules",
            uv: Number(data.totalModules),
            value: Number(data.totalModules),
            pv: Number(data.totalModules),
            amt: Number(data.totalModules),
          },
          {
            name: "Academic Courses",
            uv: Number(data.totalAcademicCourses),
            value: Number(data.totalAcademicCourses),
            pv: Number(data.totalAcademicCourses),
            amt: Number(data.totalAcademicCourses),
          },
          {
            name: "Skill Courses",
            uv: Number(data.totalSkillCourses),
            value: Number(data.totalSkillCourses),
            pv: Number(data.totalSkillCourses),
            amt: Number(data.totalSkillCourses),
          },
          {
            name: "Discussions",
            uv: Number(data.totalDiscussions),
            pv: Number(data.totalDiscussions),
            value: Number(data.totalDiscussions),
            amt: Number(data.totalDiscussions),
          },
        ];
        setTotal(transformedData.reduce((acc, curr) => acc + curr.value, 0));
        setChatInfo(transformedData); // Set transformed data to chatInfo
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("chat info", chatInfo);
  }, [chatInfo]);
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    name,
  }) => {
    const radius = outerRadius - 20;
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);
    const percentage = ((value / total) * 100).toFixed(2);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {name}: {percentage}%
      </text>
    );
  };
  // custom toltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, uv } = payload[0].payload;
      const percentage = ((uv / total) * 100).toFixed(2);

      return (
        <div className="bg-gray-700 text-white p-2 rounded">
          <p>{`${name}: ${uv}`}</p>
          <p>{`Percentage: ${percentage}%`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="  bg-gray-800 min-h-screen py-20 text-white">
      <div className="text-3xl font-bold text-indigo-300 text-center mb-10">
        Summary:Represent by different types of Graphs
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
        <div>
          <ResponsiveContainer width="80%" height={400}>
            <BarChart
              data={chatInfo}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 1" />
              <XAxis className="text-white" dataKey="name" />
              <YAxis domain={[0, "dataMax + 40"]} />{" "}
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-2xl font-semibold text-indigo-300 text-center">
            BarChart
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10">
          <div>
            {" "}
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width="100%" height={500}>
                <Pie
                  data={chatInfo}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chatInfo.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div>
            {" "}
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={chatInfo}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-20" style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={chatInfo}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Cart;
