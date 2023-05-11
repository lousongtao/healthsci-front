/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser && currentUser.type == 1,
    canAddBrand: currentUser && (currentUser.permission === 'brand' || currentUser.type == '1' || currentUser.type == '2'),
    canAddPeople: currentUser && (currentUser.permission === 'people' || currentUser.type == '1' || currentUser.type == '2'),
    canAddWorks: currentUser && (currentUser.permission === 'works' || currentUser.type == '1' || currentUser.type == '2'),
    canAddMgmtOrg: currentUser && (currentUser.permission === 'mgmtorg' || currentUser.type == '1' || currentUser.type == '2'),
    canAddMgmtIndividual: currentUser && (currentUser.permission === 'mgmtindividual' || currentUser.type == '1' || currentUser.type == '2'),
    canAddMgmt: currentUser && (currentUser.permission === 'mgmtorg' || currentUser.permission === 'mgmtindividual' || currentUser.type == '1' || currentUser.type == '2'),
  };
}
