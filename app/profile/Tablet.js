Ext.define('Evolver.profile.Tablet', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Tablet',
        controllers: ['Main'],
        views: ['Main', 'Evolver.view.PostList', 'Evolver.view.PageList', 'PageDetails', 'PostDetails']
    },
    isActive: function() {
        return true;
       // return Ext.os.is.Tablet;
    },
    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        console.log('tablet');
        Ext.create('Evolver.view.tablet.Main', {fullscreen: true});
    }
});