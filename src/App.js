import "./styles.css";
import Searcher from "./Searcher";
import market from "./markets.json";
import coins from "./coins.json";
import { useState, useEffect } from "react";

export default function App() {
  const [Source, setSource] = useState(market);
  const [searchWord, setSearchWord] = useState("http");
  const [Data, setData] = useState("");

  useEffect(() => {
    let DatatoSearch = "";
    Source === "datacoins" ? (DatatoSearch = coins) : (DatatoSearch = market);
    setData(Searcher(DatatoSearch, searchWord));
  }, [searchWord, Source]);

  console.log(Source);
  return (
    <div className="App">
      <h1>
        {searchWord} Getter {Data && Data.length}
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <label htmlFor="inputText"> Search For </label>
        <input
          type="text"
          id="inputText"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        &nbsp;
        <section onChange={(e) => setSource(e.target.value)}>
          coins <input type="radio" id="coinrd" name="data" value="datacoins" />
          Marlet{" "}
          <input type="radio" id="marketrd" name="data" value="dataMarket" />
        </section>
      </div>
      <h2>All Indside the json</h2>
      {Array.from(Data, (el, i) => (
        <div key={i} style={{ textAlign: "left" }}>
          -{el}
        </div>
      ))}
    </div>
  );
}
