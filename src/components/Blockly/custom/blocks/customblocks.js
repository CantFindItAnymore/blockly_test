/**
 * 自定义block
 */

import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/ComponentDidMount';

var testReactField = {
  type: 'test_react_field',
  message0: 'custom field %1',
  args0: [
    {
      type: 'field_react_component',
      name: 'FIELD',
      text: 'Click me',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['test_react_field'] = {
  init: function () {
    this.jsonInit(testReactField);
    this.setStyle('loop_blocks');
  },
};

// 【事件】初始化
const componentDidMount = {
  type: 'component_did_mount',
  message0: '初始化时 %1',
  args0: [
    {
      type: 'input_statement',
      name: 'componentDidMount',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['component_did_mount'] = {
  init: function () {
    this.jsonInit(componentDidMount);
    this.setStyle('loop_blocks');
  },
};

// 【事件】点击事件
const onHandleClick = {
  type: 'on_handle_click',
  message0: '当uid为 %1的组件',
  args0: [
    {
      type: 'field_input',
      name: 'clickUid',
    },
  ],
  message1: '被点击时 %1',
  args1: [
    {
      type: 'input_statement',
      name: 'onHandleClickEvent',
    },
  ],

  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['on_handle_click'] = {
  init: function () {
    this.jsonInit(onHandleClick);
    this.setStyle('loop_blocks');
  },
};

// 【操作】更新组件属性
const UpdateAttr = {
  type: 'update_attr',
  message0: '更新uid为 %1 的组件的 %2 属性 为 %3',
  args0: [
    {
      type: 'field_input',
      name: 'onHandleClickComponent',
    },
    {
      type: 'field_input',
      name: 'onHandleClickEvent',
    },
    {
      type: 'field_input',
      name: 'onHandleClickEvent',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['update_attr'] = {
  init: function () {
    this.jsonInit(UpdateAttr);
    this.setStyle('loop_blocks');
  },
};

// 【操作】发送请求
const SendRequest = {
  type: 'send_request',
  message0: '以 %1 为参数',
  args0: [
    {
      type: 'input_value',
      name: 'onHandleClickComponent',
    },
  ],
  message1: '向url %1 发送请求，请求完成后 %2',
  args1: [
    {
      type: 'field_input',
      name: 'onHandleClickEvent',
    },
    {
      type: 'input_statement',
      name: 'onHandleClickEvent',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['send_request'] = {
  init: function () {
    this.jsonInit(SendRequest);
    this.setStyle('loop_blocks');
  },
};

// 【操作】获取当前url参数
const GetCurrentParams = {
  type: 'get_current_params',
  message0: '当前url参数中的 %1 ',
  args0: [
    {
      type: 'field_input',
      name: 'onHandleClickComponent',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['get_current_params'] = {
  init: function () {
    this.jsonInit(GetCurrentParams);
    this.setStyle('loop_blocks');
  },
};
// 【操作】跳转
const PushLocation = {
  type: 'push_location',
  message0: '跳转至 %1',
  args0: [
    {
      type: 'field_input',
      name: 'onHandleClickComponent',
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['push_location'] = {
  init: function () {
    this.jsonInit(PushLocation);
    this.setStyle('loop_blocks');
  },
};
