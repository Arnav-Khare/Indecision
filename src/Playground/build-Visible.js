class Visibilty extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibility=this.handleVisibility.bind(this);
        this.state={
            visible: false
        }
    }
    handleVisibility(){
        this.setState((prevState)=>{
            if(prevState.visible)
            {
                return{
                    visible:false
                }
            }
            else
            {
                return{
                    visible:true
                }
            }
    });
}
    render(){
        return(
            <div>
                <h1>Visibilty!!!</h1>
                <button onClick={this.handleVisibility}>{this.state.visible?'Hide Details':'Show Details'}</button>
                {this.state.visible?<p>Content Shown!!</p>:''}
            </div>
        )
    }
}
ReactDOM.render(<Visibilty />,document.getElementById('app'));



// let flag=false;
// const appRoot=document.getElementById('app');

// const showDetails=()=>{
//     if(flag)
//     {
//         flag=false;
//     }
//     else
//     {
//         flag=true;
//     }
//     jarvis();
// }
// const jarvis=()=>{
//     const template=(
//         <div>
//             <h1>Visibilty Toggle</h1>
//             <button onClick={showDetails}>{flag?'Hide Details!!':'Show Details!!!'}</button>
//             {flag? <p>You can Now See the Details!!!</p>:undefined }
//         </div>
//     )
    
//     ReactDOM.render(template,appRoot);
// }

// jarvis();   