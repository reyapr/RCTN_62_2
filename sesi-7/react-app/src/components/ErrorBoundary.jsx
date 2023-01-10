import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super()
    this.state = {
      isError: false
    }
  }
  
  static getDerivedStateFromError(error) {
    return {
      isError: true
    }
  }
  
  componentDidCatch(err, info) {
    console.log(err, 'err')
  }
  
  render() {
    if(this.state.isError) {
      return <h1>Something Went Wrong</h1>
    }
    
    return (
      this.props.children
    )
  }  
}

export default ErrorBoundary