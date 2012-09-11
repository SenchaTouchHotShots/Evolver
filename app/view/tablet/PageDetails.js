Ext.define('Evolver.view.tablet.PageDetails', {
    extend: 'Ext.Container',
    alias: 'widget.pagedetails',
    config: {
        tpl: [
            '<div class="pageDetails">',
            '    <div class="pageTitle">{title}</div>',
            '    <div class="pageMeta"><span class="pageAuthor">{author}</span> <span class="pageDate">{updated}</span></div>',
            '    <div class="pageContent">{content}</div>',
            '    <div class="pageContent"><a href="{url}">View Original Page</a></div>',
            '</div>'
        ]
    }
});