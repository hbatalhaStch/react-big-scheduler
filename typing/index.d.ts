import { ConfigType, Dayjs, OptionType } from "dayjs";
import React, { CSSProperties } from "react";

export default class Scheduler<T extends EventItem = EventItem> extends React.Component<SchedulerProps<T>, any> { }

export class AddMorePopover extends React.Component<AddMorePopoverProps, any> { }

export interface SchedulerProps<T extends EventItem = EventItem> {
    schedulerData: SchedulerData;
    prevClick(schedulerData: SchedulerData): void;
    nextClick(schedulerData: SchedulerData): void;
    onSelectDate(schedulerData: SchedulerData, date: string): void;
    onViewChange(schedulerData: SchedulerData, view: View): void;
    eventItemClick?: (schedulerData: SchedulerData, event: T) => void;
    eventItemTemplateResolver?: (
        schedulerData: SchedulerData,
        event: T,
        bgColor: string,
        isStart: boolean,
        isEnd: boolean,
        mustAddCssClass: string,
        mustBeHeight: number,
        agendaMaxEventWidth: number,
    ) => void;
    eventItemPopoverTemplateResolver?: (
        schedulerData: SchedulerData,
        T: T,
        title: string,
        start: Dayjs,
        end: Dayjs,
        statusColor: string,
    ) => void;
    toggleExpandFunc?: (
        schedulerData: SchedulerData,
        slotId: string
    ) => void;
    viewEventClick?: (schedulerData: SchedulerData, event: T) => void;
    viewEventText?: string;
    viewEvent2Text?: string;
    viewEvent2Click?: (schedulerData: SchedulerData, event: T) => void;
    updateEventStart?: (schedulerData: SchedulerData, event: T, newStart: string) => void;
    updateEventEnd?: (schedulerData: SchedulerData, event: T, newEnd: string) => void;
    moveEvent?: (schedulerData: SchedulerData, event: T, slotId: string, slotName: string, start: string, end: string) => void;
    newEvent?: (schedulerData: SchedulerData, slotId: string, slotName: string, start: string, end: string, type: string, item: T) => void;
    onScrollLeft?: (schedulerData: SchedulerData, schedulerContent: React.ReactNode, maxScrollLeft: number) => void;
    onScrollRight?: (schedulerData: SchedulerData, schedulerContent: React.ReactNode, maxScrollLeft: number) => void;
    onScrollTop?: (schedulerData: SchedulerData, schedulerContent: React.ReactNode, maxScrollTop: number) => void;
    onScrollBottom?: (schedulerData: SchedulerData, schedulerContent: React.ReactNode, maxScrollTop: number) => void;
    onSetAddMoreState?: (newState: State) => void;
    conflictOccurred?: (schedulerData: SchedulerData, action: string, item: T, type: string, slotId: string, slotName: string, newStart: string, newEnd: string) => void;
    nonAgendaCellHeaderTemplateResolver?: (schedulerData: SchedulerData, item: {time: string, nonWorkingTime: boolean}, formattedDateItems: string[], style: CSSProperties) => void;
    subtitleGetter?: (schedulerData: SchedulerData, event: T) => void;
    movingEvent?: (schedulerData: SchedulerData, slotId: string, slotName: string, newStart: string, newEnd: string, action: string, type: string, item: EventItem) => void;
    slotClickedFunc?: (schedulerData: SchedulerData, slot: ResourceEvent) => void;
    slotItemTemplateResolver?: (
        schedulerData: SchedulerData,
        slot: ResourceEvent, slotClickedFunc: (schedulerData: SchedulerData, slot: ResourceEvent) => void,
        width: number,
        clsName: string
    ) => void;
    leftCustomHeader?: React.ReactNode;
    rightCustomHeader?: React.ReactNode;
    dndSources?: DnDSource[];
    parentRef?: React.RefObject<any>;
}

export interface AddMorePopoverProps {
    schedulerData: SchedulerData
    headerItem: HeaderItem;
    left: number;
    top: number;
    height: number;
    closeAction: (newState: State) => void;
    subtitleGetter?: SchedulerProps['subtitleGetter'];
    moveEvent?: SchedulerProps['moveEvent'];
    eventItemClick?: SchedulerProps['eventItemClick'];
    viewEventClick?: SchedulerProps['viewEventClick'];
    viewEventText?: string;
    viewEvent2Text?: string;
    viewEvent2Click?: SchedulerProps['viewEvent2Click'];
    eventItemTemplateResolver?: SchedulerProps['eventItemTemplateResolver'];
}

export class SchedulerData {
    localeDayjs(date?: ConfigType): Dayjs
    localeDayjs(date?: ConfigType, format?: OptionType, strict?: boolean): Dayjs
    localeDayjs(date?: ConfigType, format?: OptionType, locale?: string, strict?: boolean): Dayjs

    cellUnit: CellUnit;
    viewType: ViewType;
    startDate: string;

    constructor(
        date?: string | Dayjs,
        viewType?: ViewType,
        showAgenda?: boolean,
        isEventPerspective?: boolean,
        newConfig?: SchedulerDataConfig,
        newBehaviours?: SchedulerDataBehaviors
    );

    setSchedulerLocale(lang: string): void;
    setCalendarPopoverLocale(lang: string): void;
    setResources(resources: Resource[]): void;
    setEvents(events: EventItem[]): void;
    prev(): void;
    next(): void;
    setViewType(viewType?: ViewType, showAgenda?: boolean, isEventPerspective?: boolean): void;
    setDate(date?: string): void;
    setEventGroups(eventGroups: EventGroup[]): void;
    setEventGroupsAutoGenerated(autoGenerated: boolean): void;
    setMinuteStep(minuteStep: number): void;
    getMinuteStepsInHour(): number;
    addEventGroup(eventGroup: EventGroup): void;
    updateEventStart(event: EventItem, newStart: string): void;
    updateEventEnd(event: EventItem, newEnd: string): void;
    moveEvent(event: EventItem, newSlotId: string, newSlotName: string, newStart: string, newEnd: string): void;
    getSlots(): EventGroup[] | Resource[];
    addResource(resource: Resource): void;
    getSlotById(slotId: string): EventItem;
    toggleExpandStatus(slotId: string): void;
    removeEventById(eventId: string): void;
    removeEvent(event: EventItem): void;
    isEventInTimeWindow(eventStart: Date | Dayjs, eventEnd: Date | Dayjs, windowStart: Date | Dayjs, windowEnd: Date | Dayjs): boolean;
    addEvent(newEvent: EventItem): void;
    getResourceById(resourceId: string): ResourceEvent;
    getViewStartDate(): Dayjs;
    getViewEndDate(): Dayjs;
    getViewDates(): { startDate: Dayjs, endDate: Dayjs };

}

export class DnDContext {
    constructor(
        sources: DnDSource[],
        DecoratedComponent: React.ReactNode
    );
}

export class DnDSource {
    constructor(
        resolveDragObjFunc: (props: {}) => any,
        DecoratedComponent: React.ReactNode,
        dragAnDropEnabled: boolean,
        dndType: string
    );
}

export enum CellUnit {
    Day,
    Hour,
}

export enum ViewType {
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
    viewName?: string
    viewType: ViewType;
    showAgenda: boolean;
    isEventPerspective: boolean;
}

export interface EventGroup {
    id: string;
    name: string;
    state: EventItem;
}

export interface EventItem {
    id: number | string;
    start: string;
    end: string;
    resourceId: string;
    title: string;
    bgColor?: string;
    rrule?: string;
    showPopover?: boolean;
    resizable?: boolean;
    movable?: boolean;
    startResizable?: boolean;
    endResizable?: boolean;
    groupId?: string;
    groupName?: string;
    [x: string]: unknown;
}

export interface ResourceEvent {
    id: number;
    name: string;
    parentId?: string;
    groupOnly?: boolean;
    hasSummary?: boolean;
    expanded?: boolean;
    headerItems?: EventItem[];
    render?: boolean;
    rowHeight: number;
    rowMaxCount: number;
}

export interface Resource {
    id: string;
    name: string;
    parentId?: string;
    groupOnly?: boolean;
}

export interface HeaderItem {
    time: string;
    start: string;
    end: string;
    addMore: number;
    addMoreIndex: number;
    count: number;
    nonWorkingTime: boolean;
    events: EventItem[];
}

export interface HeaderEvent {
    render: boolean;
    span: number;
    eventItem: EventItem;

}

export interface State {
    headerItem: HeaderItem;
    left: number;
    top: number;
    height: number;
}

export interface SchedulerDataConfig {
    schedulerWidth?: `${number}%`;
    besidesWidth?: number;
    schedulerMaxHeight?: number;
    tableHeaderHeight?: number;
    schedulerContentHeight?: string | number;
    agendaResourceTableWidth?: string | number;
    agendaMaxEventWidth?: string | number;
    dayResourceTableWidth?: string | number;
    weekResourceTableWidth?: string | number;
    monthResourceTableWidth?: string | number;
    quarterResourceTableWidth?: string | number;
    yearResourceTableWidth?: string | number;
    customResourceTableWidth?: string | number;
    dayCellWidth?: string | number;
    weekCellWidth?: string | number;
    monthCellWidth?: string | number;
    quarterCellWidth?: string | number;
    yearCellWidth?: string | number;
    customCellWidth?: string | number;
    dayMaxEvents?: number;
    weekMaxEvents?: number;
    monthMaxEvents?: number;
    quarterMaxEvents?: number;
    yearMaxEvents?: number;
    customMaxEvents?: number;
    eventItemPopoverTrigger?: 'hover' | 'click';
    eventItemPopoverPlacement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'
    eventItemHeight?: number;
    eventItemLineHeight?: number;
    nonAgendaSlotMinHeight?: number;
    dayStartFrom?: number;
    dayStopTo?: number;
    defaultEventBgColor?: string;
    selectedAreaColor?: string;
    nonWorkingTimeHeadColor?: string;
    nonWorkingTimeHeadBgColor?: string;
    nonWorkingTimeBodyBgColor?: string;
    summaryColor?: string;
    summaryPos?: SummaryPos;
    groupOnlySlotColor?: string;
    startResizable?: boolean;
    endResizable?: boolean;
    movable?: boolean;
    creatable?: boolean;
    crossResourceMove?: boolean;
    checkConflict?: boolean;
    scrollToSpecialDaysjsEnabled?: boolean;
    eventItemPopoverEnabled?: boolean;
    calendarPopoverEnabled?: boolean;
    recurringEventsEnabled?: boolean;
    viewChangeSpinEnabled?: boolean;
    dateChangeSpinEnabled?: boolean;
    headerEnabled?: boolean;
    resourceViewEnabled?: boolean;
    displayWeekend?: boolean;
    relativeMove?: boolean;
    defaultExpanded?: boolean;
    dragAndDropEnabled?: boolean;
    schedulerHeaderEventsFuncsTimeoutMs?: number;
    resourceName?: string;
    taskName?: string;
    agendaViewHeader?: string;
    addMorePopoverHeaderFormat?: string;
    eventItemPopoverDateFormat?: string;
    nonAgendaDayCellHeaderFormat?: string;
    nonAgendaOtherCellHeaderFormat?: string;
    minuteStep?: number;
    views?: View[];
    responsiveByParent?: boolean
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
    isNonWorkingTimeFunc?: (schedulerData: SchedulerData, time: string) => boolean;
    getCustomDateFunc?: (
        schedulerData: SchedulerData,
        num: number,
        date?: string | Dayjs,
    ) => { startDate: string | Dayjs; endDate: string | Dayjs; cellUnit: CellUnit };
    getEventTextFunc: (schedulerData: SchedulerData, event: EventItem) => string;
    getDateLabel: (schedulerData: SchedulerData, viewType: ViewType, startDate: string | Date, endDate: string | Date) => string;
    getScrollSpecialDayjs: (schedulerData: SchedulerData, startDayjs: Dayjs, endDays: Dayjs) => Dayjs;
    getSummaryFunc?: (schedulerData: SchedulerData, headerEvents: HeaderEvent[], slotId: string, slotName: string, headerStart: string, headerEnd: string) =>
        { text: string, color: string, fontSize: string };
    getNonAgendaViewBodyCellBgColorFunc?: (schedulerData: SchedulerData, slotId: string, header: { nonWorkingTime: boolean, time: string }) => string;
}

export const DATE_FORMAT = 'YYYY-MM-DD';

export const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';