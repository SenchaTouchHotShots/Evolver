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
            },
            pageList: {
                itemtap: 'onListItemTap'
            }
        }
    },
    onListItemTap: function(dataview, index, target, record, e, options) {
        var original = record.get('content');
        var converted = original.replace(/src=\"/g, 'src=\"http://src.sencha.io/120/');
        var final = converted.replace(/((width|height)\s*=\s*"*\d+"*)/g, '');
        record.set('content', final);
        if(dataview.id == 'postList') {
            var details = Ext.create(
                'Evolver.view.phone.PostDetails', {
                    title: record.get('title'),
                    data: record.data
                });
        } else {
            var details = Ext.create(
                'Evolver.view.phone.PageDetails', {
                    title: record.get('title'),
                    data: record.data
                });
        }

        this.getMainView().getActiveItem().push(details);
    }
});