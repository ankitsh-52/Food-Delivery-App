// import { ReactNode } from "react"
import React from "react"
import User from "./UserCard"
import UserClass from "./UserCardClassComponent"
// export default function AboutPage() {
//     return(
//         <div>
//             <h1>About Page!</h1>
//             <h2>Details:</h2>
//             <User />
//             <br />
//             <UserClass location = {"Pune"} name="Ankit Kumar"/>
//         </div>
//     )
// }

class About extends React.Component{
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }
    render(): React.ReactNode {
        console.log("Parent Render");
        return(
        <div>
            <h1>About Page!</h1>
            <h2>Details:</h2>
            <User />
            <br />
            <UserClass location = {"Pune"} name="Ankit Kumar"/>
        </div>
        )
    }
}
export default About;