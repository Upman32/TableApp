import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import './Table.css';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
/* function rowClassNameFormat(row, rowIdx) {
  
    console.log(row)
    return row['name'] === 'BRat' ? 
      'BRat-Row' : 'Other-Row';
  } */



  const loveMap = {
    Bob: 'Martha',
    BRat: 'Lucile 2',
  }
  function isExpandableRow(row) {
    return row['name'] in loveMap;
  }
  function expandRow(row) {
    return (
      <p>{row['name']} loves {loveMap[row['name']]}.</p>
    );
  }





  function onSelectRow(row, isSelected, e) {
    if (isSelected) {
      alert(`You just selected '${row['name']}'`)
    }
  }
  const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: false,
    unselectable: null,
    selected: [1],
    onSelect: onSelectRow,
    bgColor: 'orange'
  };








  function getData() {
    var data = []
    for (var i = 0; i < 100; ++i) {
      data[i] = {id: i, name: 'item_' + i, value: i}
    }
   
    return data
  }
   
   
  function showTotal() {
    return <p>There are 100 items total</p>
  }



 /*  const optionss = {
    expandRowBgColor: 'pink',
    expanding:[null]
  }
  const options = {
    page: 4,
    prePage:  '⟵',
    nextPage: '⟶',
    firstPage: '⟸',
    lastPage: '⟹',
    paginationShowsTotal: showTotal
  }
 */

  function onInsertRow(row) {
    let newRowStr = ''
   
    for (const prop in row) {
      newRowStr += prop + ': ' + row[prop] + ' \n'
    }
    alert('You inserted:\n ' + newRowStr)
  }
   
   
  function onDeleteRow(rowKeys) {
    alert('You deleted: ' + rowKeys)
  }
   



class TableContent extends Component {
    render() {
      const options = {
        afterInsertRow: onInsertRow,
        afterDeleteRow: onDeleteRow
      }
      const selectRowProp = {
        mode: 'checkbox'
      }
      const cellEditProp = {
        mode: 'click',
        nonEditableRows: function() {
          return [];
        }
      }
  
        return (
            <div>
                <BootstrapTable
                 data={this.props.data}
            striped
               hover/*    
               expandableRow={isExpandableRow}
               expandComponent={expandRow}
               expandColumnOptions={{expandColumnVisible: true, }} */
               options={options}
              selectRow={selectRowProp}
       /*        pagination={true} */
              insertRow={true}
              deleteRow={true}
              cellEdit={cellEditProp}
              exportCSV
                        csvFileName='data.csv'
               >
                 
                    <TableHeaderColumn
                     isKey 
                    dataField='id'
                    dataAlign="center"
                    headerAlign='left'
                    width="50"
                    tdStyle={{backgroundColor:'green'}}>
ID
                    </TableHeaderColumn>
                    <TableHeaderColumn 
                    dataField='name'
                    dataAlign='center'
                    headerAlign="center"
                    width="20%"
                    thStyle={{fontWeight: 'lighter', color:'purple'}}>
Name
                    </TableHeaderColumn>
                    <TableHeaderColumn 
                    dataField='value'
                    dataAlign='center'
                    headerAlign="center">
Value
                    </TableHeaderColumn>
                </BootstrapTable>
              
            </div>
        )
    }
}

    // В таблице элементы можно - добавлять
    // Кликабельный значок

export default TableContent

/* определение столбцов и заголовков
различные форматы ячеек(текст, числа, переключатели)
изменение размеров
фильтрация данных
динамические добавления
стиль */