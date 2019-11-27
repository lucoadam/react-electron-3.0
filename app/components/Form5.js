import React, { Fragment } from 'react';
 
import styles from './Content.css';
import './Form.css';
import { num2np, formatnpDate, generateRandomString, adtobs } from '../utils/date';
import returnHtml from './template/template5';
import {FieldArray} from "./forms/Form";
 var app= require('electron').remote;
var dialog = app.dialog;
const {ipcRenderer} = require('electron');


export default class Form5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dartaNumber: '',
      dartaMiti:'',
      phatbatajaggako:'',behora:'',
      chetrafhal:'',
      ajakoMiti: formatnpDate(new Date()),
      showNibedakArray: true,
      showJaggaArray: true,
      showJaggabibaranArray: true,
      showNirnayaArray: true,
      showBibaranArray: true,
      showMohiArray: true,
      showKaryalayanirmanArray: true,
      showNikayaArray: true,
      nibedakArray: [
        {
          nibedakNaamThar: '',
          nibedakNagariktaNumber: '',
          nibedakNagariktaJariMiti: '',
          nibedakNagariktaJariJilla: '',
          nibedakBabuPitakoNaam: '',
          nibedakBajeSasuraNaam: ''
        }
      ],
      jaggaArray: [
        {
          jaggaNaamThar: '',
          jaggaNagariktaNumber: '',
          jaggaNagariktaJariMiti: '',
          jaggaNagariktaJariJilla: '',
          jaggaBabuPitakoNaam: '',
          jaggaBajeSasuraNaam: ''
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
      nirnayaArray:[{nirnayaNaam:'',nirnayaJilla:'',nirnayaChaNumber:'',nirnayaDate:''}],
      bibaranArray: [{
        jilla: '',
        chaNumber: '',
        Miti: ''
      }],
      mohiArray: [
        {
          mohiBabuPitakoNaam: '',
          mohiBajeSasuraNaam: '',
          mohiNaamThar: '',
          mohiNagariktaJariJilla: '',
          mohiNagariktaJariMiti: '',
          mohiNagariktaNumber: ''
        }
      ],
      karyalayanirmanArray: [
        {
          karyalayanirmanJilla: '',
          karyalayanirmanGabisa: '',
          karyalayanirmanWadaNumberSitNumber: '',
          karyalayanirmanKitaNumber: '',
          karyalayanirmanKsytrafal: '',
          karyalayanirmanKsytrafal1: '',
          karyalayanirmanKsytrafal2: '',
        }
      ],
      nikayaArray: [
        {
          nikayaNaam: '',
          nikayaJilla: '',
          nikayaPatraNumber: '',
          nikayaMiti: ''
        }
      ],
      message: 'कृपया फारम भर्नुहोस्',
      condition: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const fileName= 'ट्रायल-चेक-'+adtobs(new Date())+generateRandomString(7);
    ipcRenderer.send("print-pdf", returnHtml(this.state),fileName);
    this.setState({
      condition: true,
      message:'PDF saved successfully in Documents folder'
    });
    this.props.backEvent();
  }

  handleCheckboxChange = event =>
      this.setState({[event.target.name]: event.target.checked});

  resetTable= (e)=>{
    const d = e.target.name.split('-');
    this.setState({
      [d[0]]:this.state[d[1]]
    })
  };

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

        dialog.showMessageBox(null,{
          type:"info",
          title: 'File saved',
          message: 'File has been saved successfully',
          detail: 'File saved in '+fileName,
          buttons:['Ok']
        },(response)=>{
          console.log(response);
        });
        console.log(res);
      });
    })

  }
  render() {
    const { condition, message } = this.state;
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
    __html: 'tr th,.infoo,.info,h3,label,span{font-family:"Preeti";}'
  }}
/>
            <style
                dangerouslySetInnerHTML={{
                  __html:
                      "\n        body {\n            font-family: 'Preeti';\n            font-size: 20px;\n        }\n        input:-ms-input-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input::-moz-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input::-webkit-input-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input[type=text],\n        input[type=number],\n        input[type=date],\n        select {\n            width: 90%;\n            padding: 12px 20px;\n            margin: 8px 0;\n            display: block;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            box-sizing: border-box;\n        }\n\n        .form-group {\n            width: 50%;\n        }\n\n        .form-control {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            /* flex-flow: row wrap; */\n        }\n\n        input[type=date] {\n            height: 41px;\n        }\n\n        input[type=submit] {\n            width: 20%;\n            background-color: #4CAF50;\n            color: white;\n            padding: 14px 20px;\n            margin: auto;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n        }\n\n        input[type=submit]:hover {\n            background-color: #45a049;\n        }\n\n        div.container {\n            border-radius: 5px;\n            background-color: #f2f2f2;\n            padding: 20px;\n        }\n\n        .heading {\n            margin-left: 48%;\n        }\n\n        .info {\n            width: 100%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            padding: 14px 20px;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        .infoo {\n            width: 20%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        table,\n        th,\n        td {\n            border: 1px solid black;\n            border-collapse: collapse;\n        }\n\n        th,\n        td {\n            padding: 5px;\n        }\n\n        #button {\n            height: 50px;\n            width: 40px;\n        }\n    "
                }}
            />
   <div className={styles.maincontainer} data-tid="maincontainer">
              <div className={styles.mainhead} data-tid="mainhead">
      <h3>6«fon r]s .</h3>
    </div>
    <div className="info">कृपया फारम भर्नुहोस्</div>
    <br />
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
          <label htmlFor="dartanum">lga]bg btf{"{"} g</label>
          <input onChange={this.handleChange}
            type="text"
            id="dartanum"
            name="dartaNumber"
            placeholder="lga]bg btf{ g"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Miti">ldlt</label>
          <input onChange={this.handleChange} type="text" id="Miti" name="dartaMiti" placeholder="ldlt" />
        </div>
      </div>
      <br />
      <br/>
      <input type="checkbox" name="showNibedakArray" onChange={this.handleCheckboxChange}
             checked={this.state.showNibedakArray}/>
      <br />
      <div className="infoo">!= ga]bssf] lja/0f</div>
      <br />
      {this.state.showNibedakArray ? (<FieldArray title={[
          'Gffd,y/',
        'Gfful/stf g+=',
        'Gfful/stf hf/L ldlt',
        'Gfful/stf hf/L lhNnf',
        'Affa\'÷kltsf] gfd',
        'Affh]÷;;\'/fsf] gfd'
      ]}
                                                  name="nibedakArray"
                                                  value={this.state.nibedakArray}
                                                  onChange={this.handleArrayChange}
      />) : ('')}
      <br/>
      <br />
      <input type="checkbox" name="showJaggaArray" onChange={this.handleCheckboxChange}
             checked={this.state.showJaggaArray}/>
      <br />
      <div className="infoo">@= hUUffwgLsf] lja/0f</div>
      <br />
      {this.state.showJaggaArray ? (<FieldArray title={[
        'Gffd,y/', 'Gfful/stf g+=', 'Gfful/stf hf/L ldlt', 'Gfful/stf hf/L lhNnf', 'Affa\'÷kltsf] gfd', 'Affh]÷;;\'/fsf] gfd']}
                                                name="jaggaArray"
                                                value={this.state.jaggaArray}
                                                onChange={this.handleArrayChange}
      />) : ('')}
      <br/>
      <br />
      <input type="checkbox" name="showJaggabibaranArray" onChange={this.handleCheckboxChange}
             checked={this.state.showJaggabibaranArray}/>
      <br />
      <div className="infoo">#= 6«fon r]s x'g] hUufsf] laa/0f </div>
      <br />
      {this.state.showJaggabibaranArray ? (<FieldArray title={[
        'lhNnf',
        'Ufflj;',
        'Jf8f g++=÷l;6 g++=',
        'sQf g++',
        'If]qkmn']}
                                                       name="jaggabibaranArray"
                                                       value={this.state.jaggabibaranArray}
                                                       onChange={this.handleArrayChange}
      />) : ('')}
      <br/>
      <br />
      <input type="checkbox" name="showNirnayaArray" onChange={this.handleCheckboxChange}
             checked={this.state.showNirnayaArray}/>
      <br />
      <div className="infoo">$= 6«fon r]ssf] nflu lg0f{"{"}o lbg] lgsfo</div>
      <br />
      {this.state.showNirnayaArray ? (<FieldArray title={[
        'lgsfosf] gfd',
          'lhNnf',
          'Kfqsf] r=g++',
          'ldlt'
      ]}
                                                  name="nirnayaArray"
                                                  value={this.state.nirnayaArray}
                                                  onChange={this.handleArrayChange}
      />) : ('')}
      <br />
      <br />
      <div className="infoo">%= df]7 /f]Ssfsf] lja/0f </div>
      <br />
      <div className="para">
        ;DalGwt df]7 kmfF6af6{" "}
        <input onChange={this.handleChange} type="text" id="phatbatajaggako1" name="phatbatajaggako" />
        hUufsf] ;|]:tf sfod 5 /f]Ssf b]lvPg egL n]vL cfPsf] .
      </div>
      <br />
      <br />
      <div className="infoo">^= tfd]nLsf] Aoxf]/f M </div>
      <br />
      <div className="para">
        <input onChange={this.handleChange} type="text" id="behora1" name="behora" />
      </div>
      <br />
      <br/>
      <input type="checkbox" name="showBibaranArray" onChange={this.handleCheckboxChange}
             checked={this.state.showBibaranArray}/>
      <br />
      <div className="infoo">&amp;= ;+nUg k|df0f</div>
      <br />
      {this.state.showBibaranArray ? (<FieldArray title={[
        'lhNnf',
        'r g',
        'ldlt'
      ]}
                                                  name="bibaranArray"
                                                  value={this.state.bibaranArray}
                                                  onChange={this.handleArrayChange}
      />) : ('')}
      <br />
      <br />
      <div className="infoo">
        *= sfof{"{"}nosf]=lg0f{"{"}o{" "}
      </div>
      <br />
      <div className="para">
        ldl;n ;+nUg k|df0f tyf lja/0fsf cfwf/df x]bf{"{"} a9 ePsf] If]qkmn
        <input onChange={this.handleChange} type="text" id="chetrafhal" name="chetrafhal" /> sf] lj=;+= @)@$
        ;fn b]lvsf] dfnkf]t b:t'/ a'emL b]xfosf] hUuf b]xfosf b]xfo adf]lhd
        If]qkmn a9 sfod x'g plrt b]vL lg0f{"{"}ofy{"{"} k]z u/]sf] 5' .
      </div>
      <br />
      <input type="checkbox" name="showKaryalayanirmanArray" onChange={this.handleCheckboxChange}
             checked={this.state.showKaryalayanirmanArray}/>
      <br/>
      <div className="infoo">If]qkmn ;+zf]wg x'g] hUufsf] lja/0f</div>
      <br />
      {this.state.showKaryalayanirmanArray ? (<FieldArray title={[
          'lhNnf',
        'Ufflj;',
        'Jf8f g++=÷·l;6 g++=',
        'lsQf g++',
        ';fljssf] If]qkmn',
          'a9 sfod ePsf] If]qkmn',
          '6«fon r]s kl5 sfod ePsf] s"n If]qkmn'
      ]}
                                                          name="karyalayanirmanArray"
                                                          value={this.state.karyalayanirmanArray}
                                                          onChange={this.handleArrayChange}
      />) : ('')}
      <br />
      <br />
      <input type="submit" value="फारम बुझाउनुहोस्"/>
    </form>
  </div>
          </Fragment>
        )}
      </div>
    );
  }
}
