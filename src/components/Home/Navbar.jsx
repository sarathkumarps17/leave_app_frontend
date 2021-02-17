import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'



function Navbar(props){
    return(
        <div className="navbar">
            <Segment inverted>
                <Menu inverted secondary>
                   <div className="navbar_1">
                    <Menu.Item
                            name='Casual Leave'
                            
                            
                        />
                   </div>
                    <div className="navbar_1">
                        <Menu.Item
                            name='Earn Leave'
                            
                            
                        />
                    </div>
                    <div className="navbar_1">
                        <Menu.Item
                            name='Half Pay Leave'
                            cl="0"
                            
                        />
                    </div>
                 </Menu>
            </Segment>
        </div>
    )};

export default Navbar;
