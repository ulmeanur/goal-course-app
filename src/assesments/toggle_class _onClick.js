import React from 'react';

// don't change the Component name "App"
export default function App() {
    
    const [isStyled, setIsStyled] = React.useState(false);

    return (
        <div>
            <p className={isStyled?"active":""}> Style me!</p>
            <button onClick={() => setIsStyled(!isStyled)}>Toggle style</button>
        </div>
    );
}