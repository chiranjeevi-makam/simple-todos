import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const Gender = props => {
  const {data} = props
  return (
    <ResponsiveContainer width={1000} height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#2d87bb" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Gender
