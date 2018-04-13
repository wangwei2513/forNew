// 表单验证
// 验证用户名
export function validateUserName (str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) > -1
}
// export function validateUrl(text) {
//   const urlRegex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+))
// }
