import React from 'react';
import PropTypes from 'prop-types';
import { BsSearch, BsXSquareFill } from "react-icons/bs";

export default class Input extends React.Component {
    state = {
        newuser: ''
    }

    handleChangeValue = (event) => {
            const typeduser = event.target.value;
            this.setState({newuser: typeduser})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.newuser.length>0) {
        this.props.OnAddUser(this.state.newuser);
        this.setState({newuser: ''});
    }};

    handleReset = (event) => {
        this.props.onHandleReset(event);
    };

    render () {
    return (
        <div >
            <form onSubmit={this.handleSubmit}>
                <div id="input-label">
                    <input 
                        value={this.state.newuser}
                        onChange={this.handleChangeValue}
                        type='text'
                        />
                    <label className='InputForma'>Search for GithHub Users</label>
                </div>
                <button className='button'><BsSearch/></button>
                {this.props.show ? <button className="button" id="reset" onClick={this.handleReset}><BsXSquareFill/></button> : null}
            </form>
        </div>
    )
}};

Input.propTypes={
    OnAddUser: PropTypes.func
}