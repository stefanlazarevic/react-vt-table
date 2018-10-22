(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";var a=n(211);t.a=a.a},210:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(25),r=n(26),o=n(29),i=n(27),l=n(28),c=n(0),s=n.n(c),u=n(136),d=n.n(u),m=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.index,a=t.rowClassName,r=t.style,o=t.getDataRow,i=t.getDataRowItem,l=t.getColumnWidth,c=t.columns,u=o(n),m=0==n%2?"VTRowOdd":"VTRowEven",p=a&&a(n);return s.a.createElement("div",{className:d()("VTRow",m,p),style:r},c.map(function(t,a){var o,c=t.props,d=c.cellRenderer,m=c.dataKey,p=l(a);if(d)o=d({dataKey:m,rowData:u,columnIndex:a});else{var h=i({rowData:u,dataKey:m});o=s.a.createElement("div",{className:"VTCellContent",title:h,style:{lineHeight:r.height+"px"}},h)}var f=function(t){var r=e.props[t];if(r)return function(e){return r(e,{rowIndex:n,dataKey:m,columnIndex:a})}};return s.a.createElement("div",{className:"VTCell",style:{minWidth:p,maxWidth:p},onClick:f("onClick"),onDoubleClick:f("onDoubleClick"),onMouseOver:f("onMouseOver"),onMouseOut:f("onMouseOut"),onContextMenu:f("onRightClick")},o)}))}}]),t}(s.a.Component);m.__docgenInfo={description:"",methods:[],displayName:"Row",props:{index:{type:{name:"number"},required:!1,description:"Row index number"},style:{type:{name:"object"},required:!1,description:"Row style object"},columns:{type:{name:"array"},required:!1,description:"Table columns array"},rowClassName:{type:{name:"func"},required:!1,description:"Row className determine function"},getDataRowItem:{type:{name:"func"},required:!1,description:"Function to get cell value"},getColumnWidth:{type:{name:"func"},required:!1,description:"Function to get column width"},getDataRow:{type:{name:"func"},required:!1,description:"Function to get row data item"},onClick:{type:{name:"func"},required:!1,description:"Mouse actions"},onDoubleClick:{type:{name:"func"},required:!1,description:""},onMouseOver:{type:{name:"func"},required:!1,description:""},onMouseOut:{type:{name:"func"},required:!1,description:""},onRightClick:{type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\lib\\Row\\Row.js"]={name:"Row",docgenInfo:m.__docgenInfo,path:"src\\lib\\Row\\Row.js"})},211:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(25),r=n(26),o=n(29),i=n(27),l=n(28),c=n(0),s=n.n(c),u=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("span",null)}}]),t}(s.a.Component);u.__docgenInfo={description:"",methods:[],displayName:"Column",props:{cellRenderer:{type:{name:"func"},required:!1,description:"Content cell render function"},columnHeaderCellRenderer:{type:{name:"func"},required:!1,description:"Column header cell render function"},dataKey:{type:{name:"string"},required:!1,description:"Field key containing data"},width:{type:{name:"number"},required:!1,description:"Default column width in pixels"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\lib\\Column\\Column.js"]={name:"Column",docgenInfo:u.__docgenInfo,path:"src\\lib\\Column\\Column.js"})},524:function(e,t,n){"use strict";var a=n(58),r=n(53),o=n(76),i=n(10),l=n(0),c=n.n(l);t.a=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(a.a,{className:"MyTable",width:800,height:600,data:r.a,rowHeight:function(){return Math.floor(20+60*Math.random())},onRowClick:Object(o.action)("row clicked"),dynamicColumnWidth:!1,disableHeader:!1},c.a.createElement(i.a,{label:"c1",dataKey:"c1",width:500}),c.a.createElement(i.a,{label:"c2",dataKey:"c2",cellRenderer:function(e){var t=e.dataKey,n=e.rowData;return c.a.createElement("div",{className:"VTCellContent",style:{fontWeight:"bold",backgroundColor:n.get("color")}},n.get(t))}}),c.a.createElement(i.a,{label:"c3",dataKey:"c3"}),c.a.createElement(i.a,{label:"c4",dataKey:"c4"})))}},526:function(e,t,n){"use strict";var a=n(110),r=n(25),o=n(26),i=n(29),l=n(27),c=n(28),s=n(3),u=n(5),d=n(0),m=n.n(d),p=n(58),h=n(53),f=n(10);var b=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,c=Array(o),d=0;d<o;d++)c[d]=arguments[d];return n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c))),Object(u.a)(Object(s.a)(Object(s.a)(n)),"state",{sortingKeys:[{key:"c1",order:"ASC"}]}),Object(u.a)(Object(s.a)(Object(s.a)(n)),"handleClickHeader",function(e,t){var r=t.dataKey,o=n.state.sortingKeys,i=o.findIndex(function(e){return e.key===r});if(e.ctrlKey)0<=i?o[i]={key:r,order:"ASC"===o[i].order?"DESC":"ASC"}:o.push({key:r,order:"ASC"});else{var l="ASC";0<=i&&(l="ASC"===o[i].order?"DESC":"ASC"),o=[{key:r,order:l}]}n.setState({sortingKeys:Object(a.a)(o)})}),Object(u.a)(Object(s.a)(Object(s.a)(n)),"sortIndicatorRender",function(e){var t=e.dataKey,a=(e.columnIndex,n.state.sortingKeys),r=a.findIndex(function(e){return e.key===t}),o=a[r];return o?"ASC"===o.order?m.a.createElement("div",{className:"SortIndicator ASC",style:{opacity:1-r/4}}):m.a.createElement("div",{className:"SortIndicator DESC",style:{opacity:1-r/4}}):null}),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"getSortedData",value:function(){var e=this.state.sortingKeys;return function(e,t){var n=0;return t.forEach(function(a){var r=a.key,o=a.order;e=e.sort(function(e,a){for(var i=!0,l=0;l<n;l+=1)0!==e.get(t[l].key).localeCompare(a.get(t[l].key))&&(i=!1);if(i){var c="DESC"===o?-1:1;return e.get(r).localeCompare(a.get(r))*c}return 0}),n+=1}),e}(h.a,e)}},{key:"render",value:function(){return m.a.createElement("div",{className:"App"},m.a.createElement("div",{className:"DescriptionBlock"},"Click on header's cells to sort data. Use [",m.a.createElement("i",null,"Ctrl"),"] to multi-sort."),m.a.createElement(p.a,{className:"MyTable",width:800,height:600,data:this.getSortedData(),onHeaderClick:this.handleClickHeader,onRowClick:this.handleClickRow,rowClassName:this.getRowClassName,sortIndicatorRenderer:this.sortIndicatorRender},m.a.createElement(f.a,{label:"c1",dataKey:"c1"}),m.a.createElement(f.a,{label:"c2",dataKey:"c2"}),m.a.createElement(f.a,{label:"c3",dataKey:"c3"}),m.a.createElement(f.a,{label:"c4",dataKey:"c4"})))}}]),t}(m.a.Component);t.a=function(){return m.a.createElement(b,null)}},527:function(e,t,n){"use strict";var a=n(110),r=n(25),o=n(26),i=n(29),l=n(27),c=n(28),s=n(3),u=n(5),d=n(0),m=n.n(d),p=n(58),h=n(53),f=n(10);var b=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,c=Array(o),d=0;d<o;d++)c[d]=arguments[d];return n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c))),Object(u.a)(Object(s.a)(Object(s.a)(n)),"state",{selection:[]}),Object(u.a)(Object(s.a)(Object(s.a)(n)),"handleClickRow",function(e,t){var r=t.rowIndex,o=n.state.selection;if(e.ctrlKey)if(o.includes(r)){var i=o.filter(function(e){return e!==r});n.setState({selection:Object(a.a)(i)})}else n.setState({selection:Object(a.a)(o).concat([r])});else e.shiftKey&&o.length?(o.push(r),n.setState({selection:function(e,t){var n=[];if(t<e){var a=[t,e];e=a[0],t=a[1]}for(var r=e;r<=t;r++)n.push(r);return n}(function(e){return e.reduce(function(e,t){return t<e?t:e},e[0])}(o),function(e){return e.reduce(function(e,t){return t>e?t:e},e[0])}(o))})):n.setState({selection:[r]})}),Object(u.a)(Object(s.a)(Object(s.a)(n)),"getRowClassName",function(e){if(n.state.selection.includes(e))return"RowSelected"}),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"App"},m.a.createElement("div",{className:"DescriptionBlock"},"Use [",m.a.createElement("i",null,"Ctrl"),"] and [",m.a.createElement("i",null,"Shift"),"] keys to multi-select rows."),m.a.createElement(p.a,{className:"MyTable",width:800,height:600,data:h.a,onRowClick:this.handleClickRow,rowClassName:this.getRowClassName},m.a.createElement(f.a,{label:"c1",dataKey:"c1"}),m.a.createElement(f.a,{label:"c2",dataKey:"c2"})))}}]),t}(m.a.Component);t.a=function(){return m.a.createElement(b,null)}},528:function(e,t,n){"use strict";var a=n(25),r=n(26),o=n(29),i=n(27),l=n(28),c=n(3),s=n(5),u=n(58),d=n(53),m=n(76),p=n(10),h=n(0),f=n.n(h);var b=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=Array(r),u=0;u<r;u++)l[u]=arguments[u];return n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l))),Object(s.a)(Object(c.a)(Object(c.a)(n)),"scrollToRandom",function(){n.table.scrollToItem(function(e,t){return Math.floor(Math.random()*(t-e+1))+e}(0,d.a.size))}),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return f.a.createElement("div",{className:"App"},f.a.createElement("div",{className:"DescriptionBlock"},f.a.createElement("button",{type:"button",onClick:this.scrollToRandom},"Scroll to random element")),f.a.createElement(u.a,{className:"MyTable",width:800,height:600,data:d.a,onRowClick:Object(m.action)("row clicked"),dynamicColumnWidth:!1,disableHeader:!1,ref:function(t){return e.table=t}},f.a.createElement(p.a,{label:"c1",dataKey:"c1",width:500}),f.a.createElement(p.a,{label:"c2",dataKey:"c2",cellRenderer:function(e){var t=e.dataKey,n=e.rowData;return f.a.createElement("div",{className:"VTCellContent",style:{fontWeight:"bold",backgroundColor:n.get("color")}},n.get(t))}}),f.a.createElement(p.a,{label:"c3",dataKey:"c3"}),f.a.createElement(p.a,{label:"c4",dataKey:"c4"})))}}]),t}(f.a.Component);t.a=function(){return f.a.createElement(b,null)}},53:function(e,t,n){"use strict";var a=n(112),r=function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t};function o(){for(var e="#",t=0;6>t;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}for(var i=new a.b,l=0;1e3>l;l+=1)i=i.push(new a.c({c1:"".concat(Math.floor(l/10),"_word_c1"),c2:"".concat(Math.floor(l/10),"_word_c2"),c3:"".concat(Math.floor(l/10),"_").concat(r(),"_word_c3"),c4:"".concat(Math.floor(l/10),"_").concat(r(),"_word_c4"),color:o()}));t.a=i},530:function(e,t,n){"use strict";var a=n(209),r=n(187),o=n(58),i=n(210).a,l=n(53),c=n(76),s=n(10),u=n(0),d=n.n(u),m=function(e){var t=e.index,n=e.style;return 0==t%10?d.a.createElement("div",Object(a.a)({style:Object(r.a)({},n,{lineHeight:n.height+"px"})},{className:"CustomRow"}),"This is #",t/10+1," row rendered by custom renderer!"):d.a.createElement(i,e)};t.a=function(){return d.a.createElement("div",{className:"App"},d.a.createElement(o.a,{className:"MyTable",width:800,height:600,data:l.a,rowRenderer:m,onRowClick:Object(c.action)("row clicked"),dynamicColumnWidth:!1,disableHeader:!1},d.a.createElement(s.a,{label:"c1",dataKey:"c1",width:500}),d.a.createElement(s.a,{label:"c2",dataKey:"c2",cellRenderer:function(e){var t=e.dataKey,n=e.rowData;return d.a.createElement("div",{className:"VTCellContent",style:{fontWeight:"bold",backgroundColor:n.get("color")}},n.get(t))}}),d.a.createElement(s.a,{label:"c3",dataKey:"c3"}),d.a.createElement(s.a,{label:"c4",dataKey:"c4"})))}},531:function(e,t,n){n(213),n(532),e.exports=n(533)},533:function(e,t,n){"use strict";n.r(t),function(e){var t=n(208);Object(t.configure)(function(){n(546)},e)}.call(this,n(312)(e))},546:function(e,t,n){"use strict";n.r(t),function(e){var t=n(208),a=(n(547),n(550),n(524)),r=n(526),o=n(527),i=n(530),l=n(528);Object(t.storiesOf)("Table",e).add("Simple table",a.a).add("Table with sorting",r.a).add("Table with selection",o.a).add("Scroll to item",l.a).add("Custom row renderer",i.a)}.call(this,n(312)(e))},547:function(e,t,n){var a=n(548);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(456)(a,r);a.locals&&(e.exports=a.locals)},548:function(e,t,n){(e.exports=n(455)(!1)).push([e.i,".VTContainer {\n    position: relative;\n}\n\n.VTList {\n    overflow-y: scroll !important;\n}\n\n.VTHeader {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: #e1e8ed;\n}\n\n.VTGrid {\n    outline: 1px solid #5c7080;\n}\n\n.VTHeader {\n    position: absolute;\n    display: flex;\n    flex-flow: row nowrap;\n    height: 100%;\n    align-items: stretch;\n    overflow: hidden;\n}\n\n.VTRow {\n    display: flex;\n    flex-flow: row nowrap;\n    height: 100%;\n    align-items: stretch;\n    box-sizing: border-box;\n}\n\n.VTRowOdd {\n    background-color: #fff;\n}\n\n.VTRowEven {\n    background-color: #f5f8fa;\n}\n\n.VTCell,\n.VTHeaderCell {\n    flex-grow: 1;\n    box-sizing: border-box;\n\n    position: relative;\n}\n\n.VTHeaderCell {\n    border-right: 1px solid #bfccd6;\n}\n\n.VTCell {\n    border-right: 1px solid #e1e8ed;\n    border-bottom: 1px solid #ced9e0;\n}\n\n.VTHeader {\n    box-sizing: border-box;\n    border-bottom: 2px solid #5c7080;\n    font-weight: bold;\n}\n\n.VTHeaderCell:last-of-type {\n    border-right: 0;\n}\n\n.VTCellContent {\n    overflow: hidden;\n    padding: 0 5px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    height: 100%;\n}\n\n.VTColumnResizer {\n    cursor: col-resize;\n    position: absolute;\n    right: -3px;\n    top: 0;\n    height: 100%;\n    background-color: #1f4b99;\n    opacity: 0;\n    width: 6px;\n    z-index: 20;\n}\n\n.VTColumnResizer:hover {\n    opacity: 0.1;\n}\n\n.VTColumnResizerActive {\n    opacity: 0.5 !important;\n    transition: opacity 200ms;\n}\n\n.VTNoItemsLabel {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1em;\n    color: #bdbdbd;\n}\n",""])},550:function(e,t,n){var a=n(551);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(456)(a,r);a.locals&&(e.exports=a.locals)},551:function(e,t,n){(e.exports=n(455)(!1)).push([e.i,".MyTable {\n    border: 1px solid #d8e1e8;\n    border-radius: 3px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    transition: transform 0.2s cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 0.2s cubic-bezier(0.4, 1, 0.75, 0.9),\n        -webkit-transform 0.2s cubic-bezier(0.4, 1, 0.75, 0.9);\n    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2);\n    font-size: 14px;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',\n        'Droid Sans', 'Helvetica Neue', sans-serif;\n}\n\n.SortIndicator {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n}\n\n.SortIndicator.ASC {\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n\n    border-bottom: 5px solid #0e5a8a;\n}\n\n.SortIndicator.DESC {\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n\n    border-top: 5px solid #0e5a8a;\n}\n\n.SortIndicator > .counter {\n    position: absolute;\n    font-size: small;\n}\n\n.RowSelected {\n    background-color: #48aff0;\n    color: #fff;\n}\n\n.CustomRow {\n    background-color: #f5498b;\n    color: #fff;\n    font-weight: bold;\n    padding: 0 40px;\n    box-sizing: border-box;\n}\n\n.DescriptionBlock {\n    margin-bottom: 10px;\n}\n",""])},58:function(e,t,n){"use strict";var a=n(209),r=n(187),o=n(110),i=n(25),l=n(26),c=n(29),s=n(27),u=n(28),d=n(3),m=n(5),p=n(0),h=n.n(p),f=n(529),b=n(112),y=n(136),g=n.n(y),C=n(525),v=n.n(C),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r))),Object(m.a)(Object(d.a)(Object(d.a)(n)),"handleDrag",function(e,t){(0,n.props.onResizeColumn)(t.x)}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"handleClick",function(e){e.stopPropagation()}),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return h.a.createElement(v.a,{axis:"x",defaultClassName:"VTColumnResizer",defaultClassNameDragging:"VTColumnResizerActive",onStop:this.handleDrag,position:{x:0,y:0},zIndex:999},h.a.createElement("div",{className:"VTColumnResizer",onClick:this.handleClick}))}}]),t}(h.a.Component);w.__docgenInfo={description:"",methods:[{name:"handleDrag",docblock:null,modifiers:[],params:[{name:"event",type:null},{name:"data",type:null}],returns:null},{name:"handleClick",docblock:null,modifiers:[],params:[{name:"event",type:null}],returns:null}],displayName:"ColumnResizer",props:{onResizeColumn:{type:{name:"func"},required:!0,description:"Action on resize column"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\lib\\ColumnResizer\\ColumnResizer.js"]={name:"ColumnResizer",docgenInfo:w.__docgenInfo,path:"src\\lib\\ColumnResizer\\ColumnResizer.js"});var O=w,R=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.columns,a=t.height,r=t.getHeaderHeight,o=t.getColumnWidth,i=t.onResizeColumn,l=t.sortIndicatorRenderer;return h.a.createElement("div",{className:"VTHeader",style:{height:r()},ref:function(t){return e.headerEl=t}},n.map(function(t,n){var r,c=t.props,s=c.label,u=c.dataKey,d=c.columnHeaderCellRenderer,m=o(n);r=d?d({label:s,dataKey:u,columnIndex:n}):h.a.createElement("div",{className:"VTCellContent",title:s,style:{lineHeight:a+"px"}},s);var p=function(t){var a=e.props[t];if(a)return function(e){return a(e,{dataKey:u,columnIndex:n})}};return h.a.createElement("div",{className:"VTHeaderCell",style:{minWidth:m,maxWidth:m},onClick:p("onClick"),onDoubleClick:p("onDoubleClick"),onMouseOver:p("onMouseOver"),onMouseOut:p("onMouseOut"),onContextMenu:p("onRightClick")},r,h.a.createElement(O,{onResizeColumn:function(e){return i(n,e,u)}}),l({dataKey:t.props.dataKey,columnIndex:n}))}),h.a.createElement("div",{className:"VTHeaderCell",style:{minWidth:17,maxWidth:17}}))}}]),t}(h.a.Component);Object(m.a)(R,"defaultProps",{onResizeColumn:function(e){return e},sortIndicatorRenderer:function(){return null}}),R.__docgenInfo={description:"",methods:[],displayName:"Header",props:{onResizeColumn:{defaultValue:{value:"f => f",computed:!1},type:{name:"func"},required:!1,description:""},sortIndicatorRenderer:{defaultValue:{value:"() => null",computed:!1},type:{name:"func"},required:!1,description:""},columns:{type:{name:"array"},required:!0,description:""},getHeaderHeight:{type:{name:"func"},required:!0,description:""},getColumnWidth:{type:{name:"func"},required:!0,description:""},height:{type:{name:"number"},required:!0,description:""},onClick:{type:{name:"func"},required:!1,description:""},onDoubleClick:{type:{name:"func"},required:!1,description:""},onMouseOver:{type:{name:"func"},required:!1,description:""},onMouseOut:{type:{name:"func"},required:!1,description:""},onRightClick:{type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\lib\\Header\\Header.js"]={name:"Header",docgenInfo:R.__docgenInfo,path:"src\\lib\\Header\\Header.js"});var j=n(210),k=n(211),E=function(e){function t(e){var n;Object(i.a)(this,t),n=Object(c.a)(this,Object(s.a)(t).call(this,e)),Object(m.a)(Object(d.a)(Object(d.a)(n)),"state",{customColumnsWidth:[]}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getColumnWidth",function(e){var t=n.props,a=(t.children,t.width),r=t.overflowWidth,o=t.minColumnWidth,i=t.dynamicColumnWidth,l=n.state.customColumnsWidth;if(!i)return l[e];if(l[e])return l[e];var c=0,s=0;return l.forEach(function(e){e&&(s+=1,c+=e)}),Math.max((a-r-c)/(n.getColumns().length-s),o)}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getRowHeight",function(e){var t=n.props.rowHeight;return"function"==typeof t?t(e):t}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getEstimatedItemSize",function(){var e=n.props.data.reduce(function(e,t,a){return e+n.getRowHeight(a)},0);return Math.floor(e/n.getDataSize())}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getHeaderHeight",function(){var e=n.props,t=e.headerHeight;return e.disableHeader?0:"function"==typeof t?t():t}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getDataRow",function(e){var t=n.props.data;return t instanceof b.a?t.get(e):t[e]}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getDataRowItem",function(e){var t=e.rowData,n=e.dataKey;return t instanceof b.c?t.get(n):t[n]}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getDataSize",function(){var e=n.props.data;return e instanceof b.a?e.size:e.length}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"getRowWidth",function(){return n.state.customColumnsWidth.reduce(function(e,t){return e+t},0)}),Object(m.a)(Object(d.a)(Object(d.a)(n)),"handleResizeColumn",function(e,t,a){var r=n.props,i=r.minColumnWidth,l=r.maxColumnWidth,c=r.onResizeColumn,s=n.state.customColumnsWidth,u=n.getColumnWidth(e),d=Object(o.a)(s),m=Math.max(u+t,i);l&&(m=Math.min(d[e],l)),d[e]=m,n.setState({customColumnsWidth:d}),n.list&&n.list.resetAfterIndex(0),c({dataKey:a,columnIndex:e,resizeDiff:t,newWidth:m})});var a=n.props,r=a.overflowWidth,l=a.width,u=a.minColumnWidth,p=a.dynamicColumnWidth,h=[],f=0,y=0;if(n.getColumns().forEach(function(e){var t=e.props.width;Number.isInteger(t)&&(t=Math.max(t,u),f+=1,y+=t),h.push(t||void 0)}),!p){var g=Math.max((l-r-y)/(n.getColumns().length-f),u);h=h.map(function(e){return void 0===e?g:e})}return n.state.customColumnsWidth=h,n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;!this.props.disableHeader&&this.listOuterEl&&this.listOuterEl.addEventListener("scroll",function(t){console.log(e.header),e.header.headerEl.scrollLeft=t.target.scrollLeft})}},{key:"getColumns",value:function(){var e=this.props.children,t=[];return h.a.Children.forEach(e,function(e){e&&e.type===k.a&&(console.log(e),t.push(e))}),t}},{key:"scrollTo",value:function(){var e;(e=this.list).scrollTo.apply(e,arguments)}},{key:"scrollToItem",value:function(){var e;(e=this.list).scrollToItem.apply(e,arguments)}},{key:"renderHeader",value:function(){var e=this,t=this.props,n=t.disableHeader,a=t.headerHeight,r=t.sortIndicatorRenderer;if(n)return null;var o={columns:this.getColumns(),height:a,getColumnWidth:this.getColumnWidth,getHeaderHeight:this.getHeaderHeight,onResizeColumn:this.handleResizeColumn,onClick:this.props.onHeaderClick,onDoubleClick:this.props.onHeaderDoubleClick,onMouseOver:this.props.onHeaderMouseOver,onMouseOut:this.props.onHeaderMouseOut,onRightClick:this.props.onHeaderRightClick,sortIndicatorRenderer:r,ref:function(t){return e.header=t}};return h.a.createElement(R,o)}},{key:"renderRow",value:function(){var e=this,t=this.props,n=t.rowClassName,a=t.rowRenderer,o={columns:this.getColumns(),rowClassName:n,getRowWidth:this.getRowWidth,getDataRowItem:this.getDataRowItem,getColumnWidth:this.getColumnWidth,getDataRow:this.getDataRow,onClick:this.props.onRowClick,onDoubleClick:this.props.onRowDoubleClick,onMouseOver:this.props.onRowMouseOver,onMouseOut:this.props.onRowMouseOut,onRightClick:this.props.onRowRightClick},i=a||j.a;return function(t){var n=Object(r.a)({},t.style,{width:e.getRowWidth()});return h.a.createElement(i,Object(r.a)({},t,{style:n},o))}}},{key:"renderNoItemsLabel",value:function(){var e=this.props.noItemsLabel;return h.a.createElement("div",{className:"VTNoItemsLabel"},e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.height,r=t.width,o=t.listProps,i=t.className;return h.a.createElement("div",{className:g()("VTContainer",i),ref:function(t){return e.containerEl=t},style:{paddingTop:this.getHeaderHeight(),width:r,height:n-this.getHeaderHeight()}},this.renderHeader(),this.getDataSize()?h.a.createElement(f.a,Object(a.a)({ref:function(t){return e.list=t},innerRef:function(t){return e.listInnerEl=t},outerRef:function(t){return e.listOuterEl=t},className:"VTList",height:n-this.getHeaderHeight(),itemCount:this.getDataSize(),itemSize:this.getRowHeight,width:r,estimatedItemSize:this.getEstimatedItemSize()},o),this.renderRow()):this.renderNoItemsLabel())}}]),t}(h.a.Component);Object(m.a)(E,"defaultProps",{headerHeight:30,rowHeight:30,onHeaderClick:function(e){return e},onResizeColumn:function(e){return e},onRowClick:function(e){return e},overflowWidth:17,minColumnWidth:30,dynamicColumnWidth:!1,noItemsLabel:"No items"}),E.__docgenInfo={description:"",methods:[{name:"getColumns",docblock:null,modifiers:[],params:[],returns:null},{name:"getColumnWidth",docblock:null,modifiers:[],params:[{name:"columnIndex",type:null}],returns:null},{name:"getRowHeight",docblock:null,modifiers:[],params:[{name:"index",type:null}],returns:null},{name:"getEstimatedItemSize",docblock:null,modifiers:[],params:[],returns:null},{name:"getHeaderHeight",docblock:null,modifiers:[],params:[],returns:null},{name:"getDataRow",docblock:null,modifiers:[],params:[{name:"index",type:null}],returns:null},{name:"getDataRowItem",docblock:null,modifiers:[],params:[{name:"{ rowData, dataKey }",type:null}],returns:null},{name:"getDataSize",docblock:null,modifiers:[],params:[],returns:null},{name:"getRowWidth",docblock:null,modifiers:[],params:[],returns:null},{name:"handleResizeColumn",docblock:null,modifiers:[],params:[{name:"columnIndex",type:null},{name:"diff",type:null},{name:"dataKey",type:null}],returns:null},{name:"scrollTo",docblock:null,modifiers:[],params:[{name:"...args",type:null}],returns:null},{name:"scrollToItem",docblock:null,modifiers:[],params:[{name:"...args",type:null}],returns:null},{name:"renderHeader",docblock:null,modifiers:[],params:[],returns:null},{name:"renderRow",docblock:null,modifiers:[],params:[],returns:null},{name:"renderNoItemsLabel",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Table",props:{headerHeight:{defaultValue:{value:"30",computed:!1},type:{name:"union",value:[{name:"number"},{name:"func"}]},required:!1,description:"Table header height"},rowHeight:{defaultValue:{value:"30",computed:!1},type:{name:"union",value:[{name:"number"},{name:"func"}]},required:!1,description:"Table row height (may be function)\r\n\n@param {Number} index Порядковый номер элемента в списке данных"},onHeaderClick:{defaultValue:{value:"f => f",computed:!1},type:{name:"func"},required:!1,description:"Mouse action on header row\r\n\n@param {SyntheticEvent} event\r\n@param {object} headerCellParams Параметры ячейки заголовка"},onResizeColumn:{defaultValue:{value:"f => f",computed:!1},type:{name:"func"},required:!1,description:"Action on change column width\r\n\n@param {object} params"},onRowClick:{defaultValue:{value:"f => f",computed:!1},type:{name:"func"},required:!1,description:"Mouse action on table row\r\n\n@param {SyntheticEvent} event\r\n@param {object} rowCellParams Параметры ячейки строки таблицы"},overflowWidth:{defaultValue:{value:"17",computed:!1},type:{name:"number"},required:!1,description:"Width of vertical table overflow"},minColumnWidth:{defaultValue:{value:"30",computed:!1},type:{name:"number"},required:!1,description:"Minimal column width"},dynamicColumnWidth:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Dynamic width for columns that was not resized"},noItemsLabel:{defaultValue:{value:"'No items'",computed:!1},type:{name:"node"},required:!1,description:"No items in data list label"},width:{type:{name:"number"},required:!0,description:"Table width"},height:{type:{name:"number"},required:!0,description:"Table height"},data:{type:{name:"union",value:[{name:"instanceOf",value:"Immutable.Iterable"},{name:"arrayOf",value:{name:"object"}}]},required:!0,description:"Data list"},rowClassName:{type:{name:"func"},required:!1,description:"Row className determine function"},rowRenderer:{type:{name:"func"},required:!1,description:"Personal row renderer function (If nothing return, then internal row function will be applied)\r\n\n@param {object} props"},sortIndicatorRenderer:{type:{name:"func"},required:!1,description:"Sort indicator render function\r\n\n@param {object} props"},onHeaderDoubleClick:{type:{name:"func"},required:!1,description:""},onHeaderMouseOver:{type:{name:"func"},required:!1,description:""},onHeaderMouseOut:{type:{name:"func"},required:!1,description:""},onHeaderRightClick:{type:{name:"func"},required:!1,description:""},onRowDoubleClick:{type:{name:"func"},required:!1,description:""},onRowMouseOver:{type:{name:"func"},required:!1,description:""},onRowMouseOut:{type:{name:"func"},required:!1,description:""},onRowRightClick:{type:{name:"func"},required:!1,description:""},onScroll:{type:{name:"func"},required:!1,description:"Action on table scroll\r\n\n@param {object} params\r\n     @see See [React-Windows docs](https://react-window.now.sh/#/api/FixedSizeList)"},maxColumnWidth:{type:{name:"number"},required:!1,description:"Maximum column width"},listProps:{type:{name:"object"},required:!1,description:"Props for inner `react-window` list component\r\n@see See [React-Windows docs](https://react-window.now.sh/#/api/FixedSizeList)"},disableHeader:{type:{name:"bool"},required:!1,description:"Hide table header row"},className:{type:{name:"string"},required:!1,description:"Optional custom CSS class name to attach to root container element"},id:{type:{name:"string"},required:!1,description:"Optional custom id to attach to root container element"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\lib\\Table\\Table.js"]={name:"Table",docgenInfo:E.__docgenInfo,path:"src\\lib\\Table\\Table.js"});t.a=E}},[[531,3,2]]]);
//# sourceMappingURL=iframe.74e9a4b9efbc74cfaa9f.bundle.js.map