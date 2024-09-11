import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInput = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initial_investment'>Initial Investment</label>
          <input
            type='number'
            id='initial_investment'
            onChange={(event) =>
              handleInput("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label htmlFor='annual_investment'>Annual Investment</label>
          <input
            type='number'
            id='annual_investment'
            onChange={(event) =>
              handleInput("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
            required
          />
        </p>
      </div>

      <div className='input-group'>
        <p>
          <label htmlFor='expected_return'>Expected Return</label>
          <input
            type='number'
            id='expected_return'
            onChange={(event) =>
              handleInput("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input
            type='number'
            id='duration'
            onChange={(event) => handleInput("duration", event.target.value)}
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}
