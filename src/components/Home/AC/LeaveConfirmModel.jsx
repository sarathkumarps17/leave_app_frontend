import React from 'react';
import { useImmer } from "use-immer";
import { connect } from "react-redux";

import { confirmLeaveRequest } from "../../../redux/actions/user";
import getDesignation from "../../../utils/getDesignation";
import { Button, Header, Modal, Table, Icon, Grid, Form, Dropdown } from 'semantic-ui-react';
function LeaveConfirmModel({ setOpen, open, confirmLeaveRequest }) {
    let { leave } = open;
    let designation = getDesignation(leave.userId.userType);
    const [state, setState] = useImmer({
        leaveId: leave._id, dateIds: []
    });

    const submitLeave = async (aprovalStatus) => {
        if (!state.dateIds.length && aprovalStatus === "forwarded") {
            alert("Please select atleast one day or reject apllication")
        } else {
            // setState(preVal => {
            //     preVal.aprovalStatus = aprovalStatus
            // })
            await confirmLeaveRequest(state.leaveId, state.dateIds, aprovalStatus);
            window.location.reload(false);
            setOpen({ open: false, leave: {} });

        }
    }
    return (

        <Modal
            onClose={() => setOpen({ open: false, leave: {} })}
            onOpen={() => setOpen({ open: false, leave: {} })}
            open={open.open}
        >
            <Modal.Header>Confirm Leave</Modal.Header>
            <Modal.Content >

                <Grid columns={2} padded >
                    <Grid.Column >
                        <Table basic='very' celled collapsing >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell><Icon size="big" name="sticky note"></Icon></Table.HeaderCell>
                                    <Table.HeaderCell><Icon size="big" name="pencil alternate"></Icon></Table.HeaderCell>
                                </Table.Row>

                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Header as="h5"
                                            content="Name"
                                            subheader="PEN"
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Header as="h5"
                                            content={leave.userId.name}
                                            subheader={leave.userId.penNumber}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Header as="h5"
                                            content="Station"
                                            subheader="Designation"
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Header as="h5"
                                            content={leave.userId.station.name}
                                            subheader={designation}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        Available CL
                                </Table.Cell>
                                    <Table.Cell>
                                        {leave.userId.availableLeave.cl}
                                    </Table.Cell>
                                </Table.Row>

                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column>
                        <Table basic='very' celled collapsing>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell><Icon size="big" name="envelope open outline" ></Icon></Table.HeaderCell>
                                    <Table.HeaderCell><Icon size="big" name="sticky note" ></Icon></Table.HeaderCell>
                                    <Table.HeaderCell><Icon size="big" name="check"> </Icon>select</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {leave.leaveDetails.map((item, index) => {

                                    return (<Table.Row key={item._id}>
                                        <Table.Cell>
                                            <Header as="h5"
                                                content="Leave Date"
                                                subheader="Leave Type"
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Header as="h5"
                                                content={new Date(item.date).toDateString().slice(3)}
                                                subheader={item.leaveType}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Form>
                                                <Form.Field>
                                                    <Form.Checkbox
                                                        checked={state.dateIds.includes(item._id) ? true : false}
                                                        onChange={(e, data) => {
                                                            if (data.checked) {
                                                                setState(preVal => { preVal.dateIds.push(item._id) })
                                                            } else
                                                                setState(preVal => { preVal.dateIds = preVal.dateIds.filter(it => it.id === item._id) })
                                                        }}
                                                    />
                                                </Form.Field>
                                            </Form>

                                        </Table.Cell>
                                    </Table.Row>
                                    )
                                }
                                )}

                            </Table.Body>
                        </Table>
                    </Grid.Column>

                </Grid>


            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={(e) => {
                    e.preventDefault();
                    submitLeave("rejected")
                }}>
                    Reject
                </Button>
                <Dropdown
                    text='Action'
                    icon='hand point down'
                    floating
                    button
                    className='icon'>
                    <Dropdown.Menu
                    >
                        <Dropdown.Item
                            content="Forwarded"
                            labelPosition='right'
                            icon='forward'
                            onClick={(e) => {
                                e.preventDefault();
                                submitLeave("forwarded")
                            }

                            }
                        />

                        <Dropdown.Item
                            disabled
                            content="Approve"
                            labelPosition='right'
                            icon='checkmark'
                            onClick={(e) => {
                                e.preventDefault();
                                submitLeave("approved")
                            }

                            }
                        />
                        <Dropdown.Item

                            content="close"
                            labelPosition='right'
                            icon='close'
                            onClick={(e) => {
                                e.preventDefault();
                                setOpen({ open: false, leave: {} });
                            }

                            }
                        />
                    </Dropdown.Menu>

                </Dropdown>
                {/* <Button
                    content="Forwarded"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={(e) => {
                        e.preventDefault();
                        submitLeave("forwarded")
                    }

                    }
                    positive
                /> */}
            </Modal.Actions>
        </Modal>
    )
}

export default connect(null, { confirmLeaveRequest })(LeaveConfirmModel);
