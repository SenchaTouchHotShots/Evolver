Ext.define('Evolver.view.PostList', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.postlist',
    title: 'Posts',
    id: 'postList',
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