import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import getDesignation from "../../../utils/getDesignation";
import { getLeaveRequests } from "../../../redux/actions/user";
import { Segment, Dimmer, Loader, Header, Table, Icon, } from 'semantic-ui-react'
import LeaveConfirmModel from './LeaveConfirmModel';
function ACLeaveView({ getLeaveRequests, loading, leave }) {
    const [open, setOpen] = useState({ leave: {}, open: false });
    const [frontendLoading, setFrontendLoading] = useState(true)

    useEffect(() => {
        const fetchLeaves = async () => {
            setFrontendLoading(true)
            await getLeaveRequests();
            setFrontendLoading(false)
        }
        fetchLeaves();
        return () => {
        }
    }, [])
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
        <div>
            {/* {console.log(leave)} */}
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Req Number</Table.HeaderCell>
                        <Table.HeaderCell>User</Table.HeaderCell>
                        <Table.HeaderCell>Designation</Table.HeaderCell>
                        <Table.HeaderCell>Station</Table.HeaderCell>
                        <Table.HeaderCell>Leave Reason</Table.HeaderCell>
                        <Table.HeaderCell>Detials</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {loading || frontendLoading ? <Loading /> :
                        !leave.length ?
                            (<Table.Row>
                                <Table.Cell>
                                    No Leave Requests
                                        </Table.Cell>
                            </Table.Row>)
                            :
                            Object.values(leave).map(item => {
                                return <Table.Row key={item._id}>
                                    <Table.Cell>
                                        <Header as="h5"
                                            content={item.reqNumber}
                                            subheader={` Dated: ${new Date(item.createdAt).toDateString().slice(3)}`}
                                        />

                                    </Table.Cell>

                                    <Table.Cell>
                                        <Header as="h5"
                                            content={item.userId.name}
                                            subheader={` PEN: ${item.userId.penNumber}`}
                                        />

                                    </Table.Cell>
                                    <Table.Cell>
                                        {getDesignation(item.userId.userType)}

                                    </Table.Cell>
                                    <Table.Cell>
                                        <Header as="h5"
                                            content={item.userId.station.name}
                                            subheader={item.userId.stationCharge && "SHO"}
                                        />

                                    </Table.Cell>
                                    <Table.Cell>
                                        {item.applicationReason}

                                    </Table.Cell>
                                    <Table.Cell>
                                        <Icon size="large" link name={open.leave._id === item._id ? "envelope open" : "envelope square"} onClick={() => setOpen({
                                            open: true,
                                            leave: item
                                        })} />

                                    </Table.Cell>
                                </Table.Row>
                            })
                    }
                </Table.Body>
            </Table>
            {open.open && <LeaveConfirmModel setOpen={setOpen} open={open} />}
        </div>
    )
}
const mapStateProps = state => ({
    leave: state.requests.leave,
    loading: state.requests.loading
})
export default connect(mapStateProps, { getLeaveRequests })(ACLeaveView)
