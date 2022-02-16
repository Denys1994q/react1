import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="John"/>
            <EmployeesListItem name="Denys"/>
            <EmployeesListItem name="Fill"/>
        </ul>
    )
}

export default EmployeesList;