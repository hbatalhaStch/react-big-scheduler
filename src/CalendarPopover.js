import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Calendar, Popover } from 'antd';
import { DATE_FORMAT } from '.';
import dayjs from 'dayjs';


class CalendarPopover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    static propTypes = {
        onSelectDate: PropTypes.func.isRequired,
        dateLabel: PropTypes.string.isRequired,
        defaultValue: PropTypes.string.isRequired
    }

    render() {
        const { onSelectDate, dateLabel, defaultValue } = this.props;
        let popover = (
            <div className="popover-calendar">
                <Calendar defaultValue={dayjs(defaultValue)} fullscreen={false} onSelect={(date) => {
                    this.handleVisibleChange(false)
                    onSelectDate(date.format(DATE_FORMAT))
                }} />
            </div>
        )
        return (
            <Popover content={popover} placement="bottom" trigger="click"
                open={this.state.visible}
                onOpenChange={this.handleVisibleChange}>
                <span className={'header2-text-label'} style={{ cursor: 'pointer' }}>{dateLabel}</span>
            </Popover>
        );
    }

    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }
}

export default CalendarPopover