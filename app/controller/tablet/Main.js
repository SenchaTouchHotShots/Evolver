Ext.define('Evolver.controller.tablet.Main', {
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
        var converted = original.replace(/src=\"/g, 'src=\"http://src.sencha.io/240/');
        var final = converted.replace(/((width|height)\s*=\s*"*\d+"*)/g, '');
        record.set('content', final);
        var pageDetails = this.getMainView().down('pagedetails');
        var postDetails = this.getMainView().down('postdetails');
        if(dataview.id == 'pageList') {
            postDetails.hide();
            pageDetails.setRecord(record)
            pageDetails.show();
        } else {
            pageDetails.hide();
            postDetails.setRecord(record)
            postDetails.show();
        }

    }
});