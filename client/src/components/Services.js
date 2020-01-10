import React, { Component } from 'react'
import Title from './Title';
import {FaTaxi, FaCity,FaShoppingBag} from 'react-icons/fa'
import { GiVacuumCleaner } from "react-icons/gi";

export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaTaxi/>,
                title: " Taxi Ride",
                info:"Lorem ipsum cumque asperiores laboriosam eaque provident quasi quam? Dignissimos, nobis? Nihil nobis mollitia vitae unde error tenetur ipsa."
            },
            {
                icon:<FaCity/>,
                title: "City TOur",
                info:"Lorem ipsum cumque asperiores laboriosam eaque provident quasi quam? Dignissimos, nobis? Nihil nobis mollitia vitae unde error tenetur ipsa."
            },
            {
                icon:<FaShoppingBag/>,
                title: "Delivery Services",
                info:"Lorem ipsum cumque asperiores laboriosam eaque provident quasi quam? Dignissimos, nobis? Nihil nobis mollitia vitae unde error tenetur ipsa."
            },
            {
                icon:<GiVacuumCleaner/>,
                title: "Cleaning Services",
                info:"Lorem ipsum cumque asperiores laboriosam eaque provident quasi quam? Dignissimos, nobis? Nihil nobis mollitia vitae unde error tenetur ipsa."
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title= "SERVICES" styleClass="section-title"/>
                <div className="services-center">
                        {this.state.services.map((item, index)=>{
                            return <article key={index} className="servicesList card">
                                <h1 className="icon">{item.icon}</h1>
                                <h6 className="mb-4">{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })}
                    </div>
                
            </section>
        )
    }
}
