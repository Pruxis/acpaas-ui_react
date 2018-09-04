// @flow
import React, { Component } from 'react';

type Props = {
    /** Modal footer */
    children?: any
}

class ModalFooter extends Component<Props> {
    render() {
        const { children } = this.props;
        return (
            <div class="m-modal__footer">
                {children}
            </div>
        );
    }
}

export default ModalFooter;