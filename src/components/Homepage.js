import React, { Component } from 'react';
import '../supports/css/tambahan1.css';



class homePage extends Component {

    render(){
        return (
            <div>
                <section className="welcome_area bg-img background-overlay bg1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-content">
                                    <h6>asoss</h6>
                                    <h2>New Collection</h2>
                                    <a href="#" className="btn essence-btn">view collection</a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        )
    }
}

export default homePage;