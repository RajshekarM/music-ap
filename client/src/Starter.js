


function Starter()
{
    return(<div>
        <h1 >Loading.....................</h1>
        <progress className="progress is-small is-primary" max="100">15%</progress>
        <progress className="progress is-danger" max="100">30%</progress>
        <progress className="progress is-medium is-dark" max="100">45%</progress>
        <progress className="progress is-large is-info" max="100">60%</progress>
    </div>);
    
}

export default Starter;