import React from "react";

export interface ClassComponetProps {

}
 
export interface ClassComponetState {
    
}
 
class ClassComponet extends React.Component<{email: string}, any> {
    state = {}
    render() { 
        return ( <h1>class component</h1> );
    }
}
 
export default ClassComponet;