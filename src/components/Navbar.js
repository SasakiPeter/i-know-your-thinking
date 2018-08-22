import React from 'react';
import { Menu, Icon, Modal, Drawer } from 'antd';
import CHistory from '../containers/CHistory';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class Navbar extends React.Component {
    state = {
        current: 'history',
        visibleHistory: false,
        visibleSetting: false
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    toggleDrawer = () => {
        const { visibleHistory } = this.state;
        if (visibleHistory === false) {
            this.setState({
                visibleHistory: true,
            });
        } else {
            this.setState({
                visibleHistory: false
            });
        };
    };

    // onClose = () => {
    //     this.setState({
    //         visible: false,
    //     });
    // };

    showInfo = () => {
        Modal.info({
            title: '遊び方',
            content: (
                <div>
                    <p>このアプリは３桁の数字を当てるゲームです。</p>
                    <a href="https://github.com/SasakiPeter/i-know-your-thinking">Show GitHub</a>
                </div>
            ),
            onOk() { },
        });
    };

    showModal = () => {
        this.setState({
            visibleSetting: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visibleSetting: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visibleSetting: false,
        });
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="history" onClick={this.toggleDrawer}>
                    <Icon type="bars" />
                    <Drawer
                        title="履歴"
                        placement="left"
                        closable={false}
                        // onClose={this.onClose}
                        visible={this.state.visibleHistory}
                    >
                        <CHistory />
                    </Drawer>
                </Menu.Item>
                <Menu.Item key="info" onClick={this.showInfo}>
                    <Icon type="info-circle" />
                </Menu.Item>
                <Menu.Item key="setting">
                    <Icon type="setting" onClick={this.showModal} />
                    <Modal
                        title="設定"
                        visible={this.state.visibleSetting}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <p>現在開発中です。</p>
                    </Modal>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navbar;