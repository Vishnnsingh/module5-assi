const MyReactApp =()=>{


    return(
      
        <div>
            <h2>Topics covered</h2>
            <p>The following is a list of all the topics we cover in the MDN learning area</p>
            <a href="">Getting started with the web</a>
            
            <p>provides a practical introduction to web development for complete beginners</p> <br></br>
            
            <a href="">HTML--Structuring the web</a>
            <p>HTML is the language that we use to structure the different parts of our content <pre></pre> and define what their meaning or purpose is. This topics teches HTML in detail.</p><br></br>
            
            <a href="">CSS--Styling the web</a>
            <p>CSS is the language that we use to control our web content's style and layout, as <pre></pre> well as adding behavior like animation. This topic provides comprehensive <pre></pre>coverage of CSS.</p>
        </div>
      
      
      
    )
}






const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);
reactRoot.render(<MyReactApp></MyReactApp>);