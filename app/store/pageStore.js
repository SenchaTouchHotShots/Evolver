Ext.define('Evolver.store.pageStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Evolver.model.Page'
    ],

    config: {
        model: 'Evolver.model.Page',
        storeId: 'pageStore',
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json'
            }
        }
    }
});