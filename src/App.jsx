import './App.css';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import BarChart from './Charts/BarChart.jsx';

Chart.register(CategoryScale);

const App = () => {
  return (
    <div className='app'>
      <h2>Charts</h2>
      <div className='wrapper'>
        {/* Bar Chart */}
        <BarChart />
        {/* Line Graph */}
        {/* Pie Chart */}
      </div>
    </div>
  );
};

export default App;
