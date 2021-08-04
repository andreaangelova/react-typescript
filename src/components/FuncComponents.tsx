import UserComponent from "./UserComponent"

export interface User {
    name: string;
    age: number;
}
 
const FuncComponent: React.FC<{
    name: string;
    age: number | boolean;
    items: string[];
    bff?: {
        name: string,
        surname: string
    },
    [key: string]: any
}> = () => {
    return (<div><h1>this is func</h1><UserComponent name="test" age={22}></UserComponent></div>  );
}
 
export default FuncComponent;