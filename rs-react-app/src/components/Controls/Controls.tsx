import { Component } from "react"

interface ControlsProps {
    searchQuery: string | null;
    onSearchQueryChange: (query: string) => void;
}

export default class Controls extends Component<ControlsProps> {
    render() {
        return <div></div>
    }
}