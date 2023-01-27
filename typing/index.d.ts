import { Dayjs } from "dayjs";
import { CSSProperties } from "react";

declare module 'react-big-scheduler-stch'
{
    export default class Scheduler extends React.Component<SchedulerProps, any> { }

    export interface SchedulerProps {
        schedulerData: SchedulerData;
        prevClick(schedulerData: SchedulerData): void;
        nextClick(schedulerData: SchedulerData): void;
        onSelectDate(schedulerData: SchedulerData, date: string): void;
        onViewChange(schedulerData: SchedulerData, view: View): void;
        eventItemClick?(schedulerData: SchedulerData, event: Event): void;
        eventItemTemplateResolver?(
            schedulerData: SchedulerData,
            event: Event,
            bgColor: string,
            isStart: boolean,
            isEnd: boolean,
            mustAddCssClass: string,
            mustBeHeight: number,
            agendaMaxEventWidth: number,
        ): void;
        eventItemPopoverTemplateResolver?(
            schedulerData: SchedulerData,
            eventItem: Event,
            title: string,
            start: moment.Moment,
            end: moment.Moment,
            statusColor: string,
        ): void;
        toggleExpandFunc?: (
            schedulerData: SchedulerData,
            slotId: string
        ) => void;
        viewEventClick?: (schedulerData: SchedulerData, event: Event) => void;
        viewEventText?: string;
        viewEvent2Text?: string;
        viewEvent2Click?: (schedulerData: SchedulerData, event: Event) => void;
        updateEventStart?: (schedulerData: SchedulerData, event: Event, newStart: string) => void;
        updateEventEnd?: (schedulerData: SchedulerData, event: Event, newEnd: string) => void;
        moveEvent?: (schedulerData: SchedulerData, event: Event, slotId: string, slotName: string, start: string, end: string) => void;
        newEvent?: (schedulerData: SchedulerData, slotId: string, slotName: string, start: string, end: string, type: string, item: Event) => void;
        onScrollLeft?: (schedulerData: Scheduler, schedulerContent: React.ReactNode, maxScrollLeft: number) => void;
        onScrollRight?: (schedulerData: Scheduler, schedulerContent: React.ReactNode, maxScrollLeft: number) => void;
        onScrollTop?: (schedulerData: Scheduler, schedulerContent: React.ReactNode, maxScrollTop: number) => void;
        onScrollBottom?: (schedulerData: Scheduler, schedulerContent: React.ReactNode, maxScrollTop: number) => void;
        toggleExpandFunc?: (schedulerData: SchedulerData, slotId: string) => void;
        onSetAddMoreState?: (newState: State) => void;
        conflictOccurred?: (schedulerData: SchedulerData, action: string, item: Event, type: string, slotId: string, slotName, newStart: string, newEnd: string) => void;
        nonAgendaCellHeaderTemplateResolver?: (schedulerData: Scheduler, item: Event, formattedDateItems: string[], style: CSSProperties) => void;
        subtitleGetter?: (schedulerData: SchedulerData, event: Event) => void;
        movingEvent?: (schedulerData: SchedulerData, slotId: string, slotName: string, newStart: string, newEnd: string, action: string, type: string, item: Event) => void;
        slotClickedFunc?: (schedulerData: SchedulerData, slot: ResourceEvent) => void;
        slotItemTemplateResolver?: (
            schedulerData: SchedulerData,
            slot: ResourceEvent, slotClickedFunc: (schedulerData: SchedulerData, slot: ResourceEvent) => void,
            width: number,
            clsName: string
        ) => void;
        leftCustomHeader?: React.ReactNode;
        rightCustomHeader?: React.ReactNode;
    }

    export class SchedulerData {
        localeMoment(date: string): moment.Moment;
        cellUnit: CellUnits;
        viewType: ViewTypes;
        startDate: string;

        constructor(
            date?: string,
            viewType?: ViewTypes,
            showAgenda?: boolean,
            isEventPerspective?: boolean,
            newConfig?: SchedulerDataConfig,
            newBehaviours?: object,
            localeMoment?: typeof moment,
        );

        setResources(resources: Resource[]): void;
        setEvents(events: Event[]): void;
        prev(): void;
        next(): void;
        setViewType(viewType?: ViewTypes, showAgenda?: boolean, isEventPerspective?: boolean): void;
        setDate(date?: string): void;
        toggleExpandStatus(slotId: string): void;
        removeEventById(eventId: string): void;
        removeEvent(event: Event): void;
        isEventInTimeWindow(eventStart: Date | Dayjs, eventEnd: Date | Dayjs, windowStart: Date | Dayjs, windowEnd: Date | Dayjs): boolean;
        addEvent(newEvent: Event): void;
        getResourceById(resourceId: string): ResourceEvent;
        setSchedulerLocale(lang: string): void;
        setCalendarPopoverLocale(lang: string): void;

    }

    export enum CellUnits {
        Day,
        Hour,
    }

    export enum ViewTypes {
        Day,
        Week,
        Month,
        Quarter,
        Year,
        Custom,
        Custom1,
        Custom2,
    }

    export interface View {
        viewName?: string | undefined;
        viewType: ViewTypes;
        showAgenda: boolean;
        isEventPerspective: boolean;
    }

    export interface Event {
        id: number;
        start: string;
        end: string;
        resourceId: string;
        title: string;
        bgColor?: string | undefined;
        rrule?: string | undefined;
    }

    export interface ResourceEvent {
        slotId: number;
        slotName: string;
        parentId?: string;
        groupOnly?: boolean;
        hasSummary?: boolean;
        expanded: boolean;
        headerItems: Event[];
        render: boolean;
        rowHeight: number;
        rowMaxCount: number;
    }

    export interface Resource {
        id: string;
        name: string;
    }

    export interface State {
        headerItem: Event;
        left: number,
        top: number,
        height: number;
    }

    export interface SchedulerDataConfig {
        schedulerWidth: number | undefined;
        besidesWidth: number | undefined;
        schedulerMaxHeight: number | undefined;
        tableHeaderHeight: number | undefined;
        schedulerContentHeight: string | number | undefined;
        agendaResourceTableWidth: number | undefined;
        agendaMaxEventWidth: number | undefined;
        dayResourceTableWidth: number | undefined;
        weekResourceTableWidth: string | undefined;
        monthResourceTableWidth: number | undefined;
        quarterResourceTableWidth: number | undefined;
        yearResourceTableWidth: number | undefined;
        customResourceTableWidth: number | undefined;
        dayCellWidth: number | undefined;
        weekCellWidth: string | number | undefined;
        monthCellWidth: number | undefined;
        quarterCellWidth: number | undefined;
        yearCellWidth: number | undefined;
        customCellWidth: number | undefined;
        dayMaxEvents: number | undefined;
        weekMaxEvents: number | undefined;
        monthMaxEvents: number | undefined;
        quarterMaxEvents: number | undefined;
        yearMaxEvents: number | undefined;
        customMaxEvents: number | undefined;
        eventItemPopoverTrigger: 'hover' | 'click';
        eventItemHeight: number | undefined;
        eventItemLineHeight: number | undefined;
        nonAgendaSlotMinHeight: number | undefined;
        dayStartFrom: number | undefined;
        dayStopTo: number | undefined;
        defaultEventBgColor: string | undefined;
        selectedAreaColor: string | undefined;
        nonWorkingTimeHeadColor: string | undefined;
        nonWorkingTimeHeadBgColor: string | undefined;
        nonWorkingTimeBodyBgColor: string | undefined;
        summaryColor: string | undefined;
        summaryPos: SummaryPos | undefined;
        groupOnlySlotColor: string | undefined;
        startResizable: boolean | undefined;
        endResizable: boolean | undefined;
        movable: boolean | undefined;
        creatable: boolean | undefined;
        crossResourceMove: boolean | undefined;
        checkConflict: boolean | undefined;
        scrollToSpecialMomentEnabled: boolean | undefined;
        eventItemPopoverEnabled: boolean | undefined;
        calendarPopoverEnabled: boolean | undefined;
        recurringEventsEnabled: boolean | undefined;
        viewChangeSpinEnabled: boolean | undefined;
        dateChangeSpinEnabled: boolean | undefined;
        headerEnabled: boolean | undefined;
        displayWeekend: boolean | undefined;
        relativeMove: boolean | undefined;
        defaultExpanded: boolean | undefined;
        dragAndDropEnabled: boolean | undefined;
        schedulerHeaderEventsFuncsTimeoutMs: number | undefined;
        resourceName: string | undefined;
        taskName: string | undefined;
        agendaViewHeader: string | undefined;
        addMorePopoverHeaderFormat: string | undefined;
        eventItemPopoverDateFormat: string | undefined;
        nonAgendaDayCellHeaderFormat: string | undefined;
        nonAgendaOtherCellHeaderFormat: string | undefined;
        minuteStep: number | undefined;
        views?: View[] | undefined;
    }

    export enum SummaryPos {
        Top,
        TopRight,
        TopLeft,
        Bottom,
        BottomRight,
        BottomLeft,
    }

    export interface SchedulerDataBehaviors {
        isNonWorkingTimeFunc?(schedulerData: SchedulerData, time: string): boolean;
        getCustomDateFunc?(
            schedulerData: SchedulerData,
            num: number,
            date?: string,
        ): { startDate: string; endDate: string; cellUnit: CellUnits };
    }


}