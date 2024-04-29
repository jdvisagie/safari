import { popularSafariData } from "./data/data";
import PopularSafari from "./components/populatSafaris/PopularSafari";
import PopularSafariLight from "./components/populatSafarisLight/PopularSafariLight";
import { useState } from "react";

function App() {
  const [toggled, setToggled] = useState<boolean>(false);

  return (
    <div className="col-xs-1 text-center">
      <div className="p-2 bd-highlight">
        <button
          className={`toggle-btn ${toggled ? "toggled" : ""}`}
          onClick={() => setToggled(!toggled)}
        >
          <span className="thumb"></span>
        </button>
        <div className="p-2 bd-highlight">
          <h1 className="p-5">Popular Safaris</h1>
        </div>
      </div>
      <div className="container">
        <div className="row gx-1">
          {popularSafariData.map((safari, index) => (
            <>
              {!toggled && <PopularSafari key={index} {...safari} />}
              {toggled && <PopularSafariLight key={index} {...safari} />}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
