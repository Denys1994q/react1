import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const { name, salary, onDelete, onToggleIncrease, onToggleRise, onChangeSalary, getSalary, increase, rise } = props;

    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }

    function changeSalary(e) {
        const newS = e.target.value.replace(/\D/g, '');
        getSalary(newS);
        onChangeSalary()
    }


    return (
        <li className={classNames}>
            <span onClick={onToggleRise} className="list-group-item-label">{name}</span>
            <input onChange={changeSalary} type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )


}

export default EmployeesListItem;