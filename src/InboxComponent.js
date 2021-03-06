import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Talk from 'talkjs';
import NavBar from './components/Navbar/Navbar';

class InboxComponent extends Component {

    constructor(props) {
        super(props);
        
        this.inbox = undefined;
    }

    componentDidMount() {
        // Promise can be `then`ed multiple times
        Talk.ready
            .then(() => {
                const me = new Talk.User({
                    id: "12345231",
                    name: "George Looney",
                    email: "george@looney.net",
                    photoUrl: "https://talkjs.com/docs/img/george.jpg",
                    welcomeMessage: "Hey there! How are you? :-)"
                });

                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId: "tDr1cuOY",
                        me: me
                    });
                }

                const other = new Talk.User({
                    id: "54321",
                    name: "Rahul",
                    email: "rahul@gmail.com",
                    photoUrl: "https://talkjs.com/docs/img/ronald.jpg",
                    welcomeMessage: "Hey there! Whats Up ! :-)"
                });

                // You control the ID of a conversation. oneOnOneId is a helper method that generates
                // a unique conversation ID for a given pair of users. 
                const conversationId = Talk.oneOnOneId(me, other);
            
                const conversation = window.talkSession.getOrCreateConversation(conversationId);
                conversation.setParticipant(me);
                conversation.setParticipant(other);
            
                this.inbox = window.talkSession.createInbox({
                    selected: conversation
                });
                this.inbox.mount(this.container);

            })
            .catch(e => console.error(e));
    }

    componentWillUnmount() {
        if (this.inbox) {
            this.inbox.destroy();
        }
    }

    render() {
        return (
                <span>
                    <div style={{height: '500px',marginTop:"80px"}} ref={c => this.container = c}>Loading...</div>
                </span>
        );
    }
}

ReactDOM.render(<InboxComponent />, document.getElementById('root'));

export default InboxComponent;