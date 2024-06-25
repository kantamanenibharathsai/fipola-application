import { Component } from "react";

interface DebounceProps<T> {
    value: T;
    delay?: number;
    onDebouncedChange: (debouncedValue: T) => void;
    // children: (debouncedValue: T) => ReactNode;
}

interface DebounceState<T> {
    debouncedValue: T;
}

class Debounce<T> extends Component<DebounceProps<T>, DebounceState<T>> {
    private timeoutId: NodeJS.Timeout | null = null;

    constructor(props: DebounceProps<T>) {
        super(props);
        this.state = {
            debouncedValue: props.value,
        };
    }

    componentDidUpdate(prevProps: DebounceProps<T>) {
        const { value, delay = 500, onDebouncedChange } = this.props;
        if (prevProps.value !== value) {
            if (this.timeoutId) clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                this.setState({ debouncedValue: value }, () => {
                    onDebouncedChange(this.state.debouncedValue);
                });
            }, delay);
        }
    }

    componentWillUnmount() {
        if (this.timeoutId) clearTimeout(this.timeoutId);
    }

    render() {
        return <></>;
    }
}

export default Debounce;
