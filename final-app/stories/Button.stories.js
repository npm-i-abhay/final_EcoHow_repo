import React from 'react';
import Button from '../comps/Button';
export default {
    title:"Button",
    component:<Button />
}

export const DefaultButton = () =>( <Button 
    text="Next Section"
/>
);

export const quizButton = () => (<Button 
    text="Quiz" 
    bgcolor="#B5C6C9"
    />
);