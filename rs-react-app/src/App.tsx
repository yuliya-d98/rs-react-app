import { Component } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ThrowErrorButton from './components/ThrowErrorButton/ThrowErrorButton';
import Controls from './components/Controls/Controls';
import SearchResults from './components/SearchResults/SearchResults';
import type { UiKitCardProps } from './ui-kit/UiKitCard';

interface AppState {
  searchQuery: string;
  isLoading: boolean;
  resultList: UiKitCardProps[];
}

export interface Pokemon {} 

class App extends Component<{}, AppState> {
  state = {
    searchQuery: '',
    isLoading: false,
    resultList: []
  }
  private readonly _searchQueryKeyInLocalStorage = 'searchQuery';

  constructor(props: {}) {
    super(props);
  }

  componentDidMount() {
    this.setState((prevState) => ({
      ...prevState,
      searchQuery: localStorage.getItem(this._searchQueryKeyInLocalStorage) ?? ''
    }))
  }

  onSearch = (query: string | null) => {
    this.setState((prevState) => ({...prevState, searchQuery: query ?? ''}));
    if (query) {
      localStorage.setItem(this._searchQueryKeyInLocalStorage, query)
    } else {
      localStorage.removeItem(this._searchQueryKeyInLocalStorage)
    }

  }

  render() {
    return (
      <div className="app">
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Controls searchQuery={this.state.searchQuery} onApplyFilters={this.onSearch} />
          <SearchResults isLoading={true} data={[]} />
          <ThrowErrorButton />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;
