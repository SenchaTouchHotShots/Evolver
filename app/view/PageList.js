Ext.define('Evolver.view.PageList', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.pagelist',
    title: 'Pages',
    itemSelector: 'div.pageItem',
    config: {
        itemTpl: [
            '<div class="pageItem">',
            '    <div class="pageTitle">{title}</div>',
            '    <div class="pageMeta">Updated <span class="pageDate">{date}</span></div>',
            '</div>'
        ]
    }

});