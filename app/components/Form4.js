import React, { Fragment } from 'react';
 
import styles from './Content.css';
import './Form.css';
import { num2np, formatnpDate, generateRandomString, adtobs } from '../utils/date';
import returnHtml from './template/template4';
import {FieldArray} from "./forms/Form";
 var app= require('electron').remote;
var dialog = app.dialog;
const {ipcRenderer} = require('electron');

export default class Form4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dartaNumber: '',
      dartanum:'',
      Miti:'',
      behora1:'',
      phatbatajaggako1:'',
      chaNumberMiti: null,
      ajakoMiti: formatnpDate(new Date()),
      nibedak: null,
      jagga: null,
      mohi: null,
      mohibadford: null,
      nikaya: null,
        showNibedakArray: true,
        showJaggaArray: true,
        showMohiArray: true,
        showJaggabibaranArray: true,
        showMohibadfordArray: true,
        showNikayaArray: true,
      showSipharisArray: true,
      showSanglaganArray:true,
      showJaggaDhaniArray:true,
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
      jaggaDhaniArray: [
        {
          naamThar: '',
          nagariktaNumber: '',
          nagariktaJariMiti: '',
          nagariktaJariJilla: '',
          babuPitakoNaam: '',
          bajeSasuraNaam: ''
        }
      ],
        sipharisArray: [
            {
                naam: '',
                odaNumber: '',
                jilla: '',
                chaNumber: '',
                miti: '',
            }
        ],
        jaggabibaranArray: [
            {
                jilla: '',
                gabisa: '',
                wadaNumberSitNumber: '',
                kitaNumber: '',
                chetrafhal: ''
            }
        ],
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
      mohibadfordArray: [
        {
          mohibadfordJilla: '',
          mohibadfordGabisa: '',
          mohibadfordWadaNumberSitNumber: '',
          mohibadfordKitaNumber: '',
          mohibadfordKsytrafal: '',
          mohibadfordMohiNaam: ''
        }
      ],
      showKaryalayaNirmanArray:true,
      karyalayaNirmanArray:[{
        jilla:'',
        gabisa:'',
        oda:'',
        kirta:'',
        chetrafhal:''
      }],
        sanglangaPramandArray: [{
            nagarpalika: '',
            odanumber: '',
            chanumber: '',
            mitti: ''
        }],
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArrayChange = this.handleArrayChange.bind(this);
    this.printPdf = this.printPdf.bind(this)
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
    const fileName= 'जग्गाधनी-पुर्जा-प्रतिलीपि-'+adtobs(new Date())+generateRandomString(7);
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
        {condition ? (<Fragment>
           
          <div dangerouslySetInnerHTML={{
            __html:returnHtml(this.state)}}>
          </div>
        </Fragment>):(
            <Fragment>
                <div>
                    <link href="./../font/stylesheet.css" rel="stylesheet"/>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n        body {\n            font-family: 'Preeti';\n            font-size: 20px;\n        }\n        input:-ms-input-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input::-moz-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input::-webkit-input-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input[type=text],\n        input[type=number],\n        input[type=date],\n        select {\n            width: 90%;\n            padding: 12px 20px;\n            margin: 8px 0;\n            display: block;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            box-sizing: border-box;\n        }\n\n        .form-group {\n            width: 50%;\n        }\n\n        .form-control {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            /* flex-flow: row wrap; */\n        }\n\n        input[type=date] {\n            height: 41px;\n        }\n\n        input[type=submit] {\n            width: 20%;\n            background-color: #4CAF50;\n            color: white;\n            padding: 14px 20px;\n            margin: auto;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n        }\n\n        input[type=submit]:hover {\n            background-color: #45a049;\n        }\n\n        div.container {\n            border-radius: 5px;\n            background-color: #f2f2f2;\n            padding: 20px;\n        }\n\n        .heading {\n            margin-left: 50%;\n        }\n\n        .info {\n            width: 100%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            padding: 14px 20px;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        .infoo {\n            width: 20%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        table,\n        th,\n        td {\n            border: 1px solid black;\n            border-collapse: collapse;\n        }\n\n        th,\n        td {\n            padding: 5px;\n        }\n\n        #button {\n            height: 50px;\n            width: 40px;\n        }\n    "
                        }}
                    />
                    <div className="container">
                        <div className="heading">
                            <h3>l6Kk0fL cfb]z</h3>
                        </div>
                        <div className="info">कृपया फारम भर्नुहोस्</div>
                        <br/>
                        <div className="info">
                            hUufwgL btf{"{"} k|df0f k'hf{"{"}sf] k|ltnLkL .
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <br/>
                            <br/>
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
                                    <input
                                      onChange={this.handleChange}
                                        type="text"
                                        id="dartanum"
                                        name="dartanum"
                                        placeholder="lga]bg btf{ g"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Miti">ldlt</label>
                                    <input type="text" onChange={this.handleChange} id="Miti" name="Miti"
                                           placeholder="ldlt"/>
                                </div>
                            </div>
                            <br/>
                            <input type="checkbox" name="showNibedakArray" onChange={this.handleCheckboxChange}
                                   checked={this.state.showNibedakArray}/>
                            <br/>
                            {this.state.showNibedakArray ? (<Fragment>
                                <div className="infoo">!= lga]bssf] lja/0f</div>
                                <br/>

                                <FieldArray title={['Gffd,y/',
                                    'Gfful/stf g+=',
                                    'Gfful/stf hf/L ldlt',
                                    'Gfful/stf hf/L lhNnf',
                                    "Affa'÷kltsf] gfd",
                                    "Affh]÷;;'/fsf] gfd"]}
                                            name="nibedakArray"
                                            value={this.state.nibedakArray}
                                            onChange={this.handleArrayChange}
                                /> <br/>
                                <br/>
                            </Fragment>) : (<Fragment>lga]bssf] lja/0f<br/></Fragment>)}
                            <br/>
                            <input type="checkbox" name="showJaggaArray" onChange={this.handleCheckboxChange}
                                   checked={this.state.showJaggaArray}/>
                            <br/>
                            {this.state.showJaggaArray ? (<Fragment>
                                <div className="infoo">@= hUUffwgLsf] lja/0f</div>
                                <br/>

                                <FieldArray title={['Gffd,y/',
                                    'Gfful/stf g+=',
                                    'Gfful/stf hf/L ldlt',
                                    'Gfful/stf hf/L lhNnf',
                                    "Affa'÷kltsf] gfd",
                                    "Affh]÷;;'/fsf] gfd"]}
                                            name="jaggaArray"
                                            value={this.state.jaggaArray}
                                            onChange={this.handleArrayChange}
                                /> <br/>
                                <br/>
                            </Fragment>) : (<Fragment>@= hUUffwgLsf] lja/0f<br/></Fragment>)}
                            <br/>
                            <input type="checkbox" name="showJaggabibaranArray" onChange={this.handleCheckboxChange}
                                   checked={this.state.showJaggabibaranArray}/>
                            <br/>
                            {this.state.showJaggabibaranArray ? (<Fragment>
                                <div className="infoo">#= 3/ sfod x'g] hUufsf] lja/0f</div>
                                <br/>

                                <FieldArray title={['lhNnf',
                                    'Ufflj;',
                                    'Jf8f g++=÷l;6 g++=',
                                    'lsQf g++',
                                    'If]qkmn']}
                                            name="jaggabibaranArray"
                                            value={this.state.jaggabibaranArray}
                                            onChange={this.handleArrayChange}
                                /> <br/>
                                <br/>
                            </Fragment>) : (<Fragment>#= 3/ sfod x'g] hUufsf] lja/0f<br/></Fragment>)}
                            <br/>
                            <input type="checkbox" name="showSipharisArray" onChange={this.handleCheckboxChange}
                                   checked={this.state.showSipharisArray}/>
                            <br/>
                            {this.state.showSipharisArray ? (<Fragment>
                                <div className="infoo">$= hUufwgL btf{"{"} k|df0f k'hf{"{"}sf] k|ltlnkLsf] nflu l;kmfl/;
                                    lbg]
                                </div>
                                <br/>

                                <FieldArray title={['lgsfosf] gfd',
                                    'cf]8f gDa/',
                                    'lhNnf',
                                    'Kfqsf] r=g++',
                                    'ldlt']}
                                            name="sipharisArray"
                                            value={this.state.sipharisArray}
                                            onChange={this.handleArrayChange}
                                /> <br/>
                                <br/>
                            </Fragment>) : (<Fragment>$= hUufwgL btf{"{"} k|df0f k'hf{"{"}sf] k|ltlnkLsf] nflu l;kmfl/;
                                lbg]<br/></Fragment>)}
                            <br/>
                            <br/>
                            <div className="infoo">%= df]7 /f]Ssfsf] lja/0f</div>
                            <br/>
                            <div>
                                ;DalGwt df]7 kmfF6af6{" "}
                                <input type="text" onChange={this.handleChange} id="phatbatajaggako1"
                                       name="phatbatajaggako1"/>
                                hUufsf] ;|]:tf sfod 5 /f]Ssf b]lvPg egL n]vL cfPsf] .
                            </div>
                            <br/>
                            <br/>
                            <div className="infoo">^= tfd]nLsf] Aoxf]/f M</div>
                            <br/>
                            <div>
                                <input type="text" onChange={this.handleChange} id="behora1" name="behora1"/>
                            </div>
                            <br/>
                          <input type="checkbox" name="showSanglaganArray" onChange={this.handleCheckboxChange}
                                 checked={this.state.showSanglaganArray}/>
                          <br/>
                          {this.state.showSanglaganArray ? (<Fragment>
                            <div className="infoo">&amp;= ;+nUg k|df0f
                            </div>
                            <br/>

                            <FieldArray title={['ufpFkflnsf÷gu/kflnsf',
                              'j8f g++=',
                              'r g++=',
                              'ldlt']}
                                        name="sanglangaPramandArray"
                                        value={this.state.sanglangaPramandArray}
                                        onChange={this.handleArrayChange}
                            /> <br/>
                            <br/>
                          </Fragment>) : (<Fragment>&amp;= ;+nUg k|df0f<br/></Fragment>)}
                          <br/>
                            <br/>
                            <div className="infoo">
                                *= sfof{"{"}nosf]=lg0f{"{"}o{" "}
                            </div>
                            <br/>
                            <div>
                                ldl;n ;+nUg k|df0f tyf lja/0fsf cfwf/df x]bf{"{"} b]xfosf] hUuf b]xfosf
                                AolQmsf gfddf hUufwgL btf{"{"} k|df0f k'hf{"{"}sf] k|ltlnkL hf/L x'g
                                plrt b]vL lg0f{"{"}ofy{"{"} k]z u/]sf] 5' .
                            </div>
                            <br/>
                          <br/>
                          <input type="checkbox" name="showKaryalayaNirmanArray" onChange={this.handleCheckboxChange}
                                 checked={this.state.showKaryalayaNirmanArray}/>
                          <br/>
                          {this.state.showKaryalayaNirmanArray ? (<Fragment>
                            <div className="infoo">hUufsf] lja/0f
                            </div>
                            <br/>

                            <FieldArray title={[
                              'lhNnf',
                              'Ufflj;',
                              'Jf8f g++=÷l;6 g++=',
                              'lsQf g++',
                              'If]qkmn',
                            ]}
                                        name="karyalayaNirmanArray"
                                        value={this.state.karyalayaNirmanArray}
                                        onChange={this.handleArrayChange}
                            /> <br/>
                            <br/>
                          </Fragment>) : (<Fragment>hUufsf] lja/0f<br/></Fragment>)}
                          <br/>
                          <input type="checkbox" name="showJaggaDhaniArray" onChange={this.handleCheckboxChange}
                                 checked={this.state.showJaggaDhaniArray}/>
                          <br/>
                          {this.state.showJaggaDhaniArray ? (<Fragment>
                            <div className="infoo">hUufwgLsf] laa/0f</div>
                            <br/>

                            <FieldArray title={['Gffd,y/',
                              'Gfful/stf g+=',
                              'Gfful/stf hf/L ldlt',
                              'Gfful/stf hf/L lhNnf',
                              "Affa'÷kltsf] gfd",
                              "Affh]÷;;'/fsf] gfd"]}
                                        name="jaggaDhaniArray"
                                        value={this.state.jaggaDhaniArray}
                                        onChange={this.handleArrayChange}
                            /> <br/>
                            <br/>
                          </Fragment>) : (<Fragment>hUufwgLsf] laa/0f<br/></Fragment>)}
                          <br/>
                            <br/>
                            <input type="submit" value="फारम बुझाउनुहोस्"/>
                        </form>
                    </div>
                </div>

            </Fragment>
        )}
      </div>);
  }
}
