
 
const Description: any = () => {
    let a: string;
    a = "";
    const showDescription = (description: string) => {
        console.log(description)
    }
    return ( <h1>This is Description {showDescription("test")}</h1> );
}
 
export default Description;