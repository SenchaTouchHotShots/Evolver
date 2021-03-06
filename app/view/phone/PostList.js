Ext.define('Evolver.view.phone.PostList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.phonepostlist',
    title: 'Posts',
    config: {
        store: 'postStore',
        itemTpl: [
            '<div class="postItem">',
            '    <div class="postTitle">{title}</div>',
            '    <div class="postMeta"><span class="postAuthor">{author}</span> - <span class="postDate">{[Ext.util.Format.date(values.pubDate, "m/d/Y")]}</span></div>',
            '</div>'
        ]
    }

});