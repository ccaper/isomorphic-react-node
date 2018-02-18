import React from 'react';

function fetchData() {
  return fetch('api/pathBodyTest/2', {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ value1: 1, value2: 2 })
  });
}

class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = {
      helloWorld: {}
    };
  }

  componentDidMount() {
    fetchData()
      .then(res => res.json())
      .then(data => this.setState({ helloWorld: data }));
  }

  render() {
    return (
      <div>
        <h2>Hello World!</h2>
        <p>data</p>
        <ul>
          {Object.keys(this.state.helloWorld)
            .map(key =>
              (<li key={key}>{key}: {this.state.helloWorld[key]}</li>))}
        </ul>
      </div>
    );
  }
}

export default HelloWorld;
