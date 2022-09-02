import React from "react";
import Editor from '@monaco-editor/react'
const EditorSpace = () => {
    return (
        <div>
            <Editor
            height="90vh"
            width="100%"
            defaultLanguage="C++"
            theme="vs-dark"
            ></Editor>
        </div>
    ) 
}
export default EditorSpace;