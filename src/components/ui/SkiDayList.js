import PropTypes  from 'prop-types'
import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import SkiDayRow from './SkiDayRow'
import { MdTerrain as Terrain  }from 'react-icons/md'
import { TiWeatherSnow as SnowFlake } from 'react-icons/ti'
import '../../stylesheets/SkiDayList.scss'

const SkiDayList = ({ days, filter, onRemoveDay=f=>f }) => {

    const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ?
        days :
        days.filter(day => day[filter])

    const activeFilterStyle = {
        textDecoration: 'none',
        color: 'black'
    }
    return (
        <div className="ski-day-list">
            <table>
                <caption>double click to remove</caption>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Resort</th>
                    <th><SnowFlake /></th>
                    <th><Terrain /></th>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <Link to="/list-days" style={(!filter) ? activeFilterStyle : null}>All Days</Link>
                        <NavLink to="/list-days/powder" activeStyle={activeFilterStyle}>Powder Days</NavLink>
                        <NavLink to="/list-days/backcountry" activeStyle={activeFilterStyle}>Backcountry Days</NavLink>
                    </td>
                </tr>
                </thead>
                <tbody>
                {filteredDays.map((day, i) =>
                    <SkiDayRow key={i} {...day} onRemoveDay={onRemoveDay} />
                )}
                </tbody>
            </table>
        </div>
    )
}

SkiDayList.propTypes = {
    filter: PropTypes.oneOf(['powder', 'backcountry']),
    onRemoveDay: PropTypes.func,
    days: (props) => (!Array.isArray(props.days)) ?
        new Error("SkiDayList days property must be an array") :
        (!props.days.length) ?
            new Error("SkiDayList days array must contain at least one record") :
            null
}

export default SkiDayList