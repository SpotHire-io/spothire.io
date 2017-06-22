import * as React from 'react';
import * as classNames from 'classnames';

interface Props {
    className?: string
    isActive: boolean
}

const BoxConnector: React.StatelessComponent<Props> = ({ className, isActive }) => (
    <div className={classNames('mh5 animate-all bl br bt-0 bb-0', className, {
        'bw1 b--black-20': isActive,
        'b--black-10': ! isActive,
    })}/>
);

BoxConnector.defaultProps = {
    className: 'h1',
};

export default BoxConnector;
