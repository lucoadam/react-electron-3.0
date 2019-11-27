import React, { Component, Fragment } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            cats:[
                {name:"",cast:""}
            ]
        }
        this.onChange=this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleArrayChange = this.handleArrayChange.bind(this)
    }

    handleArrayChange(key,value){
        this.setState({
            [key]:value
        })
    }

    onChange(e){

        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.name)
    }

    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    Fragment{this.state.name}
                    <br/>
                    <Input onChange={this.onChange} items={{type:'text',name:'name'}} />
                    <FieldArray name="cats" value={this.state.cats} onChange={this.handleArrayChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </React.Fragment>
        )
    }
}
export class FieldArray extends Component{
    constructor(props){
        super(props);
        this.first=props.value[0];
        this.state={
            array:this.props.value,
            keys: Object.keys(this.props.value[0]),
        }
        this.addItems = this.addItems.bind(this);
        this.removeItems = this.removeItems.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentWillReceiveProps(props) {
        const { value } = this.props;
        if (props.value !== value) {
          this.setState({
              array:props.value
          })
        }
    }

    addItems(e){
        e.preventDefault();
        const keys = Object.keys(this.first);
        keys.map((key)=>{
            this.first[key]="";
        })
        this.setState((prevState) => ({
            array: [...prevState.array, this.first]
        }))
     
    }

    removeItems(e){
        e.preventDefault();
        let cur = this.state.array;
        if(cur.length!==1) {
            cur.pop();
            this.setState({
                array: cur
            })
            this.props.onChange(this.props.name, this.state.array)
        }else{
            alert('Min items reached')
        }
    }

    onChange(e){
        if(this.state.keys.includes(e.target.className)){
            let arr =[...this.state.array]
            arr[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({array:arr})
        }else{
            this.setState({[e.target.name]:[e.target.value]})
        }
        this.props.onChange(this.props.name,this.state.array)
    }

    render(){
        return(
            <Fragment>
                <div className="form-control">
                    <table>
                <thead>
                <tr style={{fontFamily:'Preeti'}}>
                {this.props.title.map((e,i)=>(
                    <th key={i}>{e}</th>
                ))}
                </tr>
                </thead>
                <tbody>
                {this.state.array.map((each,idx)=>{
                    const keys= Object.keys(each);
                    const values=Object.values(each);
                    return (
                        <tr key={idx} style={{fontFamily:'Preeti'}}>
                            {keys.map((en,i)=>{return(
                                <td key={en+idx+i}>
                                <input type="text"
                                       name={en+'-'+idx}
                                       data-id={idx}
                                       id={en+'-'+idx}
                                       defaultValue={values[i]}
                                       className={en}
                                       onChange={this.onChange}
                                />
                                </td>
                            )})}
                        </tr>
                    )
                })}
                </tbody>
                </table>
            </div>
                <br/>
                <button style={{fontFamily:'san-serif'}} onClick={this.addItems}>+</button>
                <button style={{fontFamily:'san-serif'}}  onClick={this.removeItems}>-</button>
            </Fragment>
        );
    }
}

export class Input extends Component{
    render(){
        return(
            <React.Fragment>
                <label htmlFor={this.props.items.name}>{this.props.items.name.charAt(0).toUpperCase()+this.props.items.name.slice(1)}: </label>
                <input onChange={this.props.onChange} id={this.props.items.name} {...this.props.items}/>
                <br/>
            </React.Fragment>
        )
    }
}

export default App;
