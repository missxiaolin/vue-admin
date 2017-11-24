/* eslint-disable */
import { saveAs } from 'file-saver';
import XLSX from 'xlsx'

/**
 * @param {*} th
 * @param {*} jsonData
 * @param {*} defaultTitle
 */
export function export_json_to_excel(th, jsonData, defaultTitle) {

    /* original data */

    var data = jsonData;
    data.unshift(th);
    var ws_name = "SheetJS";

    var wb = new Workbook(), ws = sheet_from_array_of_arrays(data);

    /*设置worksheet每列的最大宽度*/
    const colWidth = data.map(row => row.map(val => {
      /*先判断是否为null/undefined*/
      if (val == null) {
        return {'wch': 10};
      }
      /*再判断是否为中文*/
      else if (val.toString().charCodeAt(0) > 255) {
        return {'wch': val.toString().length * 2};
      } else {
        return {'wch': val.toString().length};
      }
    }))
    /*以第一行为初始值*/
    let result = colWidth[0];
    for (let i = 1; i < colWidth.length; i++) {
      for (let j = 0; j < colWidth[i].length; j++) {
        if (result[j]['wch'] < colWidth[i][j]['wch']) {
          result[j]['wch'] = colWidth[i][j]['wch'];
        }
      }
    }
    ws['!cols'] = result;

    /* add worksheet to workbook */
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;

    var wbout = XLSX.write(wb, {bookType: 'xlsx', bookSST: false, type: 'binary'});
    var title = defaultTitle || '列表'
    saveAs(new Blob([s2ab(wbout)], {type: "application/octet-stream"}), title + ".xlsx")
}

function Workbook() {
  if (!(this instanceof Workbook)) return new Workbook();
  this.SheetNames = [];
  this.Sheets = {};
}

/**
 * @param {*} data
 * @param {*} opts
 */
function sheet_from_array_of_arrays(data, opts) {
  var ws = {};
  var range = {s: {c: 10000000, r: 10000000}, e: {c: 0, r: 0}};
  for (var R = 0; R != data.length; ++R) {
      for (var C = 0; C != data[R].length; ++C) {
          if (range.s.r > R) range.s.r = R;
          if (range.s.c > C) range.s.c = C;
          if (range.e.r < R) range.e.r = R;
          if (range.e.c < C) range.e.c = C;
          var cell = {v: data[R][C]};
          if (cell.v == null) continue;
          var cell_ref = XLSX.utils.encode_cell({c: C, r: R});

          if (typeof cell.v === 'number') cell.t = 'n';
          else if (typeof cell.v === 'boolean') cell.t = 'b';
          else if (cell.v instanceof Date) {
              cell.t = 'n';
              cell.z = XLSX.SSF._table[14];
              cell.v = datenum(cell.v);
          }
          else cell.t = 's';

          ws[cell_ref] = cell;
      }
  }
  if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
  return ws;
}

/**
 * @param {*} s
 */
function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}
