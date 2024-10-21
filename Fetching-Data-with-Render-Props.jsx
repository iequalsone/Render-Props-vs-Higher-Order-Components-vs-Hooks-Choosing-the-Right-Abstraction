import React from 'react';

class DataFetcher extends React.Component {
  state = { data: null, loading: true };

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) => this.setState({ data, loading: false }));
  }

  render() {
    return this.props.children(this.state);
  }
}

function App() {
  return (
    <DataFetcher url="https://api.example.com/data">
      {({ data, loading }) =>
        loading ? <p>Loading...</p> : <div>Data: {JSON.stringify(data)}</div>
      }
    </DataFetcher>
  );
}

export default App;
