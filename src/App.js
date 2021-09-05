import React from 'react';

import './App.css';
import Input from './Input';
import List from './List';
import Data from './Data';
import {url1, url2} from './Konstante';

export default class App extends React.Component{
  state = {
    show: false,
    user: '',
    data: [],
    datadesc: [],
  }

  handleUserAppi = (a) => {

    this.setState({user:a})
    this.setState({isLoading: true})

    fetch (url1+a)
      .then (response => response.json())
      .then (newdata =>{
        this.setState({show: !this.state.show});
        this.setState({data: newdata, isLoading:false})})

   fetch (url1+a+url2)
      .then (response => response.json())
      .then (datamore =>
        this.setState({datadesc: datamore, isLoading:false})
      )
  };

  handleReset = () => {
    this.setState({user:'', data:[], datadesc:[]})
    this.setState({show: !this.state.show});
  };

  render() {
    let div;

    if (this.state.datadesc.length>0) {
      div = (
        <div>
          
          <Data 
              avatar={this.state.data.avatar_url}
              name={this.state.data.name}
              location={this.state.data.location}
              bio={this.state.data.bio}
          />
          <div id="reps-list">
            <h4>Repositories on GitHub</h4>
            <ul className ='lista'>
                {this.state.datadesc.map((podaci, index) => (
                <List
                  number = {index+1 + '.'}
                  key={podaci.id}
                  userrepos={podaci.name} 
                />
              ))}
            </ul>
          </div>
          
      </div>)
    }

    return (
      <div className='App'>
          <Input OnAddUser={this.handleUserAppi}
          onHandleReset={this.handleReset}
          show={this.state.show}
          />
          <br></br>
          {div}
          
       </div>
      )
}
}

