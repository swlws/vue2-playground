const COMPONENT_ID_MAP = {
  category: 'linkHead@@ScSelect',
};

// 组件定义
export const schemaDefine = {
  [COMPONENT_ID_MAP.category]: {
    componentName: 'ScSelect',
    // 是否是头部组件
    isLinkHead: true,
  },
};

export const treeSchema = {};

// 组件列表
export const treeData = [
  {
    id: 'uuid-100',
    componentName: 'TfInput',
    attrs: {
      indexStyle: '',
      nodeClassName: '',
    },
  },
];
