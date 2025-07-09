import { Component } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Header from './components/Header/Header';

export interface CardItem {
  title: string;
  description: string;
}

interface AppState {
  searchQuery: string | null;
  isLoading: boolean;
  resultList: CardItem[];
}

class App extends Component<{}, AppState> {
  constructor(props:{}) {
    super(props)
  }

  onSearch = (query: string | null) => {
    this.setState((prevState) => ({...prevState, searchQuery: query}))
  }

  render() {
    return (
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Header />
        {/* <Controls searchQuery={this.state.searchQuery} onSearchQueryChange={this.onSearch} />
        <SearchResults /> */}
        <h1>Hello!</h1>
      </ErrorBoundary>
    )
  }
}

export default App;
