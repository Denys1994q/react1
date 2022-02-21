import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: 'all'
        }
    }

    filterEmployers = (e) => {
        const btnAttribute = e.target.getAttribute('filter');
        this.props.onUpdateFilter(btnAttribute);
        this.state = {
            btn: btnAttribute
        }
    }

    render() {
        return (
            <div className="btn-group">
                <button 
                    className="btn btn-light"
                    type='button'
                    filter='all'
                    onClick={this.filterEmployers}>
                    Все сотрудники
                </button>
                <button 
                    className="btn btn-outline-light"
                    type='button'
                    filter='rise'
                    onClick={this.filterEmployers}>
                    На повышение
                </button>
                <button 
                    className="btn btn-outline-light"
                    type='button'
                    filter='salary'
                    onClick={this.filterEmployers}>
                    З/П больше 1000$ 
                </button>
            </div>
        )
    }

}

export default AppFilter;