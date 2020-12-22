import React from "react";
import './styles/BadgesList.css';
import TwitterLogo from '../images/twitter.png'
class BadgesList extends React.Component{
    render(){
        return (
            <ul className="list-unstyled">
            {this.props.badges.map((badge)=>{
               return(
                 <li key={badge.id}>
                     <div className="container-bageslist">
                        <div className="avatar">
                            <img src={badge.avatarUrl} alt="avatar"></img>
                        </div>
                     <div className="info-container">
                        <div className="name-complete">
                            <p>{badge.firstName} {badge.lastName}</p>
                        </div>
                        <div className="twitter">
                            <img src={TwitterLogo} alt="twitter-logo"/>
                            <p>@{badge.twitter}</p>
                        </div>
                        <div className="jobTitle">
                            <p>{badge.jobTitle}</p>
                        </div>
                     </div>
                     </div>
                 </li>
               )
            })}
          </ul>
        )
    }
}
export default BadgesList;