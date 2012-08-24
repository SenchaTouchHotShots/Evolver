Ext.define('Evolver.view.phone.PageList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.phonepagelist',
    title: 'Pages',
    config: {
        itemTpl: [
            '<div class="pageItem">',
            '    <div class="pageTitle">{title}</div>',
            '    <div class="pageMeta">Updated <span class="pageDate">{date}</span></div>',
            '</div>'
        ]
    }

});