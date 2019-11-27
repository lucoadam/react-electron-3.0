import React, { Fragment } from 'react';
 
import styles from './Content.css';
import './Form.css';
import { num2np, formatnpDate, generateRandomString, adtobs } from '../utils/date';
import returnHtml from './template/template2';
import {FieldArray} from "./forms/Form";
                   var app= require('electron').remote;
var dialog = app.dialog;
const { ipcRenderer } = require('electron')

export default class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dartaNumber: '',
      dartaMiti: '',
      ajakoMiti: formatnpDate(new Date()),
      phatBataJaggaKo:'',
      behora:'',
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
      mohiArray: [
        {
          mohiNaamThar: '',
          mohiNagariktaNumber: '',
          mohiNagariktaJariMiti: '',
          mohiNagariktaJariJilla: '',
          mohiBabuPitakoNaam: '',
          mohiBajeSasuraNaam: '',
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
      nikayaArray: [
        {
          nikayaJillaAdalat: '',
          nikayaUcchaAdalat: '',
          nikayaSarbacchaAdalat:'',
          nikayaJilla:'',
          nikayaPatraNumber: '',
          nikayaMiti: ''
        }
      ],
      kirtaArray: [
        {
          kirtaJilla:'',
          kirtaGabisa:'',
          kirtaOda:'',
          kirtaSabik:'',
          kitraKirtaNumber:'',
          kitraChetrafal:''
        }
      ],
      dakhilArray:[{
        dakhilJilla:'',
        dakhilGabisa:'',
        dakhilOda:'',
        dakhilSabik:'',
        dakhilChetrafal:'',
        dakhilTarfha:'',
        dakhilKirta:'',
        dakhilChetrafal1:'',
        dakilKayam:''}
        ],
      sanglangaPramandArray:[{
        sanglangaPramandJillaAdalat:'',
        sanglangaPramandUcchaAdalat:'',
        sanglangaPramandSarbachhaAdalat:'',
        sanglangaPramandChaNumber:'',
        sanglangaPramandMiti:'',
        sanglangaChalanPurji:''
      }],
      naam:'',
      jillaAdalat1:'',uchhaAdalat1:'',sarbacchaAdalat1:'',
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

  resetTable= (e)=>{
    const d = e.target.name.split('-');
    this.setState({
      [d[0]]:this.state[d[1]]
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

    handleSubmit(e) {
    e.preventDefault();
    const fileName= 'अदालतको-फैसला-बमोजिम-बाँडफाँड-'+adtobs(new Date())+generateRandomString(7);
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

  printPdf(){
    ipcRenderer.send("print-pdf", returnHtml(this.state));
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
                      "\n        .info, label, .infoo, tr th, input, h3, tbody tr td, div.para {\n    font-family: 'Preeti';\n    font-size: 20px;\n}\n        input:-ms-input-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input::-moz-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input::-webkit-input-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input[type=text],\n        input[type=number],\n        input[type=date],\n        select {\n            width: 90%;\n            padding: 12px 20px;\n            margin: 8px 0;\n            display: block;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            box-sizing: border-box;\n        }\n\n        .form-group {\n            width: 50%;\n        }\n\n        .form-control {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            /* flex-flow: row wrap; */\n        }\n\n        input[type=date] {\n            height: 41px;\n        }\n\n        input[type=submit] {\n            width: 20%;\n            background-color: #4CAF50;\n            color: white;\n            padding: 14px 20px;\n            margin: auto;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n        }\n\n        input[type=submit]:hover {\n            background-color: #45a049;\n        }\n\n        div.container {\n            border-radius: 5px;\n            background-color: #f2f2f2;\n            padding: 20px;\n        }\n\n        .heading {\n            margin-left: 48%;\n        }\n\n        .info {\n            width: 100%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            padding: 14px 20px;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        .infoo {\n            width: 20%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        table,\n        th,\n        td {\n            border: 1px solid black;\n            border-collapse: collapse;\n        }\n\n        th,\n        td {\n            padding: 5px;\n        }\n\n        #button {\n            height: 50px;\n            width: 40px;\n        }\n    "
                }}
            />
            <div className={styles.maincontainer} data-tid="maincontainer">
              <div className={styles.mainhead} data-tid="mainhead">
                {/* <h3>l6Kk0fL cfb]z</h3> */}
                <h3>अदालतको फैसला बमोजिम बाँडफाँड</h3>
              </div>
              <div className="info">{this.state.message}</div>
              <br />
              {/* <div className="info">cbfntsf] km{"}"};nf adf]lhd afF8kmfF8 .</div> */}
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
                    <label htmlFor="dartaNumber">lga]bg btf{"{"} g</label>
                    <input
                        type="text" onChange={this.handleChange}
                        id="dartaNumber"
                        name="dartaNumber"
                        placeholder="lga]bg btf{ g"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dartaMiti">ldlt</label>
                    <input
                        type="text" onChange={this.handleChange}
                        id="dartaMiti"
                        name="dartaMiti"
                        placeholder="ldlt"
                        defaultValue = {formatnpDate(new Date())}
                    />
                  </div>
                </div>
                <br />
                <br />
                <div className="infoo">!= ga]bssf] lja/0f</div>
                <br />
                <FieldArray title={[ 'Gffd,y/',
                  'Gfful/stf g+=',
                  'Gfful/stf hf/L ldlt',
                  'Gfful/stf hf/L lhNnf',
                  "Affa'÷·kltsf] gfd",
                  "Affh]÷·;;'/fsf] gfd"]}
                            name="nibedakArray"
                            value={this.state.nibedakArray}
                            onChange={this.handleArrayChange}
                />
                <br />
                <br />
                <div className="infoo">@= hUUffwgLsf] lja/0f</div>
                <br />
                <input type="button" name="jaggaArray-nibedakArray" onClick={this.resetTable} value="Fill as same"/>
                <br />
                <br />
                  <FieldArray title={['Gffd,y/',
                    'Gfful/stf g+=',
                    'Gfful/stf hf/L ldlt',
                    'Gfful/stf hf/L lhNnf',
                    "Affa'÷·kltsf] gfd",
                    "Affh]÷·;;'/fsf] gfd"]}
                              name="jaggaArray"
                              value={this.state.jaggaArray}
                              onChange={this.handleArrayChange}
                  />
                <br />
                <br />
                <div className="infoo">#= df]xLsf] lja/0f</div>
                <br />
                <FieldArray title={['Gffd,y/',
                  'Gfful/stf g+=',
                  'Gfful/stf hf/L ldlt',
                  'Gfful/stf hf/L lhNnf',
                  "Affa'÷·kltsf] gfd",
                  "Affh]÷·;;'/fsf] gfd"]}
                            name="mohiArray"
                            value={this.state.mohiArray}
                            onChange={this.handleArrayChange}
                />
                <br />
                <br />
                <div className="infoo">
                  $= cbfntsf] km{"}"};nf adf]lhd afF8kmfF8 x'g] hUufsf] lja/0f
                </div>
                <br />
                <FieldArray title={[   'lhNnf',
                  'Ufflj;',
                  'Jf8f g++=÷·l;6 g++=',
                  'sQf g++',
                  'If]qkmn',
                  'Dff]xLsf] gfd']}
                            name="mohibadfordArray"
                            value={this.state.mohibadfordArray}
                            onChange={this.handleArrayChange}
                />
                <br />
                <br />
                <div className="infoo">
                  %= km{"}"};nf ug{"{"}] lgsfo
                </div>
                <br />
                <FieldArray title={['lhNnf cbfnt',
                  'pRr cbfnt',
                  ';jf{"{"}]Rr cbftn',
                  'lhNnf',
                  'Kfqsf] r=g++',
                  'ldlt']}
                            name="nikayaArray"
                            value={this.state.nikayaArray}
                            onChange={this.handleArrayChange}
                />
                <br />
                <br />
                <div className="infoo">^= df]7 /f]Ssfsf] lja/0f </div>
                <br />
                <div className="para">
                  ;DalGwt df]7 kmfF6af6{" "}
                  <input type="text" onChange={this.handleChange} id="phatBataJaggaKo" name="phatBataJaggaKo" />
                  hUufsf] ;|]:tf sfod 5 /f]Ssf b]lvPg egL n]vL cfPsf] .
                </div>
                <br />
                <br />
                <div className="infoo">&amp;= tfd]nLsf] Aoxf]/f M </div>
                <br />
                <div>
                  <input type="text" onChange={this.handleChange} id="behora" name="behora" />
                </div>
                <br />
                <br />
                <div className="infoo">*= ;+nUg k|df0f</div>
                <br />
                <FieldArray title={['lhNnf cbfnt',
                  'pRr cbfnt',
                  ';jf{]Rr cbftnsf]] r g++ ',
                  'r g++',
                  'sf] ldlt',
                  "sf] rng k'hL{ ÷cfb]z÷"
                ]}
                            name="sanglangaPramandArray"
                            value={this.state.sanglangaPramandArray}
                            onChange={this.handleArrayChange}
                />
                <br />
                <br />
                <div className="infoo">
                  km{"}"};nf adf]lhd bflvn vf/]h x'g] hUufsf] lja/0f
                </div>
                <br />
                  <FieldArray
                    title={['lhNnf',
                      'Ufflj;',
                      'Jf8f g++=÷·l;6 g++=',
                      ';fljs lsQf g++',
                      'If]qkmn',
                      'Tfkm{"{"}',
                      'xfnsf] lsQf g++',
                      'If]qkmn',
                      "ca sfod x'g] hUUfwgLsf] gfd",]}
                    name="dakhilArray"
                    value={this.state.dakhilArray}
                    onChange={this.handleArrayChange}
                  />
                <br />
                <br />
                <div className="infoo">
                  (= sfof{"{"}nosf]=lg0f{"{"}o{" "}
                </div>
                <br />
                <div className="para">
                  ldl;n ;+nUg k|df0f tyf lja/0fsf cfwf/df x]bf{"{"} b]xfosf] hUuf b]xfosf
                  AolQmsf gfddf
                  <input type="text" onChange={this.handleChange} id="jillaAdalat1" name="jillaAdalat1" />
                  lhNnf cbfnt,
                  <input type="text" onChange={this.handleChange} id="uchhaAdalat1" name="uchhaAdalat1" />
                  pRr cbfnt,
                  <input type="text" onChange={this.handleChange} id="sarbacchaAdalat1" name="sarbacchaAdalat1" />
                  ;jf{"{"}]Rr cbftnsf] km{"}"};nf adf]lhd bflvn vf/]h x'g plrt b]vL lg0f
                  {"{"}ofy{"{"} k]z u/]sf] 5' .
                </div>
                <br />
                <div className="para">
                  &gt;L
                  <input type="text" onChange={this.handleChange} id="naam1" name="naam1" />
                  sf] gfddf sfod x'g] lsQf hUufsf] lja/0f
                </div>
                <br />
                <FieldArray title={['lhNnf',
                  'Ufflj;',
                  'Jf8f g++=÷·l;6 g++=',
                  ';fljs lsQf g++',
                  'xfnsf] lsQf g++',
                  'If]qkmn']}
                            name="kirtaArray"
                            value={this.state.kirtaArray}
                            onChange={this.handleArrayChange}
                />
                <br />
                {/* <div className="para">
                  &gt;L
                  <input type="text" onChange={this.handleChange} id="naam2" name="naam2" />
                  sf] gfddf sfod x'g] hUufsf] laa/0f
                </div>
                <br />
                <FieldArray title={['lhNnf',
                  'Ufflj;',
                  'Jf8f g++=÷·l;6 g++=',
                  ';fljs lsQf g++',
                  'xfnsf] lsQf g++',
                  'If]qkmn']}
                            name="kirta1Array"
                            value={this.state.kirta1Array}
                            onChange={this.handleArrayChange}
                /> */}
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
