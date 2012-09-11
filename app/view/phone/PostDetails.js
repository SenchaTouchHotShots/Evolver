Ext.define('Evolver.view.phone.PostDetails', {
    extend: 'Ext.Container',
    alias: 'widget.postdetails',
    config: {
        layout: 'fit',
        scrollable: {direction: 'vertical', directionLock: true},
        tpl: [
            '<div class="postDetails">',
            '    <div class="postTitle">{title}</div>',
            '    <div class="postMeta"><span class="postAuthor">Written by {author}</span> <span class="postDate">on {[Ext.util.Format.date(values.pubDate, "m/d/Y")]}</span> <span class="postCategory"> for {category}</span></div>',
            '    <div class="postContent">{content}</div>',
            '   <div style="clear: both;"></div>',
            '</div>'
        ]
    }

});