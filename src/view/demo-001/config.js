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

// 组件列表
export const activeComponentList = [
  {
    id: 'uuid-100',
    componentList: [],
    children: [
      {
        id: 'uuid-110',
        componentList: [],
        children: [
          {
            id: 'uuid-111',
            componentList: [],
          },
        ],
      },
      {
        id: 'uuid-120',
        children: [
          {
            id: 'uuid-121',
            componentList: [],
          },
        ],
      },
    ],
  },
  {
    id: 'uuid-200',
    componentList: [],
    children: [
      {
        id: 'uuid-210',
        componentList: [],
        children: [
          {
            id: 'uuid-211',
            componentList: [],
          },
        ],
      },
      {
        id: 'uuid-220',
        children: [
          {
            id: 'uuid-221',
            componentList: [],
          },
        ],
      },
    ],
  },
];
