// 默认工具栏分类
const defaultToolList = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      colour: '#74b9ff',
      name: '事件',
      contents: [
        {
          kind: 'block',
          type: 'component_did_mount',
        },
        {
          kind: 'block',
          type: 'on_handle_click',
        },
      ],
    },

    {
      kind: 'category',
      colour: '#55efc4',
      name: '条件判断',
      contents: [
        {
          kind: 'block',
          type: 'controls_if',
        },
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
      colour: '#81ecec',
      name: '操作',
      contents: [
        {
          kind: 'block',
          type: 'update_attr',
        },
        {
          kind: 'block',
          type: 'send_request',
        },
        {
          kind: 'block',
          type: 'push_location',
        },
      ],
    },

    {
      kind: 'category',
      colour: '#e17055',
      name: '值',
      contents: [
        {
          kind: 'block',
          type: 'get_current_params',
        },
      ],
    },
  ],
};

export default defaultToolList;
