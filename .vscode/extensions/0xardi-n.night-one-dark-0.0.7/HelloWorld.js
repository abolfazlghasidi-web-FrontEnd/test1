import React from "react";
  
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: " Night One Dark",
        };
    }
    render() {
        return (
            <div>
                <ChildComponent
                    message={this.state.message}
                />
            </div>
        );
    }
}
export default App