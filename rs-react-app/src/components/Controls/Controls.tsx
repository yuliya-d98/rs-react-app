import { Component } from "react"
import UiKitInput from "../../ui-kit/UiKitInput.tsx";
import UiKitButton from "../../ui-kit/UiKitButton.tsx";

interface ControlsProps {
    searchQuery: string;
    onApplyFilters: (query: string | null) => void;
}
interface ControlsState {
    searchQuery: string;
}

export default class Controls extends Component<ControlsProps, ControlsState> {
    componentDidMount() {
        this.setState({
            searchQuery: this.props.searchQuery
        })
    }

    onSearchQueryChange(value: string | null) {
        this.setState({
            searchQuery: value ?? ''
        })
    }

    render() {
        return (
            <div className="controls">
                <UiKitInput value={this.state?.searchQuery} onChange={this.onSearchQueryChange} />
                <UiKitButton label="Search" onClick={() => this.props.onApplyFilters(this.state.searchQuery)} />
            </div>
        )
    }
}
