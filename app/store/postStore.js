Ext.define('Evolver.store.postStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Evolver.model.Post'
    ],

    config: {
        model: 'Evolver.model.Post',
        storeId: 'postStore',
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json'
            }
        }
    }
});