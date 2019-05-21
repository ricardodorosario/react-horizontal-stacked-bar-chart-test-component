import React from "react";
import HSBar from "react-horizontal-stacked-bar-chart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">HSBar Examples</div>
      <h3>Complete</h3>
      <HSBar
        height={50}
        showTextIn
        showTextUp
        showTextDown
        showTextWithValue={true}
        id="new_id"
        fontColor="rgb(50,20,100)"
        data={[
          {
            name: "To pay",
            value: 80,
            description: "U$80,00",
            color: "red"
          },
          {
            name: "Paid",
            value: 200,
            description: "U$200,00",
            color: "rgb(150,150,220)"
          }
        ]}
      />
      <h3>Simple</h3>
      <HSBar data={[{ value: 10 }, { value: 20 }]} />
      <h3>With value and description</h3>
      <HSBar
        showTextIn
        data={[
          { value: 10000, description: "10.000" },
          { value: 5000, description: "5.000" },
          { value: 3000, description: "3.000" }
        ]}
      />
      <h3>
        With name, value and description. Name on top and description inside
      </h3>
      <HSBar
        showTextWithValue={false}
        showTextUp
        showValueIn
        data={[
          { name: "1st Place", value: 125, description: "125 points" },
          { name: "2nd Place", value: 98, description: "98 points" },
          { name: "3rd Place", value: 21, description: "21 points" }
        ]}
      />
      <h3>Into a div component with colors</h3>
      <div style={{ width: "80%", marginLeft: "10%" }}>
        <HSBar
          data={[
            { value: 10000, color: "red" },
            { value: 5000, description: "5.000", color: "rgb(0,255,0)" },
            { value: 3000, description: "3.000", color: "blue" }
          ]}
        />
      </div>

      <h3>Into a padding and bordered div and bordered bar</h3>
      <div
        style={{
          width: "80%",
          marginLeft: "10%",
          padding: "10px",
          border: "1px solid black"
        }}
      >
        <HSBar
          showTextDown
          id="hsbarExample"
          data={[
            { value: 10000, color: "red" },
            { value: 5000, description: "5.000", color: "rgb(0,255,0)" },
            { value: 3000, description: "3.000", color: "blue" }
          ]}
        />
      </div>

      <div className="footer">
        <h4>Contribute:</h4>
        <div>
          <a href="https://www.npmjs.com/package/react-horizontal-stacked-bar-chart">
            <img
              src="https://img.shields.io/npm/v/react-horizontal-stacked-bar-chart.svg?style=flat-square"
              alt="npm.js"
            />
          </a>
          <a href="https://github.com/ricardodorosario/react-horizontal-stacked-bar-chart">
            <img
              src="https://img.shields.io/github/release/ricardodorosario/react-horizontal-stacked-bar-chart.svg?style=flat-square"
              alt="github"
            />
          </a>
          <a href="https://github.com/ricardodorosario/react-horizontal-stacked-bar-chart">
            <img
              src="https://img.shields.io/npm/dt/react-horizontal-stacked-bar-chart.svg?style=flat-square"
              alt="github"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
