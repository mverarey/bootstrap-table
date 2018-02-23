/**
 * Bootstrap Table Spanish (Mexico) translation (Obtenido de traducción de Argentina)
 * Author: Felix Vera (felix.vera@gmail.com)
 * Actualizado: Mauricio Vera (mauricioa.vera@gmail.com)
 */
(function ($) {
    'use strict';

    $.fn.bootstrapTable.locales['es-MX'] = {
        formatLoadingMessage: function () {
            return 'Cargando, espere por favor...';
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' registros por página';
        },
        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return 'Mostrando ' + pageFrom + ' a ' + pageTo + ' de ' + totalRows + ' filas';
        },
        formatSearch: function () {
            return 'Buscar';
        },
        formatNoMatches: function () {
            return 'No se encontraron registros';
        },
        formatAllRows: function () {
            return 'Todo';
        }
        formatPaginationSwitch: function () {
            return 'Mostrar/Ocultar paginación';
        },
        formatRefresh: function () {
            return 'Actualizar';
        },
        formatColumns: function () {
            return 'Columnas';
        },
        formatExport: function () {
            return 'Exportar datos';
        },
        formatClearFilters: function () {
            return 'Quitar filtros';
        },
        formatToggle: function () {
            return 'Cambiar';
        }
    };
    $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['es-MX']);
})(jQuery);
