import React, { useState, useEffect, useRef } from 'react';

import Blockly from 'blockly/core';
import locale from 'blockly/msg/zh-hans';
import 'blockly/blocks';
import BlocklyJS from 'blockly/javascript';

import defaultToolList from './defaultToolList';

import './custom/blocks/customblocks';
import './custom/generator/generator';

Blockly.setLocale(locale);

const BlocklyComponent = ({ initialXml, children, ...rest }) => {
  const workSpace = useRef();
  const toolbox = useRef();

  // 初始化
  useEffect(() => {
    const temp = Blockly.inject(workSpace.current, {
      toolbox: defaultToolList,
      readOnly: false, // 是否不可编辑
      trashcan: true, // 垃圾桶
      media: 'media/', // 静态资源路径
      move: {
        scrollbars: false, // 滚动条
        drag: true, // 鼠标拖动
        wheel: true, // 鼠标滚轮拖动
      },
      zoom: {
        controls: true, // 右下角控件
        wheel: true, // 鼠标滚轮缩放
        startScale: 1.0, // 初始比例
        maxScale: 1.2, // 最大比例
        minScale: 0.5, // 最小比例
        scaleSpeed: 1.2, // 缩放速度
        pinch: true, // 触摸屏缩放
      },
      ...rest,
    });
    workSpace.current.workspace = temp;
  }, []);

  // 回显code
  useEffect(() => {
    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(initialXml),

        workSpace.current.workspace,
      );
    }
  }, [initialXml]);

  // 获取code
  const handelGetCode = () => {
    const code = BlocklyJS.workspaceToCode(workSpace.current.workspace);

    console.log(
      '当前代码\n',
      `export default {
      ${code}
    }`,
    );
  };

  return (
    <>
      <button
        onClick={() => {
          handelGetCode();
        }}
      >
        获取代码
      </button>
      <div ref={workSpace} style={{ width: '100%', height: '100%' }} />
      <xml
        xmlns="toolbox"
        is="blockly"
        style={{ display: 'none' }}
        ref={toolbox}
      >
        {children}
      </xml>
    </>
  );
};

export default BlocklyComponent;
