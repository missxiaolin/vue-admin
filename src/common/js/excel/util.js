/**
 * @param {*} filterVal
 * @param {*} jsonData
 */
export function formatJson (filterVal, jsonData) {
  return jsonData.map(v => filterVal.map(j => {
    if (j === 'timestamp') {
      return parseTime(v[j])
    } else {
      return v[j]
    }
  }))
}
