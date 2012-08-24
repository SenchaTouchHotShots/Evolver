Ext.define('Evolver.store.postStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Evolver.model.Post'
    ],
    storeId: 'postStore',
    autoLoad: true,
    config: {
        model: 'Evolver.model.Post',
        storeId: 'postStore',
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