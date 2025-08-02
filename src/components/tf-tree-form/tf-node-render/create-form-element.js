/**
 * 创建表单元素
 * @param {*} vm
 * @param {*} nodeData
 * @returns
 */
export function createFormElement(vm, nodeData) {
  const { id, attrs, componentName } = nodeData;

  return vm.$createElement(componentName, {
    ref: id,
    key: id,
    attrs: { ...attrs },
  });
}
