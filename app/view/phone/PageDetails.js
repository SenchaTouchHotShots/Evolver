Ext.define('Evolver.view.phonePageDetails', {
    extend: 'Ext.Panel',
    alias: 'widget.phonepagedetails',
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