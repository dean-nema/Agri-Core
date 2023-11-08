import { Component } from "react";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <div className="main_bg">
                            <div className="container">
                                <header>
                                    <div className="brandLogo">
                                        <figure>
                                            <img src="agric.jfif" alt="logo" width="40px" height="40px" />
                                        </figure>
                                        <span>AgriCore</span>
                                    </div>
                                </header>

                                <section className="userProfile card">
                                    <div className="profile">
                                        <figure>
                                            <img src="profile.jfif" alt="profile" width="250px" height="250px" />
                                        </figure>
                                    </div>
                                </section>

                                <section className="work_skills card">
                                    <div className="work">
                                        <h1 className="heading">Farm Details</h1>
                                        <div className="primary">
                                            <h1>Location</h1>
                                            <span>Primary</span>
                                            <p>
                                                Serowe
                                                <br />
                                                Plot 54
                                            </p>
                                        </div>

                                        <div className="secondary">
                                            <h1>Size</h1>
                                            <span>Secondary</span>
                                            <p>200hec</p>
                                        </div>
                                    </div>

                                    <div className="skills">
                                        <h1 className="heading">Skills</h1>
                                        <ul>
                                            <li style={{ '--i': 0 }}>Poultry</li>
                                            <li style={{ '--i': 1 }}>Subsistence farmer</li>
                                            <li style={{ '--i': 2 }}>Animal</li>
                                            <li style={{ '--i': 3 }}>Dairy</li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="userDetails card">
                                    <div className="userName">
                                        <h1 className="name">Omaatla Galalia</h1>
                                        <div className="map">
                                            <i className="ri-map-pin-fill ri"></i>
                                        </div>
                                        <p>Subsistence Farmer</p>
                                    </div>
                                </section>

                                <section className="timeline_about card">
                                    <div className="tabs">
                                        <ul>
                                            <li className="about active">
                                                <i className="ri-user-3-fill ri"></i>
                                                <span>About</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="contact_Info">
                                        <h1 className="heading">Contact Information</h1>
                                        <ul>
                                            <li className="phone">
                                                <h1 className="label">Phone:</h1>
                                                <span className="info">+267 75055659</span>
                                            </li>

                                            <li className="address">
                                                <h1 className="label">Address:</h1>
                                                <span className="info">
                                                    Botswana
                                                    <br />
                                                    Segoditshane, Plot 16476
                                                </span>
                                            </li>

                                            <li className="email">
                                                <h1 className="label">E-mail:</h1>
                                                <span className="info">omaatlagalalia</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="basic_info">
                                        <h1 className="heading">Basic Information</h1>
                                        <ul>
                                            <li className="birthday">
                                                <h1 className="label">Birthday:</h1>
                                                <span className="info">March 20, 2003</span>
                                            </li>

                                            <li className="sex">
                                                <h1 className="label">Gender:</h1>
                                                <span className="info">Male</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="btns">
                                        <ul>
                                            <li className="sendMsg active">
                                                <i className="ri-check-fill ri"></i>
                                                <a href="page.html">Edit</a>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Profile;