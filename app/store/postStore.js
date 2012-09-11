Ext.define('Evolver.store.postStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Evolver.model.Post'
    ],
    config: {
        storeId: 'postStore',
        autoLoad: true,
        model: 'Evolver.model.Post',
        proxy: {
            type: 'ajax',
            url: 'posts.rss',
            reader: {
                type: 'xml',
                record: 'item'
            }
        }
    }
});