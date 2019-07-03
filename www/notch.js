

var run = require("cordova/exec");

var AndroidSafeAreaInset = {


    hasCutout: function(success, error) {
        run(success, error, "AndroidSafeAreaInset", "hasCutout");
    },

    setLayout: function(success, error) {
        run(success, error, "AndroidSafeAreaInset", "setLayout");
    },

    getInsetTop: function (success, error) {
        run(success, error, "AndroidSafeAreaInset", "getInsetsTop");
    },
    
    getInsetRight: function (success, error) {
        run(success, error, "AndroidSafeAreaInset", "getInsetsRight");
    },
    
    getInsetBottom: function (success, error) {
        run(success, error, "AndroidSafeAreaInset", "getInsetsBottom");
    },
    
    getInsetLeft: function (success, error) {
        run(success, error, "AndroidSafeAreaInset", "getInsetsLeft");
    }

};


module.exports = AndroidSafeAreaInset;
