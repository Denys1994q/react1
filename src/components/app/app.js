import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: 'John', salary: 800, increase: false, rise: true, id: 1 },
        { name: 'Denys', salary: 2000, increase: true, rise: false, id: 2 },
        { name: 'Fill', salary: 3000, increase: false, rise: false, id: 3 },
      ], 
      term: '',
      btn: ''
    }
    this.maxId = 4
    this.newSel = 0
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id) // залишаємо в масиві ті, по яких не клікнули 
      }
    })
  }

  addEmployer = (name, salary) => {
    const newEmployer = {
      name: name,
      salary: +salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newEmployer];
      return {
        data: newArr
      }
    });
  }

  onToggleIncrease = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex( item => item.id === id); // індекс елемента, по якому клік 

      const old = data[index]; // стара копія об'єкта, по якому клікнули (не всього масиву, а тільки його)
      const newItem = {...old, increase: !old.increase} // створюємо копію свойст об'єкта, по якому клікнули, при цьому беремо його старе значення increase і міняємо на протилежне
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; // а тепер формуємо новий масив (беремо всі елементи до зміненого, змінений і всі після зміненого)

      return {
        data: newArr
      }
    })
  }

  onToggleRise = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex( item => item.id === id); // індекс елемента, по якому клік 

      const old = data[index]; // стара копія об'єкта, по якому клікнули (не всього масиву, а тільки його)
      const newItem = {...old, rise: !old.rise} // створюємо копію свойст об'єкта, по якому клікнули, при цьому беремо його старе значення increase і міняємо на протилежне
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; // а тепер формуємо новий масив (беремо всі елементи до зміненого, змінений і всі після зміненого)

      return {
        data: newArr
      }
    })
  }

  // пошук по елементах 
  searchEmp = (items, term) => {
    if (term.length === 0) { // якщо нічого не введено 
      return items;
    }

    return items.filter( item => {
      return item.name.indexOf(term) > -1 // пошук в item.name строки term
    })

  }
  // пошук по елементах 
  onUpdateSearch = (term) => {
    this.setState({term: term})
  }

  // фільтр елементів
  filterEmployers = (data, btn) => {
    if (btn === 'all') {
      return data;
    }
    else if (btn === 'rise') {
      return data.filter(item => {
        return item.rise;
      })
    }
    else if (btn === 'salary') {
      return data.filter(item => {
        return item.salary > 1000;
      })
    }
    return data;
  }
 // фільтр елементів
  onUpdateFilter = (btn) => {
    this.setState({
      btn: btn
    })
  }

  // завдання: при інпуті записувати значення, яке вводиться, в state salary відповідного працівника
  // Треба при інпуті знаходити id робітника, якому треба буде поміняти зарплату 
  //  І значення самої зарплати 
  // далі змінюємо зарплату в state і тоді треба створити новий об'єкт по правилах і повернути його

  getSalary = (newSalary) => {
    this.newSel = newSalary;
  }

  onChangeSalary = (id) => {
    console.log(id)
    console.log(this.newSel)
    this.setState(({ data }) => {
      const index = data.findIndex( item => item.id === id); // індекс елемента, по якому клік 

      const old = data[index]; // стара копія об'єкта, по якому клікнули (не всього масиву, а тільки його)
      const newItem = {...old, salary: this.newSel} // створюємо копію свойст об'єкта, по якому клікнули, при цьому беремо його старе значення increase і міняємо на протилежне
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; // а тепер формуємо новий масив (беремо всі елементи до зміненого, змінений і всі після зміненого)

      return {
        data: newArr
      }
    })
  }
 
  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter ( item => item.increase ).length;
    const {data, term, btn} = this.state;
    const visibleData = this.filterEmployers(this.searchEmp(data, term), btn);
    
    return (
      <div className="app">

        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter onUpdateFilter={this.onUpdateFilter}/>
        </div>

        <EmployeesList
          data={visibleData}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
          onDelete={this.deleteItem} 
          onChangeSalary={this.onChangeSalary}
          getSalary={this.getSalary}
          
          />

        <EmployeesAddForm
          onAdd={this.addEmployer} />

      </div>
    );
  }
}

export default App;
