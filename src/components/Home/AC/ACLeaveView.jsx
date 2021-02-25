import React, { useEffect, useState } from 'react';
import { connect } from "react-redux"
import { getLeaveRequests } from "../../../redux/actions/user"
import { Segment, Dimmer, Loader, Container, Header, Button, Table, Grid, Icon, Sticky, Menu, Dropdown, Modal, Popup, Tab } from 'semantic-ui-react'
import LeaveConfirmModel from './LeaveConfirmModel';
function ACLeaveView({ getLeaveRequests, loading, leave }) {
    const [open, setOpen] = useState({ leave: {}, open: false })
    useEffect(() => {
        const fetchLeaves = async () => {
            await getLeaveRequests()
        }
        fetchLeaves();

        return () => {

        }
    }, [getLeaveRequests])
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
    const getDesignation = (userType) => {
        switch (userType) {
            case 1:
                return "Commissioner/Deputy commissioner";
            case 2:
                return "Assistant commissioner"
            case 3:
                return "Inspector"
            case 4:
                return "Sub Inspector"
            case 5:
                return "Officer"
            default:
                break;
        }
    }
    return (
        <div>
            {console.log(leave)}
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
                    {loading ? <Loading /> :
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
            <LeaveConfirmModel setOpen={setOpen} open={open} />
        </div>
    )
}
const mapStateProps = state => ({
    leave: state.leave.leave,
    loading: state.leave.loading
})
export default connect(mapStateProps, { getLeaveRequests })(ACLeaveView)
