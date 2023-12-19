"use client"
import ReactFlow, {
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
    Node,
    Edge,
    addEdge,
    OnConnectStart, OnConnectEnd, useReactFlow, NodeOrigin, Panel, BackgroundVariant, MiniMap
} from 'reactflow';
import 'reactflow/dist/style.css';
import MindMapNode from "@/components/mind-map-node";
import MindMapEdge from "@/components/mind-map-edge";


const nodeTypes = {
    mindMap: MindMapNode,
};
const edgeType = {
    mindMap: MindMapEdge,
};

const nodeOrigin: NodeOrigin = [0.5, 0.5];
export default function Flow() {
    return (
        <div style={{height: '100%'}}>
            <ReactFlow

            >
                <Background variant={BackgroundVariant.Cross}/>
                <Controls/>
                <Panel position={"top-center"}>React Flow Mind Map</Panel>
                <MiniMap nodeStrokeWidth={3}/>
            </ReactFlow>
        </div>
    );
}
