import React, { Fragment } from 'react';
 
import styles from './Content.css';
import './Form.css';
import { num2np, formatnpDate, generateRandomString, adtobs } from '../utils/date';
import returnHtml from './template/template1';
import {FieldArray} from "./forms/Form";
   var app= require('electron').remote;
var dialog = app.dialog;
const { ipcRenderer } = require('electron')



export default class Form1 extends React.Component {
  constructor(props) {
    // console.log(new Date());
    super(props);
    this.state = {
      chaNumber: '',
      chaNumberMiti: formatnpDate(new Date()),
      ajakoMiti: formatnpDate(new Date()),
      dakhilArray: [
        {
          dakhilJilla: '',
          dakhilGabisa: '',
          dakhilKayam: '',
          dakhilKritra: '',
          dakhilKsytrafal: '',
          dakhilKsytrafal1: '',
          dakhilLoda: '',
          dakhilSabik: '',
          dakhilTarfa: ''
        }
      ],
      message: 'कृपया फारम भर्नुहोस्',
      condition: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.printPdf = this.printPdf.bind(this);
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
    if(this.state.chaNumber!='') {
      const fileName = 'दाखिलाको-लागि-अन्तिम-पत्र' + adtobs(new Date()) +this.state.chaNumber;
      ipcRenderer.send("print-pdf", returnHtml(this.state), fileName);
      this.setState({
        condition: true,
        message: 'PDF saved successfully in Documents folder'
      });
      this.props.backEvent();
    }
    //alert('PDF saved successfully in Documents/FormContent folder')
  }

  componentWillReceiveProps(props) {
    const { condition } = this.props;
    if (props.conditon !== condition) {
      this.setState({
          condition: !this.state.condition
      })
    }
  }
  
  printPdf(){
    dialog.showSaveDialog({
      filters: [
        {name: 'PDF Files', extensions: ['pdf']}
      ]
    },(fileName)=>{
      if(fileName === undefined){
        alert("You didn't save the file");
        return;
      }
      pdf.create(returnHtml(this.state),{}).toFile(fileName, function(err, res) {
        if (err) return console.log(err);

        // dialog.showMessageBox(null,{
        //   type:"info",
        //   title: 'File saved',
        //   message: 'File has been saved successfully',
        //   detail: 'File saved in '+fileName,
        //   buttons:['Ok']
        // },(response)=>{
        //   console.log(response);
        // })
        // console.log(res);
      });
    })

  }

  render() {
    const { condition, message ,dakhilArray} = this.state;
    return (
      <div className={styles.Drop} data-tid="Drop">
        {condition ? (
            <Fragment>
              <div dangerouslySetInnerHTML={{
                __html:returnHtml(this.state)}}>
              </div>
            </Fragment>
        ) : (
          <Fragment>
            <style
                dangerouslySetInnerHTML={{
                  __html:
                      "\n        .info, label, .infoo, tr th,input {\n    font-family: 'Preeti';\n    font-size: 20px;\n}\n        input:-ms-input-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n        }\n        input::-moz-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n        }\n        input::-webkit-input-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n        }\n        input[type=text],\n        input[type=number],\n        input[type=date],\n        select {\n            width: 90%;\n            padding: 12px 20px;\n            margin: 8px 0;\n            display: block;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            box-sizing: border-box;\n        }\n\n        .form-group {\n            width: 50%;\n        }\n\n        .form-control {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            /* flex-flow: row wrap; */\n        }\n\n        input[type=date] {\n            height: 41px;\n        }\n\n        input[type=submit] {\n            width: 20%;\n            background-color: #4CAF50;\n            color: white;\n            padding: 14px 20px;\n            margin: auto;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n        }\n\n        input[type=submit]:hover {\n            background-color: #45a049;\n        }\n\n        div.container {\n            border-radius: 5px;\n            background-color: #f2f2f2;\n            padding: 20px;\n        }\n\n        .heading {\n            margin-left: 50%;\n        }\n\n        .info {\n            width: 100%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            padding: 14px 20px;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        .infoo {\n            width: 50%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        table,\n        th,\n        td {\n            border: 1px solid black;\n            border-collapse: collapse;\n        }\n\n        th,\n        td {\n            padding: 5px;\n        }\n\n        #button {\n            height: 50px;\n            width: 40px;\n        }\n    "
                }}
            />
            <div className={styles.maincontainer} data-tid="maincontainer">
              <div className={styles.mainhead} data-tid="mainhead">
                <h3>दाखिलाको लागि अन्तिम पत्र</h3>
              </div>
              <div className="info">कृपया फारम भर्नुहोस्</div>
              <form onSubmit={this.handleSubmit}>
                <br />
                <br />
                <div
                    className="form-control"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                >
                  <div className="form-group">
                    <label htmlFor="ajakoMiti">ldlt</label>
                    <input
                        type="text" onChange={this.handleChange}
                        id="ajakoMiti"
                        name="ajakoMiti"
                        placeholder="ldlt"
                        defaultValue={this.state.ajakoMiti}
                    />
                  </div>
                </div>
                <div
                    className="form-control"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                >
                  <div className="form-group">
                    <label htmlFor="chaNumber">r g</label>
                    <input
                        type="text" onChange={this.handleChange}
                        id="chaNumber"
                        name="chaNumber"
                        placeholder="r g"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="chaNumberMiti">r g ldlt</label>
                    <input
                        type="text" onChange={this.handleChange}
                        id="chaNumberMiti"
                        name="chaNumberMiti"
                        placeholder="r g ldlt"
                    />
                  </div>
                </div>
                <br />
                <br />
                <div className="infoo">
                  e"ld;'wf/ tyf dfnkf]t sfof{"{"}no,l8NnLahf/sf] km{"}"};nf adf]lhd bflvn
                  vf/]h x'g] hUufsf] lja/0f
                </div>
                <br />
                <FieldArray title={[ 'lhNnf',
                  'Ufflj;',
                  'Jf8f g++=÷l;6 g++=',
                  ';fljs lsQf g++',
                  'If]qkmn',
                  'Tfkm{"{"}',
                  'xfnsf] lsQf g++',
                  'If]qkmn',
                  "ca sfod x'g] hUUfwgLsf"]}
                            name="dakhilArray"
                            value={this.state.dakhilArray}
                            onChange={this.handleArrayChange}
                />

                    {/*<tr>*/}
                    {/*  <th colSpan={6}>hUufsf] ;fljs lja/0f</th>*/}
                    {/*  <th colSpan={3}>hUuf tyf hUufwgLsf] xfnsf] lja/0f</th>*/}
                    {/*</tr>*/}

                <br />
                <br />
                <input type="submit" value="kmf/d a'emfpg'xf];\" />
              </form>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}
