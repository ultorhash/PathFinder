export class Dijkstra {
    private static instance: Dijkstra;
    private constructor() {}

    public static getInstance(): Dijkstra {
        if (!Dijkstra.instance) Dijkstra.instance = new Dijkstra();          
        return Dijkstra.instance;
    }

    calculate(grid: any, startNode: any, finishNode: any) {
        const visitedNodesInOrder = [];
        const notVisitedNodes = this.getAllNodes(grid);

        startNode.distance = 0;

        while (notVisitedNodes.length) {

            this.sortNodesByDistance(notVisitedNodes);
            const closestNode = notVisitedNodes.shift();

            if (closestNode.isWall) continue;
            if (closestNode.distance === Infinity) return visitedNodesInOrder;

            closestNode.isVisited = true;
            visitedNodesInOrder.push(closestNode);
            
            if (closestNode === finishNode) return visitedNodesInOrder;
            this.updateUnvisitedNeighbors(closestNode, grid);
        }
    }

    sortNodesByDistance(unvisitedNodes: any) {
        unvisitedNodes.sort((nodeA: any, nodeB: any) => nodeA.distance - nodeB.distance);
    }

    updateUnvisitedNeighbors(node: any, grid: any) {
        const unvisitedNeighbors = this.getUnvisitedNeighbors(node, grid);
        for (const neighbor of unvisitedNeighbors) {
            neighbor.distance = node.distance + 1;
            neighbor.previousNode = node;
        }
    }

    getUnvisitedNeighbors(node: any, grid: any) {
        const neighbors = [];
        const {col, row} = node;
        if (row > 0) neighbors.push(grid[row - 1][col]);
        if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
        if (col > 0) neighbors.push(grid[row][col - 1]);
        if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
        return neighbors.filter(neighbor => !neighbor.isVisited);
    }

    getAllNodes(grid: any) {
        const nodes = [];
        for (const row of grid) {
            for (const node of row) {
                nodes.push(node);
            }
        }   
        return nodes;
    }

    getNodesInShortestPathOrder(finishNode: any) {
        const nodesInShortestPathOrder = [];
        let currentNode = finishNode;
        while (currentNode !== null) {
            nodesInShortestPathOrder.unshift(currentNode);
            currentNode = currentNode.previousNode;
        }
        return nodesInShortestPathOrder;
    }
}