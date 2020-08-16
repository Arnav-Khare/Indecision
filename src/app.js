//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class Indecision extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            options:[]
        }
    }
    handleRemoveAll(){
        this.setState(()=>{
            return{
                options:[]
            }
        })
    }
    handleAddOption(option){

        if(!option)
        {
            return 'Enter Valid Text!!!!'
        }
        else if (this.state.options.indexOf(option)>-1)
        {
            return 'GIven option already present in the list!!';
        }

       this.setState((prevState)=>{
           return{
               option:prevState.options.push(option)
           }
       })
    }
    render(){
        const title='Indecision';
        const subtitle='Put you tasks in the Hands of a Computer';
        return(
            <div>
                <Header title={title} subtitle={subtitle}></Header>
                <Buttons arr={this.state.options}></Buttons>
                <Options arr={this.state.options} handleRemoveAll={this.handleRemoveAll}></Options>
                <AddOptions arr={this.state.options} handleAddOption={this.handleAddOption}></AddOptions>
            </div>
        )
    }
}
//Adding Title and Subtitle to my Application ->---------------------------------------------------------------------------------------------------------
class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>
        );
    }
}
//Adding Random Picking Button->-------------------------------------------------------------------------------------------------------------------------


class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.handlePick=this.handlePick.bind(this);
    }
    handlePick(){
        const inde = Math.floor(Math.random()*this.props.arr.length)
        console.log(this.props.arr[inde]);
    }
    render(){
        return(
            <div>
                <button
                    disabled={this.props.arr.length===0} 
                     onClick={this.handlePick}>
                            What Should I Do..???
                </button>
            </div>
        );
    }
}

//Adding Remove All Button and Render Options ->--------------------------------------------------------------------------------------------------------

class Options extends React.Component{
    render(){ 
       return( <div>
        <button onClick={this.props.handleRemoveAll}>Reset All</button> 
        {
            this.props.arr.map((e)=><OptionsComponent key={e} value={e}/>)
        }
        </div>
       );
    }
}

//Adding Options In an Array->--------------------------------------------------------------------------------------------------------------------------


class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOptions=this.handleAddOptions.bind(this);
        this.state={
            error:undefined
        }
    }
    handleAddOptions(e){
        e.preventDefault();
            const error = this.props.handleAddOption(e.target.text.value);
            e.target.text.value=''
        this.setState(()=>{
            return{
                error:error
            }
        })
    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type="text " name="text"></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

//Rendering Each option to the Screen ->----------------------------------------------------------------------------------------------------------------

class OptionsComponent extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.value}</p>
            </div>
        );
    }
}

ReactDOM.render(<Indecision></Indecision>,document.getElementById('app'));