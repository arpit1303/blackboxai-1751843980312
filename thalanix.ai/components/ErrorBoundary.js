import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    // Log error to external service if needed
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      // Render any custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <h2 className="text-2xl text-red-500">Something went wrong.</h2>
        </div>
      );
    }
    return this.props.children; 
  }
}
