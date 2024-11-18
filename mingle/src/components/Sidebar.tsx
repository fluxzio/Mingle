import { sidebarStyle } from "../styles/bars";
import { Layout, Space, Button } from "antd";
import React from "react";
import {
	HomeOutlined,
	LogoutOutlined,
	SettingOutlined,
	UserOutlined,
	WechatWorkOutlined,
} from "@ant-design/icons";

const Sidebar: React.FC = () => {
	return (
		<Layout style={sidebarStyle}>
			<Space direction="vertical" style={{ rowGap: 24 }}>
				<Button type="text" size="large" style={{ fontSize: 24 }}>
					<HomeOutlined />
					Главная
				</Button>
				<Button type="text" size="large" style={{ fontSize: 24 }}>
					<WechatWorkOutlined />
					Переписки
				</Button>
				<Button type="text" size="large" style={{ fontSize: 24 }}>
					<SettingOutlined />
					Настройки
				</Button>
				<Button type="text" size="large" style={{ fontSize: 24 }}>
					<UserOutlined />
					Аккаунт
				</Button>
				<Button type="text" size="large" style={{ fontSize: 24 }}>
					<LogoutOutlined />
					Выйти
				</Button>
			</Space>
		</Layout>
	);
};

export default Sidebar;
