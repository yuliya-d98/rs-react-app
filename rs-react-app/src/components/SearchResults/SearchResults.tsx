import { Component } from "react";
import type { Pokemon } from "../../App";

interface SearchResultsProps {
    isLoading: boolean;
    data: Pokemon[];
}

export default class SearchResults extends Component<SearchResultsProps> {
    render() {
        return <div></div>
    }
}