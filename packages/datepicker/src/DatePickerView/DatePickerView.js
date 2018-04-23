import React, {Component} from 'react';
import Moment from 'moment';
import DatePicker from '../DatePicker/DatePicker';

type Props = {
	/** The label to display above the field. */
	label: string,
	/** The date format used to render the date. */
	format: string,
	/** The selected or predefined date. */
	activeDate: typeof(DateTime),
	/** Toggle the calender open/closed. */
	isCalendarOpen: boolean,
	/** Event for when the date changes. */
	onChange: (e: object) => void,
};
class DatePickerView extends Component<Prop> {

	static defaultProps = {
		format: 'DD/MM/YYYY',
		isCalendarOpen: true
	};

	constructor (props) {
		super(props);

		this.state = {
			activeDate: Moment(props.activeDate)
		};
	}

	changeDate (day) {
		const {onChange, format} = this.props;
		if (onChange) onChange(day.format(format));

		this.setState({
			activeDate: day
		});
	}

	render () {
		const {
			label,
			format,
			minDate,
			maxDate,
			isCalendarOpen,
		} = this.props;

		const {
			activeDate,
		} = this.state;

		return <div className="m-datepicker is-open">
						<DatePicker
							label={label}
							format={format}
							activeDate={activeDate}
							isCalendarOpen={isCalendarOpen}
							minDate={minDate}
							maxDate={maxDate}
							clickOnDate={this.changeDate.bind(this)}
						/>
					</div>
		;
	}
}

export default DatePickerView;