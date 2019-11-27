import React, { Fragment } from 'react';
 
import styles from './Content.css';
import './Form.css';
import { num2np, formatnpDate, generateRandomString, adtobs } from '../utils/date';
import returnHtml from './template/template10';
import {FieldArray} from "./forms/Form";
 var app= require('electron').remote;
var dialog = app.dialog;
const {ipcRenderer} = require('electron');


export default class Form10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dartaNumber: '',
      chaNumberMiti: null,
      ajakoMiti: formatnpDate(new Date()),
      dartanum:'',Miti:'',phatbatajaggako1:'',behora1:'',rakam:'',
      showNibedakArray:true,
      showJaggaArray:true,
      showJaggaBibaranArray:true,
      showJaggaDhaniBibaranArray:true,
      showJaggaFoundArray:true,
      showJaggaActualArray:true,
      showSipharisArray:true,
      showSansodhanArray:true,
      showSanglangpramandArray:true,
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
      jaggaBibaranArray:[
        {
          jaggaBibaranJilla: '',
          jaggaBibaranGabisa: '',
          jaggaBibaranWadaNumberSitNumber: '',
          jaggaBibaranKitaNumber: '',
          jaggaBibaranKsytrafal: '',
          jaggaBibaranJilla1: '',
          jaggaBibaranGabisa1: '',
          jaggaBibaranWadaNumberSitNumber1: '',
          jaggaBibaranKitaNumber1: '',
          jaggaBibaranKsytrafal1: '',
        }
      ],
      jaggaDhaniBibaranArray: [
        {
          jaggaDhaniBibaranNaamThar: '',
          jaggaDhaniBibaranNagariktaNumber: '',
          jaggaDhaniBibaranNagariktaJariMiti: '',
          jaggaDhaniBibaranNagariktaJariJilla: '',
          jaggaDhaniBibaranBabuPitakoNaam: '',
          jaggaDhaniBibaranBajeSasuraNaam: '',
        }
      ],
      jaggafoundArray: [
        {
          jaggafoundNaamThar: '',
          jaggafoundNagariktaNumber: '',
          jaggafoundNagariktaJariMiti: '',
          jaggafoundNagariktaJariJilla: '',
          jaggafoundBabuPitakoNaam: '',
          jaggafoundBajeSasuraNaam: ''
        }
      ],
      jaggaactualArray:[
        {
          jaggaactualNaamThar: '',
          jaggaactualNagariktaNumber: '',
          jaggaactualNagariktaJariMiti: '',
          jaggaactualNagariktaJariJilla: '',
          jaggaactualBabuPitakoNaam: '',
          jaggaactualBajeSasuraNaam: ''

        }
      ],
      sipharisArray:[
        {
          sipharisNaam:'',
          sipharisOdaNumber:'',
          sipharisJilla:'',
          sipharisChaNumber:'',
          sipharisMiti:'',
        }
      ],
      sansodhanArray:[{
        sansodhanJilla:'',
        sansodhanGabisa:'',
        sansodhanOda:'',
        sansodhanKirta:'',
        sansodhanChetrafhal:''
      }],
      sanglangpramandArray:[{
        sanglangpramandNagarpalikaGaupalika:'',
        sanglangpramandWadaNumber:'',
        sanglangpramandChaNumber:'',
        sanglangpramandMiti:''
      }],
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
    const fileName= 'स-शोधन-'+adtobs(new Date())+generateRandomString(7);
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

  handleCheckboxChange = event =>
      this.setState({[event.target.name]: event.target.checked});

  resetTable= (e)=>{
    const d = e.target.name.split('-');
    this.setState({
      [d[0]]:this.state[d[1]]
    })
  };

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
            </div></Fragment>
        ) : (
          <Fragment>
              <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  .info, label, .infoo, tr th, input, h3, tbody tr td, div.para {\n    font-family: 'Preeti';\n}\n      input:-ms-input-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input::-moz-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input::-webkit-input-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input[type=text],\n        input[type=number],\n        input[type=date],\n        select {\n            width: 90%;\n            padding: 12px 20px;\n            margin: 8px 0;\n            display: block;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            box-sizing: border-box;\n        }\n\n        .form-group {\n            width: 50%;\n        }\n\n        .form-control {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            /* flex-flow: row wrap; */\n        }\n\n        input[type=date] {\n            height: 41px;\n        }\n\n        input[type=submit] {\n            width: 20%;\n            background-color: #4CAF50;\n            color: white;\n            padding: 14px 20px;\n            margin: auto;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n        }\n\n        input[type=submit]:hover {\n            background-color: #45a049;\n        }\n\n        div.container {\n            border-radius: 5px;\n            background-color: #f2f2f2;\n            padding: 20px;\n        }\n\n        .heading {\n            margin-left: 50%;\n        }\n\n        .info {\n            width: 100%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            padding: 14px 20px;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        .infoo {\n            width: 20%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        table,\n        th,\n        td {\n            border: 1px solid black;\n            border-collapse: collapse;\n        }\n\n        th,\n        td {\n            padding: 5px;\n        }\n\n        #button {\n            height: 50px;\n            width: 40px;\n        }\n    "
    }}
  />
    <style
  dangerouslySetInnerHTML={{
    __html: 'tr th,.infoo,.info,h3,label,span{font-family:"Preeti";}div{font-family:"Preeti";font-size:20px}'
  }}
/>
 <div className={styles.maincontainer} data-tid="maincontainer">
              <div className={styles.mainhead} data-tid="mainhead">
      <h3>;+zf]wg .</h3>
    </div>
    <div className="info">{message}</div>
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
            name="dartanum"
            placeholder="lga]bg btf{ g"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Miti">ldlt</label>
          <input onChange={this.handleChange} type="text" id="Miti" name="Miti" placeholder="ldlt" />
        </div>
      </div>
      <br />
      <br />
      <input type="checkbox" name="showNibedakArray" onChange={this.handleCheckboxChange} checked={this.state.showNibedakArray}/>
      {this.state.showNibedakArray?(<Fragment>
        <div className="infoo">!= ga]bssf] lja/0f</div>
      <br />
      <FieldArray title={[      'Gffd,y/',
        'Gfful/stf g+=',
        'Gfful/stf hf/L ldlt',
        'Gfful/stf hf/L lhNnf',
        "Affa'÷kltsf] gfd",
        "Affh]÷;;'/fsf] gfd"]}
                  name="nibedakArray"
                  value={this.state.nibedakArray}
                  onChange={this.handleArrayChange}
      />
      <br />
      <br />
      </Fragment>):(<Fragment>
        <div className="infoo">!= ga]bssf] lja/0f</div>
      </Fragment>)}
      <input type="checkbox" name="showJaggaArray" onChange={this.handleCheckboxChange} checked={this.state.showJaggaArray}/>
      {this.state.showJaggaArray?(<Fragment>
        <div className="infoo">@= hUUffwgLsf] lja/0f</div>
      <br />
      <FieldArray title={[      'Gffd,y/',
        'Gfful/stf g+=',
        'Gfful/stf hf/L ldlt',
        'Gfful/stf hf/L lhNnf',
        "Affa'÷kltsf] gfd",
        "Affh]÷;;'/fsf] gfd"]}
                  name="jaggaArray"
                  value={this.state.jaggaArray}
                  onChange={this.handleArrayChange}
      />
      <br />
          <br/>
      </Fragment>):<Fragment>
      <div className="infoo">@= hUUffwgLsf] lja/0f</div>
      </Fragment>}
      <div className="infoo">#=;+zf]wg x'g] lja/0f</div>
      <br />
      <input type="checkbox" name="showJaggaBibaranArray" onChange={this.handleCheckboxChange} checked={this.state.showJaggaBibaranArray}/>
      {this.state.showJaggaBibaranArray?(<Fragment>
        <div className="infoo">hUufsf] laa/0f </div>
      <br />
      {/*<tr>*/}
      {/*  <th colSpan={5}>भएको</th>*/}
      {/*  <th colSpan={5}>हुनुपर्ने</th>*/}
      {/*</tr>*/}
      <FieldArray title={[ 'lhNnf ePsf]',
        'Ufflj; ePsf]',
        'Jf8f g++=÷l;6 g++= ePsf]',
        'lsQf g++ ePsf]',
        'If]qkmn ePsf]',
        "lhNnf x'g'kg]{",
        "Ufflj; x'g'kg]{",
        "Jf8f g++=÷l;6 g++= x'g'kg]{",
        "lsQf g++ x'g'kg]{",
        "If]qkmn x'g'kg]{",]}
                  name="jaggaBibaranArray"
                  value={this.state.jaggaBibaranArray}
                  onChange={this.handleArrayChange}
      />
      </Fragment>):(<Fragment>
        <div className="infoo">hUufsf] laa/0f </div>
      </Fragment>)}
      
      <br />
      <br />
      <div className="infoo">hUUffwgLsf] lja/0f</div>
      <input type="checkbox" name="showJaggaFoundArray" onChange={this.handleCheckboxChange} checked={this.state.showJaggaFoundArray}/>
      {this.state.showJaggaFoundArray?(<Fragment>
        <div className="para">ePsf]</div>
      <br/>
      <FieldArray title={[
        'Gffd,y/',
        'Gfful/stf g+=',
        'Gfful/stf hf/L ldlt',
        'Gfful/stf hf/L lhNnf',
        "Affa'÷kltsf] gfd",
        "Affh]÷;;'/fsf] gfd"
      ]}
                  name="jaggafoundArray"
                  value={this.state.jaggafoundArray}
                  onChange={this.handleArrayChange}
      />
      </Fragment>):(<Fragment>
        <div className="para">ePsf]</div>
      </Fragment>)}
      
      <br/>
      <input type="checkbox" name="showJaggaActualArray" onChange={this.handleCheckboxChange} checked={this.state.showJaggaActualArray}/>
      {this.state.showJaggaActualArray?(<Fragment>
        <div className="para">x'g'kg]{'{'}</div>
      <br/>
      <FieldArray title={[
        'Gffd,y/',
        'Gfful/stf g+=',
        'Gfful/stf hf/L ldlt',
        'Gfful/stf hf/L lhNnf',
        "Affa'÷kltsf] gfd",
        "Affh]÷;;'/fsf] gfd"
      ]}
                  name="jaggaactualArray"
                  value={this.state.jaggaactualArray}
                  onChange={this.handleArrayChange}
      />
      </Fragment>):(<Fragment>
        <div className="para">x'g'kg]{'{'}</div>
      </Fragment>)}
      <br />
      <br />
      <input type="checkbox" name="showSipharisArray" onChange={this.handleCheckboxChange} checked={this.state.showSipharisArray}/>
      {this.state.showSipharisArray?(<Fragment>
        <div className="infoo">$= ;+zf]wgsf] nflu l;kmfl/; lbg] lgsfo</div>
        <br />
      <FieldArray title={[
          'ufpFkflnsf÷gu/kflnsf',
          ' g++=j8f sfof{"{"}no',
          'lhNnf',
          'Kfqsf] r=g++',
          'ldlt'
      ]}
                  name="sipharisArray"
                  value={this.state.sipharisArray}
                  onChange={this.handleArrayChange}
      />
      </Fragment>):(<Fragment>
        <div className="infoo">$= ;+zf]wgsf] nflu l;kmfl/; lbg] lgsfo</div>
     
      </Fragment>)}
      
      <br />
      <br />
      <div className="infoo">%= df]7 /f]Ssfsf] lja/0f </div>
      <br />
      <div className="para">
        ;DalGwt df]7 kmfF6af6{" "}
        <input onChange={this.handleChange} type="text" id="phatbatajaggako1" name="phatbatajaggako1" />
        hUufsf] ;|]:tf sfod 5 /f]Ssf b]lvPg egL n]vL cfPsf] .
      </div>
      <br />
      <br />
      <div className="infoo">^= tfd]nLsf] Aoxf]/f M </div>
      <br />
      <div className="para">
        <input onChange={this.handleChange} type="text" id="behora1" name="behora1" />
      </div>
      <br />
      <br />
      <input type="checkbox" name="showSanglangpramandArray" onChange={this.handleCheckboxChange} checked={this.state.showSanglangpramandArray}/>
      {this.state.showSanglangpramandArray?(<Fragment>
        <div className="infoo">&amp;= ;+nUg k|df0f</div>
        <br />
      <FieldArray title={[
          'ufpFkflnsf÷gu/kflnsf ',
          'g++=j8f sfof{nosf]',
          'r g',
          'ldlt'
      ]}
                  name="sanglangpramandArray"
                  value={this.state.sanglangpramandArray}
                  onChange={this.handleArrayChange}
      />
      </Fragment>):(<Fragment>
        <div className="infoo">&amp;= ;+nUg k|df0f</div>
      </Fragment>)}
     
      
      <br />
      <br />
      <div className="infoo">
        *= sfof{"{"}nosf]=lg0f{"{"}o{" "}
      </div>
      <br />
      <div className="para">
        ldl;n ;+nUg k|df0f tyf lja/0fsf cfwf/df x]bf{"{"} lgj]bssf] dfu adf]lhd
        ;+zf]wg b:t'/ ?<input onChange={this.handleChange} type="text" id="rakam" name="rakam" /> a'emL
        b]xfosf] hUuf b]xfo adf]lhd ;+zf]wg x'g plrt b]vL lg0f{"{"}ofy{"{"} k]z
        u/]sf] 5' .
      </div>
      <br />
      <input type="checkbox" name="showSansodhanArray" onChange={this.handleCheckboxChange} checked={this.state.showSansodhanArray}/>
      {this.state.showSansodhanArray?(<Fragment>
        <div className="infoo">;+zf]wg ePsf] hUufsf] lja/0f</div>
      <br />
      <FieldArray
          title={[
            'lhNnf',
            'Ufflj;',
            'Jf8f g++=÷l;6 g++=',
            'lsQf g++',
            'If]qkmn'
          ]}
          name="sansodhanArray"
          value={this.state.sansodhanArray}
          onChange={this.handleArrayChange}
      />
      </Fragment>):(<Fragment>
        <div className="infoo">;+zf]wg ePsf] hUufsf] lja/0f</div>
      </Fragment>)}
      
      <br />
      <input type="checkbox" name="showJaggaDhaniBibaranArray" onChange={this.handleCheckboxChange} checked={this.state.showJaggaDhaniBibaranArray}/>
      {this.state.showJaggaDhaniBibaranArray?(<Fragment>
        <div className="infoo">;+zf]wg ePsf] hUufwgLsf] laa/0f</div>
      <br />
      <FieldArray title={[ 'Gffd,y/',
        'Gfful/stf g+=',
        'Gfful/stf hf/L ldlt',
        'Gfful/stf hf/L lhNnf',
        "Affa'÷kltsf] gfd",
        "Affh]÷;;'/fsf] gfd"]}
                  name="jaggaDhaniBibaranArray"
                  value={this.state.jaggaDhaniBibaranArray}
                  onChange={this.handleArrayChange}
      />
      </Fragment>):(<Fragment>
        <div className="infoo">;+zf]wg ePsf] hUufwgLsf] laa/0f</div>
      </Fragment>)}
     
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