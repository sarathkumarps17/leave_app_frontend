import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import { Segment, Loader, Dimmer } from "semantic-ui-react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { connect } from "react-redux";
import { getMonthlyLeaveStat } from "../../../redux/actions/dashboardData";
const localizer = momentLocalizer(moment);



const LeaveCalendar = ({ getMonthlyLeaveStat }) => {
    const [state, setstate] = useState({ data: [], loading: false })
    useEffect(() => {
        const fetchDashBoardData = async () => {
            try {
                setstate({ data: [], loading: true })
                let res = await getMonthlyLeaveStat();
                if (res) {
                    console.log(res);
                    setstate({ data: res, loading: false })
                }


            } catch (error) {
                console.log(error)
            }

        }
        fetchDashBoardData();
        return () => {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const Loading = () => (
        <Segment
            style={{
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0",
            }}
        >
            <Dimmer active inverted>
                <Loader size="large">Please wait ..</Loader>
            </Dimmer>
        </Segment>
    );

    return (

        <div className="leave-calendar">
            {state.loading ? (
                <Loading />
            ) : <Calendar
                    localizer={localizer}
                    events={state.data}
                    startAccessor="start"
                    endAccessor="end"
                // style={{ height: 400,width: }}
                />}

        </div>
    )


}
// const mapStateToProps = state => ({
//     data: state.data.data,
//     loading: state.data.loading
// })
export default connect(null, { getMonthlyLeaveStat })(LeaveCalendar)
