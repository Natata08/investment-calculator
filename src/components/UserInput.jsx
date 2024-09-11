export default function UserInput({ userInput, onChangeUserInput }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initial_investment'>Initial Investment</label>
          <input
            type='number'
            id='initial_investment'
            onChange={(event) =>
              onChangeUserInput("initialInvestment", event.target.value)
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
              onChangeUserInput("annualInvestment", event.target.value)
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
              onChangeUserInput("expectedReturn", event.target.value)
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
            onChange={(event) =>
              onChangeUserInput("duration", event.target.value)
            }
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}
