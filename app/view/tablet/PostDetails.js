Ext.define('Evolver.view.tablet.PostDetails', {
    extend: 'Ext.Container',
    alias: 'widget.postdetails',
    config: {
        tpl: [
            '<div class="postDetails">',
            '    <div class="postTitle">{title}</div>',
            '    <div class="postMeta"><span class="postAuthor">{author}</span> <span class="postDate">{date}</span> <span class="postCategory">{category}</span></div>',
            '    <div class="postContent">{content}</div>',
            '    <div class="pageContent"><a href="{url}">View Original Page</a></div>',
            '</div>'
        ]
    }

});