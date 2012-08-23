Ext.define('Evolver.view.phonePageList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.phonepagelist',
    config: {
        itemTpl: [
            '<div class="pageItem">',
            '    <div class="pageTitle">{title}</div>',
            '    <div class="pageMeta">Updated <span class="pageDate">{date}</span></div>',
            '</div>'
        ]
    }

});