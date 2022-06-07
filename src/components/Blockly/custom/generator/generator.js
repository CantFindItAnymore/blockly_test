import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['test_react_field'] = function (block) {
  return "console.log('custom block');\n";
};

// init
Blockly.JavaScript['component_did_mount'] = function (block) {
  console.log(123, block.getField('DATE'));
  return 'componentDidMount(){' + 666 + '};\n';
};

// click
Blockly.JavaScript['on_handle_click'] = function (block) {
  console.log(444, block);
  return `const on${1}Click = () => {
    23
  } \n`;
};

// Blockly.JavaScript['test_react_date_field'] = function (block) {
//   return 'console.log(' + block.getField('DATE').getText() + ');\n';
// };
