import * as React from 'react';
import * as classNames from 'classnames';

interface Props {
    className?: string
    isNarrow?: boolean
    children?: React.ReactNode
    type?: 'neutral' | 'positive' | 'negative'
}

const BasicTag: React.StatelessComponent<Props> = ({ type, children, className, isNarrow }) => {
    let tagClasses = classNames({
        'dib f6 ba b--dashed br4': true,
        'gray': type === 'neutral',
        'dark-green': type === 'positive',
        'dark-red': type === 'negative',
        'pv2 ph3': ! isNarrow,
        'pv1 ph2': isNarrow,
        [className]: true
    });

    return <span className={tagClasses}>{children}</span>;
};

BasicTag.defaultProps = {
    className: '',
    isNarrow: false,
    type: 'neutral',
};

export default BasicTag;
