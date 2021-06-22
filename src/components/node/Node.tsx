import {Component} from 'react';
import { INodeData } from './NodeData';

import './Node.css';

export class Node extends Component<{node: INodeData}, any> {
    render() {
        
        const {col, isFinish, isStart, isWall, onMouseDown, onMouseEnter, onMouseUp, row } = this.props.node;
        const extraClassName = isFinish? 'node-finish' : isStart ? 'node-start' : isWall ? 'node-wall' : '';

        return (
            <div
                id={`node-${row}-${col}`}
                className={`node ${extraClassName}`}
                onMouseDown={() => onMouseDown(row, col)}
                onMouseEnter={() => onMouseEnter(row, col)}
                onMouseUp={() => onMouseUp()}>
            </div>
        );
    }
}