import { Component } from "react";

interface UiKitInputProps {
    value?: string;
    onChange: (value: string | null) => void;
}

export default class UiKitInput extends Component<UiKitInputProps> {
    render() {
        return (
            <input className="ui-kit-input" />
        )
    }
}