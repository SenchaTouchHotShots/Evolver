Ext.define('Evolver.profile.Tablet', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Tablet',
        controllers: ['Main'],
        views: ['Main', 'PostList', 'PageList', 'PageDetails', 'PostDetails']
    },
    isActive: function() {
        return true;
       // return Ext.os.is.Tablet;
    },
    launch: function() {
        console.log('tablet');
        Ext.create('Evolver.view.tablet.Main', {fullscreen: true});
    }
});