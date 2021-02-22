import React, { useState } from 'react';
import { connect } from "react-redux";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { Form } from 'semantic-ui-react';

const moment = extendMoment(originalMoment);
const leaveType = [
    { key: 'CL', text: 'CL', value: 'CL' },
    { key: 'BH', text: 'BH', value: 'BH' },
    { key: 'ClBh', text: 'CL+BH', value: 'CL+BH' },
    { key: 'OTHER', text: 'Other', value: 'Other' },
]

function Leave({ penNumber }) {
    const today = moment();
    const [focusedInput, setFocusedInput] = useState();
    const [date, setDate] = useState({
        fromDate: today.clone(),
        toDate: today.clone().add(1, "days")
    });
    const initialState = {
        penNumber,
        fromDate: today.clone().format("DD-MM-YYYY"),
        toDate: today.clone().add(1, "days").format("DD-MM-YYYY"),
        leaveType: "CL",
        applicationReason: ""
    }
    const [input, setInput] = useState(initialState);
    const handleChange = (event) => {
        let { name, value } = event.target;
        // console.log(event.target.value);
        setInput((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setInput(preVal => ({
            ...preVal,
            fromDate: date.fromDate.format("DD-MM-YYYY"),
            toDate: date.toDate.format("DD-MM-YYYY")
        }))
        console.log(input);
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
                <Form.Input name="penNumber" disabled fluid label='PEN Number' onChange={handleChange} value={input.penNumber} />
                <Form.Select
                    name="leaveType"
                    onChange={handleChange}
                    fluid
                    label='Leave Type'
                    options={leaveType}
                    value={input.leaveType}
                />
            </Form.Group>
            <label style={{ fontWeight: "bold" }}>
                Leave Date
            </label>
            <DateRangePicker
                minimumNights={0}
                displayFormat="DD-MM-YYYY"
                startDate={date.fromDate}
                startDateId="fromDate"
                endDate={date.toDate}
                endDateId="toDate"
                onDatesChange={({ startDate, endDate }) => {
                    setDate({
                        fromDate: startDate,
                        toDate: endDate
                    });
                }}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
            />
            <Form.TextArea required name="applicationReason" onChange={handleChange} label='Reason For Leave' placeholder='sir,' value={input.applicationReason} />
            <Form.Button type="submit" >Submit</Form.Button>
        </Form>
    )
}
const mapStateToProps = state => ({
    penNumber: state.auth.user.penNumber
})
export default connect(mapStateToProps)(Leave)
