import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/landing.css' 
import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout; 

class LandingComponent extends Component{
    render(){
        const image1 = require(`../assets/images/picture.svg`); 
        const {initialData,showModal,handleOk,handleCancel} = this.props; {
        }
        return(
            <Layout className="landing-container">
                {/*<Navbar/>  {}*/}
                <Content style={{ overflow: "hidden" }}> {}
                    <Row className="section-container">
                        <Col lg={12} md={12} sm={12}>
                            <div className="image-big-container">
                                <img
                                    src={image1}
                                    alt="Home 1"
                                    style={{maxWidth: '80%', marginLeft:"100px"}}
                                />
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <Row>
                                <Col span={24}>
                                    <div className="title-container">
                                        <span className="text-soft-blue title-biggest bold">Hai, I'm</span>
                                        <br/>
                                        <span className="text-soft-blue title-big bold">Fadhilah Puspasari</span>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="image-hidden">
                                        <img
                                            src={image1}
                                            alt="Home 1"
                                            style={{maxWidth: '100%'}}
                                        />
                                    </div>
                                    <div className="description-container desc-medium">
                                    I'm confident in who I am, and I'm not doing anything wrong. 
					                I'm just being myself, being comfortable with my life, 
					                comfortable with my self, and I'm figuring out who I am.
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="button-section-1-container">                                
                                        <ButtonHome
                                            text="Show Me"
                                            background="#7e6752"
                                            textColor="#fff"
                                            className='button-participate'
                                            onClick = {showModal}
                                        />{}
                                        <ButtonHome
                                            text="Another Information"
                                            background="white"
                                            textColor="#7e6752"
                                            border="1px solid #7e6752"
                                            marginLeft={16}
                                            className='button-participate'
                                        />
                                    </div>
                                </Col>
                                <Modal
                                    title="Contact"
                                    visible={initialData.visible}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    className = "modal-notif"
                                    >
                                    <p className="text-notif">Anda dapat mengirimkan atau bertanya di fadhilahpuspasari@mail.ugm.ac.id</p>
                                </Modal>{}
                            </Row>
                        </Col>  
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default LandingComponent;