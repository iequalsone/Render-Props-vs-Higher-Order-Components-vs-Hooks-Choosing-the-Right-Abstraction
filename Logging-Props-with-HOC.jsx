import React from 'react';

function withLogger(WrappedComponent) {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('Previous Props:', prevProps);
      console.log('Current Props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

function MyComponent(props) {
  return <div>My Component says: {props.message}</div>;
}

export default withLogger(MyComponent);
