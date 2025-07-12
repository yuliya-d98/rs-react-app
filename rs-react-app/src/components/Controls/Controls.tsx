import { Component, type ChangeEvent } from "react"
import UiKitButton from "../../ui-kit/UiKitButton.tsx";
import "./Controls.css"

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

    componentDidUpdate(prevProps: ControlsProps) {
        if (this.props.searchQuery !== prevProps.searchQuery) {
          this.setState({ searchQuery: this.props.searchQuery });
        }
      }

    onSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            searchQuery: event.target.value ?? ''
        });
    }

    render() {
        return (
            <div className="controls">
                <input 
                    placeholder="Enter any search query..."
                    type="text" 
                    defaultValue={this.state?.searchQuery} 
                    onChange={this.onSearchQueryChange} 
                />
                <UiKitButton label="Search" onClick={() => this.props.onApplyFilters(this.state.searchQuery)} />
            </div>
        )
    }
}
