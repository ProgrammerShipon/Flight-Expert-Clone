import Select_RunWay_Filters from "../../Components/Select_RunWay_Filters/Select_RunWay_Filters";
import PlaneFiltersList from "./PlaneFiltersList/PlaneFiltersList";

// Home Page
export default function index() {
  return (
    <>
      <Select_RunWay_Filters />

      {/* Runway plane */}
      <PlaneFiltersList />
    </>
  );
}
