import React, { Fragment } from 'react';
 
import styles from './Content.css';
import './Form.css';
import { num2np, formatnpDate, generateRandomString, adtobs } from '../utils/date';
import returnHtml from './template/template3';
import {FieldArray} from "./forms/Form";
import { TouchBarSegmentedControl } from 'electron';
                    var app= require('electron').remote;
var dialog = app.dialog;
const { ipcRenderer } = require('electron')

export default class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.nibedak = {};
    this.jagga = {};
    this.mohi = {};
    this.mohibadford = {};
    this.state = {
      dartaNumber: '',
      dartaMiti: '',
      ajakoMiti: formatnpDate(new Date()),
      showNibedakArray:true,
      showJaggaArray:true,
      showGharjaggaArray:true,
      showGharsipharisArray:true,
      showSanglangaPramandArray:true,
      showKaryalayanirmanArray:true,
      gharjaggaArray:[{
        jilla:'',
        gabisa:'',
        oda:'',
        kirta:'',
        chetrafhal:''

      }],
      gharsipharisArray:[{
        gharsipharisNaam:'',
        gharsipharisJilla:'',
        gharsipharisChanum:'',
        gharsipharisDate:''
      }
      ],
      sanglangaPramandArray:[{
        sanglangapramanNagarpalika:'',
        sanglangapramanChanumber:'',
        sanglangapramanMitti:''
      }],
      karyalayanirmanArray:[{
        jilla:'',
        gabisa:'',
        oda:'',
        kirta:'',
        chetrafhal:''
      }],
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
          bajeSasuraNaam: '',
        }
      ],
      dastur:'',behora1:'',Miti:'',dartanum1:'',phatbatajaggako1:'',
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
    const fileName= 'घर-कायम-'+adtobs(new Date())+generateRandomString(7);
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
    this.setState({ [event.target.name]: event.target.checked })

  resetTable= (e)=>{
    const d = e.target.name.split('-');
    this.setState({
      [d[0]]:this.state[d[1]]
    })
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
    __html: 'tr th,.infoo,.info,h3,label,span{font-family:"Preeti";}div{font-family:"Preeti";font-size:20px}'
  }}
/>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        input:-ms-input-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input::-moz-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input::-webkit-input-placeholder{\n            font-family: 'Preeti';\n            font-size: 20px;\n\n        }\n        input[type=text],\n        input[type=number],\n        input[type=date],\n        select {\n            width: 90%;\n            padding: 12px 20px;\n            margin: 8px 0;\n            display: block;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            box-sizing: border-box;\n        }\n\n        .form-group {\n            width: 50%;\n        }\n\n        .form-control {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            /* flex-flow: row wrap; */\n        }\n\n        input[type=date] {\n            height: 41px;\n        }\n\n        input[type=submit] {\n            width: 20%;\n            background-color: #4CAF50;\n            color: white;\n            padding: 14px 20px;\n            margin: auto;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n        }\n\n        input[type=submit]:hover {\n            background-color: #45a049;\n        }\n\n        div.container {\n            border-radius: 5px;\n            background-color: #f2f2f2;\n            padding: 20px;\n        }\n\n        .heading {\n            margin-left: 50%;\n        }\n\n        .info {\n            width: 100%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            padding: 14px 20px;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        .infoo {\n            width: 20%;\n            background-color: rgb(76, 127, 175);\n            color: white;\n            border-radius: 4px;\n            cursor: pointer;\n            text-align: center;\n        }\n\n        table,\n        th,\n        td {\n            border: 1px solid black;\n            border-collapse: collapse;\n        }\n\n        th,\n        td {\n            padding: 5px;\n        }\n\n        #button {\n            height: 50px;\n            width: 40px;\n        }\n    "
    }}
  />
   <style
  dangerouslySetInnerHTML={{
    __html: 'tr th,.infoo,.info,h3,label,span{font-family:"Preeti";}'
  }}
/>
   <div className={styles.maincontainer} data-tid="maincontainer">
              <div className={styles.mainhead} data-tid="mainhead">
      <h3>घर कायम</h3>
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
          <label htmlFor="dartanum1">lga]bg btf{"{"} g</label>
          <input onChange={this.handleChange}
            type="text"
            id="dartanum1"
            name="dartanum1"
            placeholder="lga]bg btf{ g"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Miti1">ldlt</label>
          <input onChange={this.handleChange} type="text" id="Miti1" name="dartaMiti" placeholder="ldlt" />
        </div>
      </div>
      <br />
      <input type="checkbox" name="showNibedakArray" onChange={this.handleCheckboxChange} checked={this.state.showNibedakArray}/>
      <br />
      {this.state.showNibedakArray?(<Fragment>
      <div className="infoo">!= lga]bssf] lja/0f</div>
      <br />
      
      <FieldArray title={['Gffd,y/',
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
      </Fragment>):(<Fragment>lga]bssf] lja/0f<br/></Fragment>)}
      <input type="checkbox" name="showJaggaArray" onChange={this.handleCheckboxChange} checked={this.state.showJaggaArray}/>
      {this.state.showJaggaArray?(<Fragment>
        <div className="infoo">@= hUUffwgLsf] lja/0f</div>
      <br />
      <input type="button" style={{fontFamily:'serif'}} name="jaggaArray-nibedakArray" onClick={this.resetTable} value="Fill as same"/>
      <br />
      <br />
      <FieldArray title={['Gffd,y/',
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
      <br />
      </Fragment>):(<Fragment>hUUffwgLsf] lja/0f <br/></Fragment>)}
     
      <input type="checkbox" name="showGharjaggaArray" onChange={this.handleCheckboxChange} checked={this.state.showGharjaggaArray}/>
      {this.state.showGharjaggaArray?(<Fragment>
        <div className="infoo">#= 3/ sfod x'g] hUufsf] lja/0f</div>
      <br />
      <FieldArray title={['lhNnf',
        'Ufflj;',
        'Jf8f g++=÷l;6 g++=',
        'lsQf g++',
        'If]qkmn']}
                  name="gharjaggaArray"
                  value={this.state.gharjaggaArray}
                  onChange={this.handleArrayChange}
      />
      <br />
      <br />
      </Fragment>):(<Fragment>#= 3/ sfod x'g] hUufsf] lja/0f<br/></Fragment>)}
      <input type="checkbox" name="showGharsipharisArray" onChange={this.handleCheckboxChange} checked={this.state.showGharsipharisArray}/>
      {this.state.showGharsipharisArray?(<Fragment>
        <div className="infoo">$= 3/ sfodsf] nflu l;kmfl/; lbg] lgsfo</div>
      <br />
      <FieldArray title={['lgsfosf] gfd',
        'lhNnf',
        'Kfqsf] r=g++',
        'ldlt']}
                  name="gharsipharisArray"
                  value={this.state.gharsipharisArray}
                  onChange={this.handleArrayChange}
      />
      <br />
      <br />
      </Fragment>):(<Fragment>$= 3/ sfodsf] nflu l;kmfl/; lbg] lgsfo<br/></Fragment>)}
      
      <div className="infoo">%= df]7 /f]Ssfsf] lja/0f </div>
      <br />
      <div>
        ;DalGwt df]7 kmfF6af6{" "}
        <input onChange={this.handleChange} type="text" id="phatbatajaggako1" name="phatbatajaggako1" />
        hUufsf] ;|]:tf sfod 5 /f]Ssf b]lvPg egL n]vL cfPsf] .
      </div>
      <br />
      <br />
      <div className="infoo">^= tfd]nLsf] Aoxf]/f M </div>
      <br />
      <div>
        <input onChange={this.handleChange} type="text" id="behora1" name="behora1" />
      </div>
      <br />
      <br />
      <input type="checkbox" name="showSanglangaPramandArray" onChange={this.handleCheckboxChange} checked={this.state.showSanglangaPramandArray}/>
      {this.state.showSanglangaPramandArray?(<Fragment>
        <div className="infoo">&amp;= ;+nUg k|df0f</div>
      <br />
      <FieldArray title={['gu/kflnsf','r g','ldlt']}
                  name="sanglangaPramandArray"
                  value={this.state.sanglangaPramandArray}
                  onChange={this.handleArrayChange}
      />

      <br />
      <br />
      </Fragment>):(<Fragment>&amp;= ;+nUg k|df0f<br/></Fragment>)}
      <div className="infoo">
        *= sfof{"{"}nosf]=lg0f{"{"}o{" "}
      </div>
      <br />
      <div>
        ldl;n ;+nUg k|df0f tyf lja/0fsf cfwf/df x]bf{"{"} b]xfosf] hUuf b]xfosf
        AolQmsf gfddf lgodfg';f/sf] b:t'/
        <input onChange={this.handleChange} type="text" id="dastur" name="dastur" />
        a'emL hUufwgL btf{"{"} k|df0f k'hf{"{"},;|]itdf 3/ sfod plrt b]vL lg0f
        {"{"}ofy{"{"} k]z u/]sf] 5' .
      </div>
      <br />
      <input type="checkbox" name="showKaryalayanirmanArray" onChange={this.handleCheckboxChange} checked={this.state.showKaryalayanirmanArray}/>
      {this.state.showKaryalayanirmanArray?(<Fragment>
        <input type="button" style={{fontFamily:'serif'}} name="gharjaggaArray-karyalayanirmanArray" onClick={this.resetTable} value="Fill as same"/>
      <br/>
      <br/>
      <FieldArray title={['lhNnf',
        'Ufflj;',
        'Jf8f g++=÷l;6 g++=',
        'lsQf g++',
        'If]qkmn',]}
                  name="karyalayanirmanArray"
                  value={this.state.karyalayanirmanArray}
                  onChange={this.handleArrayChange}
      />
      <br />
      <br />
        </Fragment>):(<Fragment><br/></Fragment>)}
     
      <input type="submit" value="फारम बुझाउनुहोस्" />
    </form>
  </div>
</Fragment>

        )}
      </div>
    );
  }
}
