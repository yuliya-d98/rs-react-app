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
interface PokemonResponce {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
} 

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
    const searchQuery = localStorage.getItem(this._searchQueryKeyInLocalStorage) ?? '';
    this.setState((prevState) => ({
      ...prevState,
      searchQuery
    }))
    console.log('componentDidMount', searchQuery)
    this.getPokemonsList(searchQuery)
  }

  onSearch = (query: string | null) => {
    this.setState((prevState) => ({...prevState, searchQuery: query ?? ''}));
    if (query) {
      localStorage.setItem(this._searchQueryKeyInLocalStorage, query)
    } else {
      localStorage.removeItem(this._searchQueryKeyInLocalStorage)
    }
    this.getPokemonsList(query)
  }

  private async getPokemonsList(query: string | null) {
    this.setState((prevState) => ({
      ...prevState,
      isLoading: true,
      resultList: []
    }))
    const searchQueryParam = query ? `&search=${query}` : ''
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0${searchQueryParam}`)
    const data: PokemonResponce = await resp.json();
    console.log('response', data)
    this.setState((prevState) => ({
      ...prevState,
      isLoading: false,
      resultList: data.results.map((pokemon) => ({
        title: pokemon.name,
        description: pokemon.url
      }))
    }))
  }

  render() {
    return (
      <div className="app">
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Controls searchQuery={this.state.searchQuery} onApplyFilters={this.onSearch} />
          <SearchResults isLoading={this.state.isLoading} data={this.state.resultList} />
          <ThrowErrorButton />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;
