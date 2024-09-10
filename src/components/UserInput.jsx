export default function UserInput() {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initial_investment'>Initial Investment</label>
          <input type='number' id='initial_investment' required />
        </p>
        <p>
          <label htmlFor='annual_investment'>Annual Investment</label>
          <input type='number' id='annual_investment' required />
        </p>
      </div>

      <div className='input-group'>
        <p>
          <label htmlFor='expected_return'>Expected Return</label>
          <input type='number' id='expected_return' required />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input type='number' id='duration' required />
        </p>
      </div>
    </section>
  );
}
