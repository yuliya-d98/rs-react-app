import { Component } from "react";
import "./SearchResults.css"
import UiKitCard, { type UiKitCardProps } from "../../ui-kit/UiKitCard";
import UiKitSpinner from "../../ui-kit/UiKitSpinner";

interface SearchResultsProps {
    isLoading: boolean;
    data: UiKitCardProps[];
}

export default class SearchResults extends Component<SearchResultsProps> {
    render() {
        if (this.props.isLoading) {
            return (
                <div className="search-results centered">
                    <UiKitSpinner />
                </div>
            )
        }
        if (!this.props.data.length) {
            return (
                <div className="search-results centered">
                    <p>No data</p>
                </div>
            )
        }
        return (
            <div className="search-results">
                    {this.props.data.map((row) => <UiKitCard key={row.title} {...row} />)}
            </div>
        )
    }
}