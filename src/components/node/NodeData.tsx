export interface INodeData {
    row: number,
    col: number,
    isFinish: boolean,
    isStart: boolean,
    isWall: boolean,
    onMouseDown: (row: number, col: number) => void,
    onMouseEnter: (row: number, col: number) => void,
    onMouseUp: () => void,
}