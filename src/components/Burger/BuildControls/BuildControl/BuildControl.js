import React from 'react';
import buildControlModules from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={buildControlModules.BuildControl}>
            <div className={buildControlModules.Label}>{props.label}</div>
            <button
                className={buildControlModules.Less}
                onClick={props.removed}
                disabled={props.disabled}>
                Less
            </button>
            <button
                className={buildControlModules.More}
                onClick={props.added}>
                More
            </button>
        </div>
    )
};

export default buildControl;
