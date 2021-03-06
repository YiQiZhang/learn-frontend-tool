import React, {Component, PropTypes} from 'react'
import {VisibilityFilters} from '../../actions.jsx'

export default class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name;
        }

        return (
            <a href="#" onClick={e => {
                e.preventDefault();
                this.props.onFilterChange(filter);
            }}
            >
                {name}
            </a>
        )
    }

    render() {
        return (
            <p>
                Show:
                {' '}
                {this.renderFilter(VisibilityFilters.SHOW_ALL, 'ALL')}
                {', '}
                {this.renderFilter(VisibilityFilters.SHOW_COMPLETED, 'Completed')}
                {', '}
                {this.renderFilter(VisibilityFilters.SHOW_ACTIVE, 'Active')}
                {'.'}
            </p>
        )
    }
}

Footer.VisibilityFilters = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        VisibilityFilters.SHOW_ALL,
        VisibilityFilters.SHOW_COMPLETED,
        VisibilityFilters.SHOW_ACTIVE
    ]).isRequired
};