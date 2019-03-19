import React from 'react'
import { Row,Col } from 'antd';
import Header from './component/Header';
import Footer from './component/Footer';
import NavLeft from './component/NavLeft';
import './style/common.less';

export default class Admin extends React.Component {

    render(){
        return(
            <Row className="container"> 
                <Col span="3" className="nav-left">
                <NavLeft>
                NavLeft
                </NavLeft> 
                
                </Col>
                <Col span="21" className="main">

                        <Header>
                            Header
                        </Header>

                        <Row className="content">
                            Content
                        </Row>

                         <Footer>
                            Footer   
                          </Footer>   

                
                </Col>
            </Row>

        );
    }


}