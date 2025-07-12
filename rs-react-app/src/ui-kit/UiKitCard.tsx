import { Component } from "react";

export interface UiKitCardProps {
    title: string;
    description: string;
}

export default class UiKitCard extends Component<UiKitCardProps> {
    render() {
        return (
            <div className="ui-kit-card">
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}