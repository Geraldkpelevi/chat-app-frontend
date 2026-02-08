import "./Aside.css";
import AsideSearch from "./aside-search/AsideSearch.jsx";
import AsideUserDisplay from "./aside-users-display/AsideUserDisplay.jsx";
function Aside() {
  return (
    <>
      <div className="aside">
        <AsideSearch />
        <AsideUserDisplay />
        
      </div>
    </>
  );
}

export default Aside;
