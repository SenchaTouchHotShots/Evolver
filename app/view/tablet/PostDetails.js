Ext.define('Evolver.view.tablet.PostDetails', {
    extend: 'Ext.Panel',
    alias: 'widget.tabletpostdetails',
    config: {
        tpl: [
            '<div class="postDetails">',
            '    <div class="postTitle">{title}</div>',
            '    <div class="postMeta"><span class="postAuthor">{author}</span> <span class="postDate">{date}</span> <span class="postCategory">{category}</span></div>',
            '    <div class="postContent">{content}</div>',
            '</div>'
        ]
    }

});