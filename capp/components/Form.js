import React, { Fragment } from 'react';
 
import styles from './Content.css';
import './Form.css';
import { num2np, formatnpDate, generateRandomString, adtobs, onlynumnep } from '../utils/date';
import returnHtml from './template/template';
import {FieldArray} from "./forms/Form";
var app= require('electron').remote;
var dialog = app.dialog;
const { ipcRenderer } = require('electron')
export default class FormsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dartaNumber: '',
      dartaMiti: '',
      ajakoMiti: formatnpDate(new Date()),
      nibedakArray: [
        {
          naamThar: '',
          nagariktaNumber: '',
          nagariktaJariMiti: '',
          nagariktaJariJilla: '',
          babuPitakoNaam: '',
          bajeSasuraNaam: ''
        }
      ],
      jaggaArray: [
        {
          naamThar: '',
          nagariktaNumber: '',
          nagariktaJariMiti: '',
          nagariktaJariJilla: '',
          babuPitakoNaam: '',
          bajeSasuraNaam: ''
        }
      ],
      jaggabibaranArray: [
        {
          jaggabibaranJilla: '',
          jaggabibaranGabisa: '',
          jaggabibaranWadaNumberSitNumber: '',
          jaggabibaranKitaNumber: '',
          jaggabibaranKsytrafal: ''
        }
      ],
      message: 'कृपया फारम भर्नुहोस्',
      condition: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleArrayChange = this.handleArrayChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.printPdf = this.printPdf.bind(this);
    this.myfun = this.myfun.bind(this);
    this.resetTable= this.resetTable.bind(this);
  }

  handleArrayChange(key,value){
    this.setState({
      [key]:value
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const fileName= 'परीक्षण-जाँचको-लागि-अन्तिम-पत्र-'+adtobs(new Date())+generateRandomString(7);
    ipcRenderer.send("print-pdf", returnHtml(this.state),fileName);
    this.setState({
      condition: true,
      message:'PDF saved successfully in Documents folder'
    });
    this.props.backEvent();
  }

  componentWillReceiveProps(props) {
    const { condition } = this.props;
    if (props.conditon !== condition) {
      this.setState({
          condition: !this.state.condition
      })
    }
  }

  resetTable(e){
    
    this.setState({
      [e.target.name]:this.state.nibedakArray
    })
  }

  printPdf(){
    ipcRenderer.send("print-pdf", returnHtml(this.state));
   
    // dialog.showSaveDialog({
    //   filters: [
    //     {name: 'PDF Files', extensions: ['pdf']}
    //   ]
    // },(fileName)=>{
    //   if(fileName === undefined){
    //     alert("You didn't save the file");
    //     return;
    //   }
    //   //console.log(String(fileName));
      
    //  // ipcRenderer.send("print-to-pdf",fileName);
      
    // })

  }

  myfun(file){
    if(file!=""){
      console.log('me',file);
      this.setState({
        message:"File is saved in"+String(file)
      })
    }else{
      this.setState({
        message:"Processing"
      })
    }
  }
  render() {
    const { condition, message } = this.state;
    return (
      <div className={styles.Drop} data-tid="Drop">
        {condition ? (
         <Fragment>
            <div className={styles.maincontainer} data-tid="maincontainer">
              <div className={styles.mainhead} data-tid="mainhead">
              <div className="info">{message}</div>
            <div dangerouslySetInnerHTML={{
              __html:returnHtml(this.state)}}>
            </div>
            </div>
            </div>
        </Fragment>
        
        ) : (
          <Fragment>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n body{font-size:1.2em;} input[type='text']{font-family:'Preeti'; }    input:-ms-input-placeholder{\n            font-family: 'Preeti';\n        }\n        input::-moz-placeholder{\n            font-family: 'Preeti';\n        }\n        input::-webkit-input-placeholder{\n            font-family: 'Preeti';\n        }\n        input[type=text],\n        input[type=number],\n        input[type=date],\n        select {\n            width: 90%;\n            padding: 12px 20px;\n            margin: 8px 0;\n            display: block;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            box-sizing: border-box;\n        }\n\n        .form-group {\n            width: 50%;\n        }\n\n        .form-control {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-sitems: center;\n            /* flex-flow: row wrap; */\n        }\n\n        input[type=date] {\n            height: 41px;\n        }\n\n        input[type=submit] {\n            width: 20%;\n            background-color: #4CAF50;\n            color: white;\n            padding: 14px 20px;\n            margin: auto;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n        }\n\n        input[type=submit]:hover {\n            background-color: #45a049;\n        }\n\n        div.container {\n            border-radius: 5px;\n            background-color: #f2f2f2;\n            padding: 20px;\n        }\n\n        .heading {\n            margin-left: 50%;\n        }\n\n        .info {\n            width: 100%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            padding: 14px 20px;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        .infoo {\n            width: 20%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        table,\n        th,\n        td {\n            border: 1px solid black;\n            border-collapse: collapse;\n        }\n\n        th,\n        td {\n            padding: 5px;\n        }\n\n        #button {\n            height: 50px;\n            width: 40px;\n        }\n    "
              }}
            />
            <div className={styles.maincontainer} data-tid="maincontainer">
              <div className={styles.mainhead} data-tid="mainhead">
                <h3
                style={{fontFamily:'Preeti'}}>परीक्षण जाँचको लागि अन्तिम पत्र</h3>
              </div>
              <div className="info">{message}</div>
              <form onSubmit={this.handleSubmit}>
                <br />
                <br />
                <div
                  className="form-control"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}
                >
                  <div className="form-group">
                    <label style={{fontFamily:'Preeti'}} htmlFor="dartaNumber">btf{'{'} g++</label>
                    <input
                      type="text"
                      id="dartaNumber"
                      name="dartaNumber"
                      placeholder="btf{ g++"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{fontFamily:'Preeti'}}htmlFor="dartaMiti">btf{'{'} ldlt</label>
                    <input
                      type="text"
                      id="dartaMiti"
                      name="dartaMiti"
                      placeholder="btf{ ldlt"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <label style={{fontFamily:'Preeti'}}  htmlFor="ajakoMiti">ldlt</label>
                  <input
                    type="text"
                    id="ajakoMiti"
                    onChange={this.handleChange}
                    defaultValue={this.state.ajakoMiti}
                    name="ajakoMiti"
                    placeholder="ldlt"
                  />
                </div>
                <br />
                <div style={{fontFamily:'Preeti'}}  className="infoo">ga]bssf] lja/0f</div>
                <br />
                <br />

                  <FieldArray title={['Gffd,y/','Gfful/stf g+=','Gfful/stf hf/L ldlt','Gfful/stf hf/L lhNnf',
                  'Affa\'÷kltsf] gfd','Affh]÷;;\'/fsf] gfd']} name="nibedakArray" value={this.state.nibedakArray} onChange={this.handleArrayChange} />
                  <br />

                <div>
                </div>
                <br />
                <div style={{fontFamily:'Preeti'}} className="infoo">hUUffwgLsf] lja/0f</div>
                <br />
                <br />
                <input type="button" name="jaggaArray" onClick={this.resetTable} value="Fill as same"/>
                <FieldArray title={['Gffd,y/','Gfful/stf g+=','Gfful/stf hf/L ldlt','Gfful/stf hf/L lhNnf','Affa\'÷kltsf] gfd','Affh]÷;;\'/fsf] gfd']}
                            name="jaggaArray"
                            value={this.state.jaggaArray}
                            onChange={this.handleArrayChange}
                />
                <br />
                <br/>
                <div style={{fontFamily:'Preeti'}} className="infoo">6«fon r]s x'g] hUufsf] laa/0f f</div>
                <br />
                <br />
                <FieldArray title={['lhNnf',
                  'Ufflj;',
                  'Jf8f g++=÷l;6 g++=',
                  'sQf g++',
                  'If]qkmn']}
                            name="jaggabibaranArray"
                            value={this.state.jaggabibaranArray}
                            onChange={this.handleArrayChange}
                />
                <br />
                <br />
                <input type="submit" defaultValue="फारम बुझाउनुहोस्" />
              </form>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}
