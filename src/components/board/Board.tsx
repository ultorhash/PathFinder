import { Component } from 'react';
import { Node } from '../node/Node';
import { Dijkstra } from '../../algorithm/Dijkstra';
import { INodeData } from '../node/NodeData';

import { StyledBoard, StyledGrid, StyledField, StyledGridContainer } from './BoardStyle';

const startNodeRow = 20;
const startNodeCol = 16;
const finishNodeRow = 8;
const finishNodeCol = 60;

const dijkstra = Dijkstra.getInstance();

export class Board extends Component<{start: boolean, changeRender: () => void}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            board: [],
            isMousePressed: false,
        };
    };

    componentDidMount() {
        document.title = "Path Finder";
        const board = this.getStartBoard();
        this.setState({board});
    };

    handleMouseDown(row: number, col: number) {
        const newGrid = this.getNewGridWithWall(this.state.board, row, col);
        this.setState({board: newGrid, isMousePressed: true});
    };

    handleMouseEnter(row: number, col: number) {
        if (!this.state.isMousePressed) return;
        const newGrid = this.getNewGridWithWall(this.state.board, row, col);
        this.setState({board: newGrid});
    };

    handleMouseUp() {
        this.setState({isMousePressed: false});
    };

    animate(visitedNodesInOrder: any, nodesInShortestPathOrder: any) {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
                setTimeout(() => {
                    this.shortestPath(nodesInShortestPathOrder);
                }, 2 * i);
                return;
            }
            setTimeout(() => {
                const node = visitedNodesInOrder[i];
                let x = (document.getElementById(`node-${node.row}-${node.col}`) as HTMLElement);
                if (x !== null) x.className = 'node node-visited';
            }, 2 * i);
        }
    };

    async shortestPath(nodesInShortestPathOrder: any) {
        await new Promise(resolve => {
            for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
                setTimeout(() => {
                    const node = nodesInShortestPathOrder[i];
                    (document.getElementById(`node-${node.row}-${node.col}`) as HTMLElement).className =
                        'node node-shortest-path';
                }, 5 * i);
            };
            setTimeout(() => {
                this.props.changeRender();
            }, 2000);
        });
    };

    findPath() {
        const { board } = this.state;
        const startNode = board[startNodeRow][startNodeCol];
        const finishNode = board[finishNodeRow][finishNodeCol];
        const visitedNodesInOrder =  dijkstra.calculate(board, startNode, finishNode);
        const nodesInShortestPathOrder = dijkstra.getNodesInShortestPathOrder(finishNode);
        this.animate(visitedNodesInOrder, nodesInShortestPathOrder);
    };

    getStartBoard = () => {
        const board = [];
            for (let row = 0; row < 35; row++) {
                const currentRow = [];
                for (let col = 0; col < 70; col++) {
                    currentRow.push(this.createNewNode(col, row));
                }
                board.push(currentRow);
            }
        return board;
    };

    createNewNode = (col: number, row: number) => {
        return {
            row,
            col,
            isStart: row === startNodeRow && col === startNodeCol,
            isFinish: row === finishNodeRow && col === finishNodeCol,
            distance: Infinity,
            isVisited: false,
            isWall: false,
            previousNode: null,
        };
    };

    getNewGridWithWall = (board: any, row: number, col: number) => {
        const newBoard = board.slice();
        const node = newBoard[row][col];
        const newNode = {
            ...node,
            isWall: !node.isWall,
        };
        newBoard[row][col] = newNode;
        return newBoard;
    };

    render() {

        const { board } = this.state;
  
        return (
            <StyledBoard>      
                <StyledField>
                    {board.map((row: any, rowIdx: any) => {
                        return (
                            <StyledGridContainer>
                                <StyledGrid key={rowIdx}>
                                    {row.map((node: any, nodeIdx: any) => {
                                        const {row, col, isFinish, isStart, isWall} = node;
                                        const x: INodeData = {
                                            col: col,
                                            isFinish: isFinish,
                                            isStart: isStart,
                                            isWall: isWall,
                                            onMouseDown: (row: any, col: any) => this.handleMouseDown(row, col),
                                            onMouseEnter: (row: any, col: any) => this.handleMouseEnter(row, col),
                                            onMouseUp: () => this.handleMouseUp(),
                                            row: row
                                        }
                                        
                                        return (
                                            <Node node={x}></Node>
                                        );
                                    })}
                                </StyledGrid>
                            </StyledGridContainer>
                        );
                    })}
                </StyledField>
                {this.props.start && this.findPath()}
            </StyledBoard>
        );
    };
};