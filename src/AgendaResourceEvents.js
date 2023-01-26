import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import AgendaEventItem from './AgendaEventItem'
import { DATE_FORMAT } from './index'

class AgendaResourceEvents extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        schedulerData: PropTypes.object.isRequired,
        resourceEvents: PropTypes.object.isRequired,
        subtitleGetter: PropTypes.func,
        eventItemClick: PropTypes.func,
        viewEventClick: PropTypes.func,
        viewEventText: PropTypes.string,
        viewEvent2Click: PropTypes.func,
        viewEvent2Text: PropTypes.string,
        slotClickedFunc: PropTypes.func,
        slotItemTemplateResolver: PropTypes.func
    }

    render() {
        const { schedulerData, resourceEvents, slotClickedFunc, slotItemTemplateResolver } = this.props;
        const { startDate, endDate, config, localeDayjs } = schedulerData;
        let agendaResourceTableWidth = schedulerData.getResourceTableWidth();
        let width = agendaResourceTableWidth - 2;

        let events = [];
        resourceEvents.headerItems.forEach((item) => {
            let start = localeDayjs(new Date(startDate)),
                end = localeDayjs(endDate).add(1, 'days'),
                headerStart = localeDayjs(new Date(item.start)),
                headerEnd = localeDayjs(new Date(item.end));

            if (start === headerStart && end === headerEnd) {
                item.events.forEach((evt) => {
                    let durationStart = localeDayjs(new Date(startDate));
                    let durationEnd = localeDayjs(endDate).add(1, 'days');
                    let eventStart = localeDayjs(evt.eventItem.start);
                    let eventEnd = localeDayjs(evt.eventItem.end);
                    let isStart = eventStart >= durationStart;
                    let isEnd = eventEnd < durationEnd;
                    let eventItem = <AgendaEventItem
                        {...this.props}
                        key={evt.eventItem.id}
                        eventItem={evt.eventItem}
                        isStart={isStart}
                        isEnd={isEnd}
                    />;
                    events.push(eventItem);
                });
            }
        });

        let a = slotClickedFunc != undefined ? <a onClick={() => {
            slotClickedFunc(schedulerData, resourceEvents);
        }}>{resourceEvents.slotName}</a>
            : <span>{resourceEvents.slotName}</span>;
        let slotItem = (
            <div style={{ width: width }} title={resourceEvents.slotName} className="overflow-text header2-text">
                {a}
            </div>
        );
        if (!!slotItemTemplateResolver) {
            let temp = slotItemTemplateResolver(schedulerData, resourceEvents, slotClickedFunc, width, "overflow-text header2-text");
            if (!!temp)
                slotItem = temp;
        }

        return (
            <tr style={{ minHeight: config.eventItemLineHeight + 2 }}>
                <td data-resource-id={resourceEvents.slotId}>
                    {slotItem}
                </td>
                <td>
                    <div className="day-event-container">
                        {events}
                    </div>
                </td>
            </tr>
        );
    }
}

export default AgendaResourceEvents
