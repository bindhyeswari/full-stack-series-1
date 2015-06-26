angular.module('commons', [])
    .value('githubAPIUrl', 'https://api.github.com/search/repositories')
    .factory('GitHubAPIService', function () {
        return {
            search: function () {

            }
        };
    });