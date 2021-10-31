import React, { useState } from 'react';


class DistrictsDropDown extends React.Component {
    state = {
        values: []
    }
    componentDidMount() {
        fetch('http://localhost:8080/values')
            .then(function (res) {
                return res.json();
            }).then((json) => {
                this.setState({
                    values: json
                })
            });
    }
    render() {
        return <div className="drop-down">
            <label>
                Districts:
                <select>{
                    this.state.values.map((obj) => {
                        return <option value={obj.id}>{obj.name}</option>
                    })
                }</select>
            </label>
        </div>;
    }
}

export default DistrictsDropDown;