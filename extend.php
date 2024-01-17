<?php

/*
 * This file is part of blomstra/flarum-ext-linear.
 *
 * Copyright (c) Blomstra.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Blomstra\Flarum\Linear;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/resources/locale'),
/*
        ->content(function (Document $document) {
            $document->payload['blomstra-linear.services'] = array_keys(GeoIP::$services);
        }),
*/
    /**
    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Settings())
        ->default('blomstra-linear.service', 'ipapi'),

    (new Extend\Routes('api'))
        ->get('/ip_info/{ip}', 'blomstra-linear.api.ip_info', Api\Controller\ShowIpInfoController::class),
**/
];
