// 默认工具栏分类
const defaultToolList = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      colour: '#55efc4',
      name: '控制',
      contents: [
        {
          kind: 'block',
          type: 'controls_if',
        },
      ],
    },

    {
      kind: 'category',
      colour: '#81ecec',
      name: '逻辑',
      contents: [
        {
          kind: 'block',
          type: 'logic_compare',
        },
        {
          kind: 'block',
          type: 'logic_operation',
        },
        {
          kind: 'block',
          type: 'logic_boolean',
        },
      ],
    },

    {
      kind: 'category',
      colour: '#74b9ff',
      name: '事件',
      contents: [
        {
          kind: 'block',
          type: 'logic_compare',
        },
        {
          kind: 'block',
          type: 'logic_operation',
        },
        {
          kind: 'block',
          type: 'logic_boolean',
        },
      ],
    },

    {
      kind: 'category',
      colour: '#a29bfe',
      name: '属性',
      contents: [
        {
          kind: 'block',
          type: 'logic_compare',
        },
        {
          kind: 'block',
          type: 'logic_operation',
        },
        {
          kind: 'block',
          type: 'logic_boolean',
        },
      ],
    },

    {
      kind: 'category',
      colour: '#ff7675',
      name: '组件',
      contents: [
        {
          kind: 'block',
          type: 'logic_compare',
        },
        {
          kind: 'block',
          type: 'logic_operation',
        },
        {
          kind: 'block',
          type: 'logic_boolean',
        },
      ],
    },
  ],
};

export default defaultToolList;
