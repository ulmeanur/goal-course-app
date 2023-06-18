import React from 'react';

// don't change the Component name "App"
export default function App() {
    
    const [isStyled, setIsStyled] = React.useState(false);
    //style={{color:"white"}}
    return (
        <div>
            <p style={{color: !isStyled? "white":"red"}}> Style me!</p>

            <button onClick={() => setIsStyled(!isStyled)}>Toggle style</button>
        </div>
    );
}