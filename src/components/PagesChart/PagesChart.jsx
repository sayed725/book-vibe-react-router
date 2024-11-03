import { BarChart, Bar, XAxis, YAxis ,ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

const PagesChart = () => {
    const [books , setBooks] = useState([])

useEffect(()=>{
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))
},[])

const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`
  );
  
  const TriangleBar = (books) => {
    const {
      fill, x, y, width, height,
    } = books;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  return (
    <div className="pt-10">

      <ResponsiveContainer className="mx-auto" width="90%" height={600}>
    <BarChart  data={books}>
      <XAxis  dataKey="bookName"  tick={{ fontSize: 10 }}
  interval={0}/>
      <YAxis />
    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />}/>
      
      </BarChart>
</ResponsiveContainer>
    </div>
  );
};

export default PagesChart;
