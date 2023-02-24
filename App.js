import React, {useState,useEffect} from "react";
import Editor from "./Editor";
import useLocalStorage from "./useLocalStorage";

function App() {
 const [html,setHtml] =useLocalStorage('html','')
 const [css,setCss] =useLocalStorage('css','')
 const [js,setJs] =useLocalStorage('js','')
 const [srcDoc,setSrcDoc] =useState('')
 
 
 useEffect(() => {
   const timeout = setTimeout(()=>{
     setSrcDoc(`<html>
     <body>${html}</body>
     <style>${css}</style>
     <script>${js}</script>
  </html>
    `) 
   },250)

   return () => clearTimeout(timeout)
 }, [html,css,js])
 
  return (
    <>
    <div className="header">  
    <h3 className="author-name"> hello-coder.io </h3>
    </div>
      <div className="pane top-pane">
        <Editor 
        langauge="xml"
        displayName="HTML"
        onChange={setHtml}
        value={html}
        
        />
        <Editor
        langauge="css"
        displayName="CSS"
        onChange={setCss}
        value={css}

        />
        <Editor 
        lanagauge="javascript"
        displayName="JavaScript"
        value={js}
        onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="Output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
        </div>
    </>
  );
}

export default App;
