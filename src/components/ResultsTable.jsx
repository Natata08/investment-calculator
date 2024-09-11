import { formatter, calculateInvestmentResults } from "../util/investment.js";

export default function ResultsTable({ userInput }) {
  const annualData = calculateInvestmentResults(userInput);

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map(
          ({ annualInvestment, interest, valueEndOfYear, year }) => {
            const totalInterest =
              valueEndOfYear -
              userInput.initialInvestment -
              annualInvestment * year;
            const investedCapital = valueEndOfYear - totalInterest;

            return (
              <tr key={`result-${year}`}>
                <td>{year}</td>
                <td>{formatter.format(valueEndOfYear)}</td>
                <td>{formatter.format(interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}
