import React, { useState } from "react";
import "./cocomo.css";

function Cocomo({ basic_cocomo }) {
  const [softwareType, setSoftwareType] = useState("");
  const [kloc, setKLOC] = useState("");
  const [effort, setEffort] = useState(0);
  const [time, setTime] = useState(0);
  const [person, setPerson] = useState(0);

  const estimateEffortAndTime = () => {
    // Calculate Effort and Time using the values from basic_cocomo
    const a1 = basic_cocomo[softwareType].a1;
    const b1 = basic_cocomo[softwareType].b1;
    const a2 = basic_cocomo[softwareType].a2;
    const b2 = basic_cocomo[softwareType].b2;

    const Effort = a1 * kloc ** b1;
    const Time = a2 * Effort ** b2;
    const Person = Effort / Time;
    setEffort(Math.round(Effort));
    setTime(Math.round(Time));
    setPerson(Math.round(Person));
  };

  return (
    <div className='software-estimator'>
      <h1>Software Effort Estimator</h1>
      <label>
        Software Type:
        <select
          value={softwareType}
          onChange={(e) => setSoftwareType(e.target.value)}
          style={{ marginTop: 10 }}
        >
          <option value='Organic'>Organic</option>
          <option value='Semidetached'>Semidetached</option>
          <option value='Embedded'>Embedded</option>
        </select>
      </label>
      <br />
      <label>
        KLOC (Kilo Lines of Code):
        <input
          type='number'
          value={kloc}
          onChange={(e) => setKLOC(e.target.value)}
          style={{ marginTop: 10 }}
        />
      </label>
      <br />
      <button onClick={estimateEffortAndTime}>Estimate</button>
      <div className='results'>
        <p>Estimated Effort (person-months): {effort}</p>
        <p>Estimated Development Time (months): {time}</p>
        <p>Number of people needed: {person}</p>
      </div>
    </div>
  );
}

export default Cocomo;
