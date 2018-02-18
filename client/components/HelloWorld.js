import React from 'react';

class HelloWorld extends React.Component {
  constructor() {
    super();
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      helloWorld: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const response = await (await fetch('api/pathBodyTest/2', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ value1: 1, value2: 2 })
    }));
    const data = await response.json();
    this.setState({ helloWorld: data });
  }

  render() {
    return (
      <div>
        <h2>Hello World!</h2>
        <p className="blah">data</p>
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
