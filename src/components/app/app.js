import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css';

function App() {

  const data = [
    {name: 'John', salary: 800, increase: true, id: 1},
    {name: 'Denys', salary: 2000, increase: false, id: 2},
    {name: 'Fill', salary: 3000, increase: false, id: 3},
  ]

  return (
    <div className="app">
        <AppInfo />
    <div className="search-panel">
      <SearchPanel />
      <AppFilter />
    </div>
    <EmployeesList data={data} />
    <EmployeesAddForm/>

    </div>
  );
}

export default App;
