import { Component } from "react";

interface UiKitButtonProps {
    label: string;
    type?: 'filled' | 'outlined';
    color?: 'primary' | 'error';
    onClick: () => void;
}

export default class UiKitButton extends Component<UiKitButtonProps> {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.label}</button>
        )
    }
}