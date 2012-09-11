Ext.define('Evolver.view.PageList', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.pagelist',
    title: 'Pages',
    id: 'pageList',
    config: {
        store: 'pageStore',
        itemTpl: [
            '<div class="pageItem">',
            '    <div class="pageTitle">{title}</div>',
            '    <div class="pageMeta">Updated <span class="pageDate">{[Ext.util.Format.date(values.modified, "m/d/Y")]}</span></div>',
            '</div>'
        ]
    }

});