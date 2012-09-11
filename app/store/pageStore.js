Ext.define('Evolver.store.pageStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Evolver.model.Page'
    ],

    config: {
        model: 'Evolver.model.Page',
        autoLoad: true,
        storeId: 'pageStore',
        proxy: {
            type: 'jsonp',
            url: 'http://12ftguru.com/api/get_page_index/',
            reader: {
                type: 'json',
                rootProperty: 'pages'
            }
        }
    }
});