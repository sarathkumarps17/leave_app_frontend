import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

function LeaveConfirmModel({ setOpen, open }) {
    return (
        <Modal
            onClose={() => setOpen({ open: false, leave: {} })}
            onOpen={() => setOpen({ open: false, leave: {} })}
            open={open.open}

        >
            <Modal.Header>Confirm Leave</Modal.Header>
            <Modal.Content image>

                <Modal.Description>
                    <Header>Default Profile Image</Header>

                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen({ open: false, leave: {} })}>
                    Nope
          </Button>
                <Button
                    content="Yep, that's me"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => setOpen({ open: false, leave: {} })}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default LeaveConfirmModel
