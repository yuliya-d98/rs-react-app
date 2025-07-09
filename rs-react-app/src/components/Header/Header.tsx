import { Component } from "react";
import UiKitButton from "../../ui-kit/UiKitButton";

interface HeaderState {
    hasError: boolean
}

export default class Header extends Component<{}, HeaderState> {
    throwError() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state?.hasError) {
            throw new Error('Error triggered by Error button!');
        }

        return (
            <header>
                I am header
                <UiKitButton label="Lets throw an error!" onClick={() => this.throwError()}/>
            </header>
        )
    }
}