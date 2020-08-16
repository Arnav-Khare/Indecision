class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleAdd=this.handleAdd.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.handleSubtract=this.handleSubtract.bind(this);
        this.state={
            count:0
        }
    }
    handleAdd(){
        this.setState((prevState)=>{
            return{
              count:prevState.count+1   
            };
        });
    }
    handleSubtract(){
        this.setState((prevState)=>{
            return{
                count:prevState.count-1
            };
        });
    }
    handleReset(){
        console.log('Reseting')
    }
    render(){
        return(
            <div>
                <h1>Count :{this.state.count}</h1>
                <button onClick={this.handleAdd}>+1</button>
                <button onClick={this.handleSubtract}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/>,document.getElementById('app'))



// let count=0;
// const addOne=()=>
// {
//     count=count+1;
//     getRenderData();
// }
// const minusOne=()=>{
//     console.log('MinusOne');
//     if(count>0)
//     {
//         count=count-1;
//         getRenderData();
//     }
//     else
//     {
//         alert('Count Cannot be less than 0')
//         count=0;
//         getRenderData();
//     }
// }
// const reset=()=>{
//     console.log('reset');
//     count=0;
//     getRenderData();
// }
// const getRenderData=()=>{
//     const template2=(
//         <div>
//             <h1>Count:{count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(template2,appRoot);
// }
// getRenderData();