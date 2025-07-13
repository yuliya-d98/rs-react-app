import { Component } from "react";
import UiKitButton from "../../ui-kit/UiKitButton";

interface ThrowErrorButtonState {
    hasError: boolean;
}

export default class ThrowErrorButton extends Component<{}, ThrowErrorButtonState> {
    state = { hasError: false };

    throwError() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            throw new Error('Error triggered by Error button!');
        }

        return (
            <UiKitButton label="Lets throw an error!" onClick={() => this.throwError()}/>
        )
    }
}