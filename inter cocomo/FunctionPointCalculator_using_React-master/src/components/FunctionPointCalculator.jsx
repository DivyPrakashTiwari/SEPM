import React, { Component } from "react";
import "./functionPointCalculator.css";

class FunctionPointCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EI: 0,
      EO: 0,
      EQ: 0,
      ILF: 0,
      EIF: 0,
      weighingFactors: {
        EI: "Low",
        EO: "Low",
        EQ: "Low",
        ILF: "Low",
        EIF: "Low",
      },
      complexityAdjustmentFactors: Array(14).fill(0),
      UFP: 0,
      DI: 0,
      TCF: 0,
      FP: 0,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: parseInt(value) });
  };

  handleWeighingFactorChange = (e) => {
    const { name, value } = e.target;
    const weighingFactors = { ...this.state.weighingFactors, [name]: value };
    this.setState({ weighingFactors });
  };

  handleComplexityFactorChange = (factorIndex, value) => {
    const complexityAdjustmentFactors = [
      ...this.state.complexityAdjustmentFactors,
    ];
    complexityAdjustmentFactors[factorIndex] = parseInt(value);
    this.setState({ complexityAdjustmentFactors });
  };

  calculateFunctionPoints = () => {
    const {
      EI,
      EO,
      EQ,
      ILF,
      EIF,
      weighingFactors,
      complexityAdjustmentFactors,
    } = this.state;

    const complexityWeights = {
      Low: { EI: 3, EO: 4, EQ: 3, ILF: 7, EIF: 5 },
      Average: { EI: 4, EO: 5, EQ: 4, ILF: 10, EIF: 7 },
      High: { EI: 5, EO: 7, EQ: 6, ILF: 15, EIF: 10 },
    };

    let UFP = 0;
    Object.keys(weighingFactors).forEach((category) => {
      UFP +=
        complexityWeights[weighingFactors[category]][category] *
        this.state[category];
    });

    const DI = complexityAdjustmentFactors.reduce((acc, val) => acc + val, 0);
    const TCF = 0.65 + 0.01 * DI;
    const FP = UFP * TCF;

    return { UFP, DI, TCF, FP };
  };

  handleCalculateClick = () => {
    const { UFP, DI, TCF, FP } = this.calculateFunctionPoints();
    this.setState({ UFP, DI, TCF, FP });
  };

  render() {
    const { UFP, DI, TCF, FP } = this.state;

    return (
      <div className='outer_container'>
        <h1>Function Point Calculator</h1>
        <form>
          {/* Input fields for Function Point categories */}
          <div className='function_form'>
              <h4 style={{textAlign:'right',marginRight:60}}>Weighting factor</h4>
             <div className='input'>
               <div>
                 <label>External Inputs (EI)</label>
                <input
                  type='number'
                  name='EI'
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                {/* <label>Complexity Weight:</label> */}
                <label>
                  <input
                    type='radio'
                    name='EI'
                    value='Low'
                    checked={this.state.weighingFactors.EI === "Low"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  Low
                </label>
                <label>
                  <input
                    type='radio'
                    name='EI'
                    value='Average'
                    checked={this.state.weighingFactors.EI === "Average"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  Average
                </label>
                <label>
                  <input
                    type='radio'
                    name='EI'
                    value='High'
                    checked={this.state.weighingFactors.EI === "High"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  High
                </label>
              </div>
            </div>
            <div className='input'>
              <div>
                <label>External Outputs (EO):</label>
                <input
                  type='number'
                  name='EO'
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                {/* <label>Complexity Weight:</label> */}
                <label>
                  <input
                    type='radio'
                    name='EO'
                    value='Low'
                    checked={this.state.weighingFactors.EO === "Low"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  Low
                </label>
                <label>
                  <input
                    type='radio'
                    name='EO'
                    value='Average'
                    checked={this.state.weighingFactors.EO === "Average"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  Average
                </label>
                <label>
                  <input
                    type='radio'
                    name='EO'
                    value='High'
                    checked={this.state.weighingFactors.EO === "High"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  High
                </label>
              </div>
            </div>
            <div className='input'>
              <div>
                <label>External Inquiries (EQ):</label>
                <input
                  type='number'
                  name='EQ'
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                {/* <label>Complexity Weight:</label> */}
                <label>
                  <input
                    type='radio'
                    name='EQ'
                    value='Low'
                    checked={this.state.weighingFactors.EQ === "Low"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  Low
                </label>
                <label>
                  <input
                    type='radio'
                    name='EQ'
                    value='Average'
                    checked={this.state.weighingFactors.EQ === "Average"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  Average
                </label>
                <label>
                  <input
                    type='radio'
                    name='EQ'
                    value='High'
                    checked={this.state.weighingFactors.EQ === "High"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  High
                </label>
              </div>
            </div>
            <div className='input'>
              <div>
                <label>Internal Logical Files (ILF):</label>
                <input
                  type='number'
                  name='ILF'
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                {/* <label>Complexity Weight:</label> */}
                <label>
                  <input
                    type='radio'
                    name='ILF'
                    value='Low'
                    checked={this.state.weighingFactors.ILF === "Low"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  Low
                </label>
                <label>
                  <input
                    type='radio'
                    name='ILF'
                    value='Average'
                    checked={this.state.weighingFactors.ILF === "Average"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  Average
                </label>
                <label>
                  <input
                    type='radio'
                    name='ILF'
                    value='High'
                    checked={this.state.weighingFactors.ILF === "High"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  High
                </label>
              </div>
            </div>
            <div className='input'>
              <div>
                <label>External Interface Files (EIF):</label>
                <input
                  type='number'
                  name='EIF'
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                {/* <label>Complexity Weight:</label> */}
                <label>
                  <input
                    type='radio'
                    name='EIF'
                    value='Low'
                    checked={this.state.weighingFactors.EIF === "Low"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  Low
                </label>
                <label>
                  <input
                    type='radio'
                    name='EIF'
                    value='Average'
                    checked={this.state.weighingFactors.EIF === "Average"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  Average
                </label>
                <label>
                  <input
                    type='radio'
                    name='EIF'
                    value='High'
                    checked={this.state.weighingFactors.EIF === "High"}
                    onChange={this.handleWeighingFactorChange}
                  />
                  High
                </label>
              </div>
            </div>
          </div>
          {/* Similar input fields for EO, EQ, ILF, and EIF */}
          {/* Radio buttons for Complexity Adjustment Factors */}
          <div className='complexity_container'>
            <h2>Complexity Adjustment Factors</h2>
            {[
              "Backup and recovery",
              "Data Communication",
              "Distributed processing",
              "Performance Critical",
              "Existing operating environment",
              "On-line data entry",
              "Input transaction over multiple screens",
              "Master files updated online",
              "Information domain values complex",
              "Internal processing complex",
              "Code designed for reuse",
              "Conversion/installation in design",
              "Multiple installations",
              "Application designed for change",
            ].map((factor, index) => (
              <div key={index} className='complexity_inner'>
                <div>
                  <label>{factor}:</label>
                </div>
                <div>
                  {[0, 1, 2, 3, 4, 5].map((value) => (
                    <label key={value}>
                      <input
                        type='radio'
                        name={`complexityAdjustmentFactors[${index}]`}
                        value={value}
                        checked={
                          this.state.complexityAdjustmentFactors[index] ===
                          value
                        }
                        onChange={() =>
                          this.handleComplexityFactorChange(index, value)
                        }
                      />
                      {value}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button type='button' onClick={this.handleCalculateClick}>
            Calculate
          </button>
        </form>
        {/* Display results */}
        {UFP > 0 && (
          <div>
            <h2>Results:</h2>
            <p>
              Unadjusted Function Points (UFP): <input value={UFP} readOnly />
            </p>
            <p>
              Degree of Influence (DI): <input value={DI} readOnly />
            </p>
            <p>
              Technical Complexity Factor (TCF): <input value={TCF} readOnly />
            </p>
            <p>
              Function Point (FP): <input value={FP} readOnly />
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default FunctionPointCalculator;
