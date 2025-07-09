import { Component } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ThrowErrorButton from './components/ThrowErrorButton/ThrowErrorButton';
import Controls from './components/Controls/Controls';
import SearchResults from './components/SearchResults/SearchResults';
import type { UiKitCardProps } from './ui-kit/UiKitCard';

interface AppState {
  searchQuery: string | null;
  isLoading: boolean;
  resultList: UiKitCardProps[];
}

export interface Pokemon {} 

class App extends Component<{}, AppState> {
  state = {
    searchQuery: null,
    isLoading: false,
    resultList: []
  }

  constructor(props: {}) {
    super(props);
  }

  onSearch = (query: string | null) => {
    this.setState((prevState) => ({...prevState, searchQuery: query}))
  }

  render() {
    return (
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <h1>Welcome to RS React App!</h1>
        <Controls searchQuery={this.state.searchQuery} onSearchQueryChange={this.onSearch} />
        <SearchResults isLoading={true} data={[]} />
        <ThrowErrorButton />
      </ErrorBoundary>
    )
  }
}

export default App;
