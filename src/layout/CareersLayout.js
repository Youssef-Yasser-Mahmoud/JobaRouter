import { Outlet } from "react-router-dom"

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
      
      <Outlet />
    </div>
  )
}
export const careersLoader = async () => {
  const res = await fetch("http://localhost:8000/careers");
  return res.json();
};
