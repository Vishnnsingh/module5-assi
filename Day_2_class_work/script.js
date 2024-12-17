const MyReactApp =()=>{


    return(
      
        <div>
            <h1>Learn web development</h1>

            <p>Welcome to the MDN learning area. This set of articles aims to guide complete <pre></pre>beginners to web development with all that they need to start coding websites.</p>
            <br></br>
            <p>The aim of thius area of MDN is not to take you from "beginner" to "expert" but to <pre></pre>take you from "beginner" to "comfortable". From there, you should be able to start <pre></pre> making your way, learning from  <a href="">the rest of MDN</a>, and other intermediate to <pre></pre> advanced resources that assume a lot of previous knowledge. </p> <br></br>
            <p>If you are a complete beginner, web development can be challenging -- we will hold <pre></pre> your hand and provide enough details for you to feel comfortable and learn the topics <pre></pre> properly. You should feel at home whether you are a student learning web <pre></pre>development (on your own or as part of a class), a teacher looking for class <pre></pre> materials, a hobbyist, or someone who just wants to understand more about how <pre></pre> web technologies work.</p>
            
        </div>
      
      
      
    )
}






const rootDiv = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootDiv);
reactRoot.render(<MyReactApp></MyReactApp>);