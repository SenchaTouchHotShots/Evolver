Ext.define('Evolver.view.tablet.PageList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.tabletpagelist',
    config: {
        itemTpl: [
            '<div class="pageItem">',
            '    <div class="pageTitle">{title}</div>',
            '</div>'
        ]
    }

});