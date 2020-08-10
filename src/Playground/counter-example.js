let count=0;
const addOne=()=>
{
    count=count+1;
    getRenderData();
}
const minusOne=()=>{
    console.log('MinusOne');
    if(count>0)
    {
        count=count-1;
        getRenderData();
    }
    else
    {
        alert('Count Cannot be less than 0')
        count=0;
        getRenderData();
    }
}
const reset=()=>{
    console.log('reset');
    count=0;
    getRenderData();
}
const getRenderData=()=>{
    const template2=(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(template2,appRoot);
}
getRenderData();