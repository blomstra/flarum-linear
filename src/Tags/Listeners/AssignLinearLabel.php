<?php

namespace Blomstra\Linear\Tags\Listeners;

use Flarum\Tags\Event\Saving;
use Psr\Log\LoggerInterface;

class AssignLinearLabel
{
    public function __construct(private LoggerInterface $logger)
    {
    }

    public function handle (Saving $event)
    {
        $this->logger->info(
            data_get($event->data, 'attributes.linearLabelId', null)
        );

        $event->tag->linear_label_id = data_get($event->data, 'attributes.linearLabelId', null);
    }
}