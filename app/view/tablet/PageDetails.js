Ext.define('Evolver.view.tablet.PageDetails', {
    extend: 'Ext.Panel',
    alias: 'widget.tabletpagedetails',
    config: {
        tpl: [
            '<div class="pageDetails">',
            '    <div class="pageTitle">{title}</div>',
            '    <div class="pageMeta"><span class="pageAuthor">{author}</span> <span class="pageDate">{updated}</span></div>',
            '    <div class="pageContent">{content}</div>',
            '</div>'
        ]
    }

});