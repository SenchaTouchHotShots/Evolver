Ext.define('Evolver.controller.phone.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            postList: '#postList',
            pageList: '#pageList',
            mainView: '#mainView'
        },

        control: {
            postList: {
                itemtap: 'onListItemTap'
            }
        }
    },
    onListItemTap: function(dataview, index, target, record, e, options) {
        console.log(record);
        var original = record.get('content');
        console.log(original);
        var converted = original.replace(/src=\"/g, 'src=\"http://src.sencha.io/120/');
        console.log(converted);
        var final = converted.replace(/((width|height)\s*=\s*"*\d+"*)/g, '');
        record.set('content', final);
        var details = Ext.create(
            'Evolver.view.phone.PostDetails', {
                title: record.get('title'),
                data: record.data
            });
        this.getMainView().getActiveItem().push(details);
    }
});