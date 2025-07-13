import { Component } from "react";
import "./UiKitSpinner.css"

export default class UiKitSpinner extends Component {
    render() {
        return (
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}