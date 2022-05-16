import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
      <Link className="btn btn-primary btn-lg" to="/">
        <FaHome className="mr-2" />
        Back To Home
      </Link>
    </>
  );
}

export default About;
