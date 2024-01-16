import { Link } from "react-router-dom";
import image from "../assets/flight-expertlogo.svg";

export default function Identity() {
  return (
    <>
      <Link className="inline-block" to="/">
        <figure className="w-44">
          <img
            src={image}
            className="w-full h-full bg-cover"
            alt="flight expert"
          />
        </figure>
      </Link>
    </>
  );
}
