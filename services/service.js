angular.module('AppNewsService', ['ngResource']). //servicio para obtener la lista de noticias

    factory('NewsFactoty', function ($resource) {

        return $resource(':resourceName.json', {}, {

            query: { method: 'GET', params: { resourceName: 'json/news_mock' }, isArray: true }

        });

    });