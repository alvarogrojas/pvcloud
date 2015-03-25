'use strict';

angular.module('pvcloudApp').factory('AppRegistryService', function ($resource, UtilityService) {
    var baseURL = UtilityService.GetBackendBaseURL();
    var appAddNewItemResource = $resource(baseURL + "app_register.php?account_id=:account_id&token=:token&app_nickname=:app_nickname&app_description=:app_description", {});
    var appRegistryResource = $resource(baseURL + "app_get_list_by_account.php?account_id=:account_id&token=:token", {});
    var appResource = $resource(baseURL + "app_get_by_id.php?account_id=:account_id&token=:token&app_id=:app_id", {});
    var appRegenerateAPIKeyResource = $resource(baseURL + "app_generate_api_key.php?account_id=:account_id&token=:token&app_id=:app_id", {});
    var appUpdateResource = $resource(baseURL + "app_modify.php?account_id=:account_id&token=:token&app_id=:app_id&app_nickname=:app_nickname&app_description=:app_description", {});
    var appDeleteResource = $resource(baseURL + "app_delete.php?account_id=:account_id&token=:token&app_id=:app_id", {});

    function getAppListForAccountID(account_id, token) {
        return appRegistryResource.get({account_id: account_id, token: token});
    }
    
    function getAppByID(account_id, token, app_id) {
        return appResource.get({account_id: account_id, token: token, app_id:app_id});
    }    

    function registerNewApp(account_id, token, app_nickname, app_description) {
        return appAddNewItemResource.get({account_id: account_id, token: token, app_nickname: app_nickname, app_description: app_description});
    }

    function regenerateAPIKey(account_id, token, app_id) {
        return appRegenerateAPIKeyResource.get({account_id: account_id, token: token, app_id: app_id});
    }

    function updateApp(account_id, token, app_id, app_nickname, app_description) {
        return appUpdateResource.get({account_id: account_id, token: token, app_id: app_id, app_nickname: app_nickname, app_description: app_description});
    }

    function deleteApp(account_id, token, app_id) {
        return appDeleteResource.get({account_id: account_id, token: token, app_id: app_id});
    }

    return {
        GetAppListForAccountID: getAppListForAccountID,
        GetAppByID: getAppByID,
        RegisterNewApp: registerNewApp,
        RegenerateAPIKey: regenerateAPIKey,
        UpdateApp: updateApp,
        DeleteApp: deleteApp
    };
});