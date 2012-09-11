Ext.define('Evolver.view.phone.PageDetails', {
    extend: 'Ext.Container',
    alias: 'widget.pagedetails',
    config: {
        layout: 'fit',
        scrollable: {direction: 'vertical', directionLock: true},
        tpl: [
            '<div class="pageDetails">',
            '    <div class="pageTitle">{title}</div>',
            '    <div class="pageMeta"><span class="pageAuthor">{author}</span> <span class="pageDate">{updated}</span></div>',
            '    <div class="pageContent">{content}</div>',
            '</div>'
        ]
    }
});