import { Link, useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

export const careerDetailsLoader = async (params) => {
  const id = params;

  const res = await fetch("http://localhost:8000/careers" + id);

  return res.json();
};

careerDetailsLoader();
