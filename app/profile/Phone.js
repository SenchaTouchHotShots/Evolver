Ext.define('Evolver.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Phone',
        controllers: ['Main'],
        views: ['Main', 'Evolver.view.PostList', 'Evolver.view.PageList', 'PageDetails', 'PostDetails']
    },
    isActive: function() {
         return false;
       //  return Ext.os.is.Phone;
    },
    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        console.log('phone');
       Ext.create('Evolver.view.phone.Main', {fullscreen: true});
    }
});