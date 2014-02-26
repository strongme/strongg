/**
 * Created with JetBrains WebStorm.
 * User: walter
 * Date: 14-2-26
 * Time: 下午3:56
 * To change this template use File | Settings | File Templates.
 */

var StrongG = (function(module) {
    module.doIt = function(targetObj) {
        targetObj.prepend('<a href="https://github.com/strongme" target="_blank">Mail Me'+Date().toString()+'</a><br/>');
    }
    module.clear = function(targetObj) {
        targetObj.html('');
    }
    return module;
})(StrongG || {});