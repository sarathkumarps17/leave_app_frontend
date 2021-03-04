import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux";
import { getUserLeave } from "../../redux/actions/user";
import { Segment, Dimmer, Loader, Table, Header, Icon, Container } from 'semantic-ui-react'

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
function LeaveList({ getUserLeave, leave, loading }) {

    useEffect(() => {
        const fetchLeave = async () => {
            getUserLeave()
        }
        fetchLeave()
        return () => {

        }
    }, [getUserLeave]);
    // console.log(leave);
    return (<div className="table-container">
        <Table striped size="large">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Req Number</Table.HeaderCell>
                    <Table.HeaderCell>Leave Reason</Table.HeaderCell>
                    <Table.HeaderCell> Application Dates Status</Table.HeaderCell>
                    <Table.HeaderCell>Leave Approval Status</Table.HeaderCell>
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
                                    {item.applicationReason}

                                </Table.Cell>
                                <Table.Cell>

                                    {item.leaveDetails.map(val =>
                                        <Table.Row key={val._id} >
                                            <Table.Cell>{new Date(val.date).toDateString().slice(3)}</Table.Cell>
                                            {val.aproved ? <Icon name="check" color="green" /> : <Icon name="close" color="yellow" />}
                                        </Table.Row>)}


                                </Table.Cell>
                                <Table.Cell>
                                    {item.aprovalStatus.toUpperCase()}
                                    <span className="icon-gap">
                                        {item.aprovalStatus === "pending" ? <Icon size="large" name="wait" color="yellow" /> : (item.aprovalStatus === "forwarded" ? <Icon size="large" name="forward" color="green" /> : item.aprovalStatus === "approved" ? <Icon size="large" name="check circle" color="green" /> : <Icon size="large" name="close" color="red" />)}
                                    </span>

                                </Table.Cell>
                            </Table.Row>
                        })
                }
            </Table.Body>
        </Table>


    </div>


    )
}

const mapStateToProps = state => ({
    leave: state.leave.leave,
    loading: state.leave.loading
})
export default connect(mapStateToProps, { getUserLeave })(LeaveList);
