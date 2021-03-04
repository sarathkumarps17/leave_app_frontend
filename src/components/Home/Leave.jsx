import React, { useState } from 'react';
import { connect } from "react-redux";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button, Grid, Icon } from 'semantic-ui-react';
import { applayLeave } from "../../redux/actions/user";
import { useHistory } from "react-router-dom"

const moment = extendMoment(originalMoment);
const leaveType = [
    { key: 'CL', text: 'CL', value: 'cl' },
    { key: 'BH', text: 'BH', value: 'bh' },
    // { key: 'OTHER', text: 'Other', value: 'other' },
]

function Leave({ penNumber, applayLeave }) {
    let history = useHistory()
    const initialState = {
        penNumber,
        leaveDetails: [],
        applicationReason: ""
    }
    const [date, setDate] = useState({ date: moment(new Date()).add(1, 'day').toDate(), leaveType: "cl" })
    // const [data, setdata] = useState(initialState);
    const [input, setInput] = useState(initialState);
    const handleChange = (event) => {
        let { name, value } = event.target;
        setInput((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!input.leaveDetails.length) {
            alert("Please Select Atleast One Day leave")
        } else {
            await applayLeave(input);
            history.push("/")
        }
    };


    return (
        <div className="leave-container">
            <Form onSubmit={handleSubmit}>
                <Grid >
                    <Grid.Row >
                        <Grid.Column>
                            <Form.Input name="penNumber" disabled label='PEN Number' width="six" onChange={handleChange} value={input.penNumber} />
                        </Grid.Column>
                    </Grid.Row>
                    <h4> Leave Dates</h4>
                    <Grid.Row >
                        {input.leaveDetails.map((leave, index) => {
                            return (
                                <Grid.Column className="leave-cols" widescreen="2" computer="3" tablet="6" mobile="10" key={index} >
                                    <Button
                                        color="red"
                                        icon="minus"
                                        label={{ basic: true, pointing: 'right', content: leave.leaveType.toUpperCase() + " on " + moment(leave.date).format("DD/MM/YYYY") }}
                                        labelPosition='left'
                                        onClick={
                                            (e) => {
                                                e.preventDefault()
                                                setInput(preValue => ({
                                                    ...preValue,
                                                    leaveDetails: preValue.leaveDetails.filter((val, ind) => ind !== index)
                                                }));

                                            }
                                        }
                                    />

                                </Grid.Column>)

                        })}

                    </Grid.Row>
                    <h4>Add leave</h4>
                    <Grid.Row>
                        <Grid.Column className="leave-cols" widescreen="3" computer="3" tablet="6" mobile="10">
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                minDate={moment(new Date()).add(1, 'day').toDate()}
                                selected={date.date}
                                onChange={(date) => setDate(preValue => ({
                                    ...preValue, date: date
                                }))}
                            />

                        </Grid.Column>
                        <Grid.Column className="leave-cols" widescreen="3" computer="4" tablet="6" mobile="10" >


                            <Form.Select
                                width="three"
                                name="leaveType"
                                onChange={(e, { value }) => setDate(preValue => (
                                    { ...preValue, leaveType: value }
                                ))}
                                options={leaveType}
                                value={date.leaveType}
                            />


                        </Grid.Column>
                        <Grid.Column className="leave-cols">
                            <div className="add-btn">

                                <Icon
                                    link
                                    color="green"
                                    size="big"
                                    name="add circle"
                                    onClick={
                                        (e) => {
                                            e.preventDefault()
                                            setInput(preValue => ({
                                                ...preValue,
                                                leaveDetails: [...preValue.leaveDetails, date]
                                            }))
                                        }
                                    }
                                />
                            </div>

                        </Grid.Column>



                    </Grid.Row>

                </Grid>
                <Form.TextArea maxlength="150" required name="applicationReason" onChange={handleChange} label='Reason For Leave' placeholder='Please briefly type leave reason..' value={input.applicationReason} />

                <Form.Button type="submit" >Submit</Form.Button>
            </Form>
        </div>

    )
}
const mapStateToProps = state => ({
    penNumber: state.auth.user.penNumber
})
export default connect(mapStateToProps, { applayLeave })(Leave)
