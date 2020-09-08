import React from 'react';
import {PageHeader, Button, Modal} from 'antd';
import './TopBar.css';

class TopBar extends React.Component {
  state = {visible: false};

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleDismiss = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="page-header-wrapper">
        <PageHeader
          className="site-page-header"
          title={<div className="page-header-text">Sitian (Lucy) Shen</div>}
          subTitle={<div className="page-header-sub-text">Diligent, Bright, Passionate</div>}
          extra={[
            <Button key="contact" type="primary" onClick={this.showModal}>
              Contact
            </Button>
          ]}
        />
        <Modal
          title="Contact Info"
          visible={this.state.visible}
          onOk={this.handleDismiss}
          onCancel={this.handleDismiss}
          cancelButtonProps={{hidden: true}}
          bodyStyle={{padding: "42px 64px"}}
        >
          <p className="contact-text">Mobile: <a href="tel:412-298-4893">(412)298-4893</a></p>
          <p className="contact-text">Email: <a href="mailto:tian909@gmail.com">tian909@gmail.com</a></p>
          <p className="contact-text">LinkedIn: <a href="https://www.linkedin.com/in/sitian-shen-cmuece/"
                                                   rel="noopener noreferrer"
                                                   target="_blank">sitian-shen-cmuece</a></p>
        </Modal>
      </div>
    );
  }

}

export default TopBar;
