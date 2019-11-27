const adbs = require('ad-bs-converter');
let generated = '';
export function formatnpDate(date) {
  const day = date.getDate() +1;
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const converted = adbs.ad2bs(`${year}/${monthIndex}/${day}`);
  return `${convertToNp(converted.en.year)}÷${convertToNp(converted.en.month)}÷${convertToNp(converted.en.day)}`;
}
function convertToNp(val){
  const arr =Array(')','!','@','#','$','%','^','&','*','(');
  val = String(val);
  const len = val.length;
  let output='';
  for(let i =0;i<len;i++){
      output += arr[val[i]];
  }
  return output;
}

export function generateRandomString(length) {
  let text = "";
  const possible = "०१२३४५६७८९";
   

    for (let i = 0; i < length; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }  
  
  return text;
}
export function adtobs(date) {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const converted = adbs.ad2bs(`${year}/${monthIndex}/${day}`);
  return `${converted.ne.year}${converted.ne.month}${converted.ne.day}`;
}
export function num2np(value,onlynum=false) {
  const nums = {
    0: ')',
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*',
    9: '('
  };
  let output = '';
  value= String(value);
  const { length } = value;
  let i = 0;
  if (length > 0) {
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < length; i++) {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(value[i])) {
        console.log(value[i]);
        output += nums[value[i]];
      } else {
        output += value[i];
      }
    }
  }
  return output;
}
export function onlynumnep(value) {
  const nums = {
    0: '०',
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९'
  };
  let output = '';
  const { length } = value.length;
  let i = 0;
  if (length > 0) {
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < length; i++) {
      // eslint-disable-next-line no-restricted-globals
        output += nums[value[i]];
    }
  }
  return output;
}

