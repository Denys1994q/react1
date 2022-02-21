import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onToggleIncrease, onToggleRise, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps} 
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}
                onDelete={() => onDelete(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;