// 默认工具栏分类
const defaultToolList = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Control1',
      contents: [
        {
          kind: 'block',
          type: 'controls_if',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Control2',
      contents: [
        {
          kind: 'block',
          type: 'controls_ifelse',
        },
      ],
    },

    {
      kind: 'category',
      name: 'Logic',
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
