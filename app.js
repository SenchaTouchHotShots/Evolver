Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Evolver',
    models: [
        'Post',
        'Page'
    ],
    stores: [
        'postStore',
        'pageStore'
    ],
    profiles: ['Phone', 'Tablet'],
    launch: function() {
        console.log('Kablam!');
    }


});
