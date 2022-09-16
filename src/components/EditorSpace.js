import React from "react";
import Editor from '@monaco-editor/react'
import './../App.css';
const EditorSpace = () => {
    return (
        <div>
            <Editor
            height={window.innerHeight-25}
            width="100%"
            language="cpp"
            theme="vs-dark"
            loading=""
            ></Editor>
        </div>
    ) 
}
export default EditorSpace;