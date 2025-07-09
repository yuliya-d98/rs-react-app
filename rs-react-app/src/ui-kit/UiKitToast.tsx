import { Component, type ReactNode } from "react";

interface UiKitToastProps {
    text: string;
    type?: 'success' | 'error';
}

export default class UiKitToast extends Component<UiKitToastProps> {
    render(): ReactNode {
        return (
            <div className="ui-kit-toast"></div>
        )
    }
}