import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/portofolio.css' 
import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout; // membuat konstanta content 
const whyData = [
    {
        // // image: require(`../../../assets/images/tracking.png`),
        title: 'Photography',
        link : "hhttps://www.instagram.com/fadhilahpuspasari/",
        description: "I began to pursue photography since class 1 high school. I am very interested in photography and really like to explore things. All photos produced using a smartphone camera. I love to capture moments."
    },
    {
        // // image: require(`../../../assets/images/certificate.png`),
        title: 'Sports',
        link : "https://www.youtube.com/watch?v=rTVObLjfBpo",
        description: "I have won various sports, such as volleyball, table tennis, badminton and running. I don't know why but I really like sports. I want to try all sports. I once participated in a national javelin throwing competition."
    },
    {
        // // image: require(`../../../assets/images/paperless.png`),
        title: 'Music',
        link : "https://www.youtube.com/channel/UC9SkSP7FKtIckHWDecSuOxg?view_as=subscriber",
        description: "Music is my life. Guitar is my bestfriend. And singing is my release. I often cover songs and upload them on my YouTube channel and on my Instagram. every day I listen to songs that I like until I'm bored. "
    }
]

class PortofolioComponent extends Component{
    render(){
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                View Some Of My Recent Activities
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                I always do what I like until it becomes the thing I hate.
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#7d5e2a',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={24} className="mt-20">
                                <Row
                                    type="flex" justify="center"
                                    className="card-why-container"
                                >
                                    {
                                        whyData.map( data =>
                                            <Col lg={8} md={12} sm={12} className="">
                                                <div className="card-why-content">
                                                    <img src={data.image}  className="card-why-image"/>
                                                    <div className="text-soft-blue semi-bold mt-10">
                                                        {data.title}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.description}<br/><br/>
                                                        <ButtonHome
                                                            text="More"
                                                            background="#7e6752"
                                                            textColor="#fff"
                                                            className='button-participate'
                                                            onClick = {data.link}
                                                        />{}
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default PortofolioComponent;