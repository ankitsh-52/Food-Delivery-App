import React from "react";

type UserClassProps = {
    name : string,
    location : string,
    userName? : string
}

type UserClassState = {
    count : number,
    count2 : number
}

class UserClass extends React.Component<UserClassProps, UserClassState>{
    constructor(props : UserClassProps){
        super(props)
        console.log(props);
        this.state = {
            count : 0,
            count2: 10
        }
        console.log("Child Constructor")
    }
    render(): React.ReactNode {
        const {count, count2} = this.state;
        console.log("Child Render")
        return(
            <div className="user-card">
                <h1>User Class Component</h1>
                <h1>Name : {this.props.name}</h1>
                <h2>Location : {this.props.location}</h2>
                <h2>Count : {count}</h2>
                <h2>Count2 : {count2}</h2>
                <button onClick={() => 
                {
                    this.setState({
                        count: this.state.count+1,
                        count2: this.state.count2 + 2
                    })
                }}>Count Increase</button>

            </div>
        )
    }
}

export default UserClass;