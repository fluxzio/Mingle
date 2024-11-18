import { sidebarStyle } from "../styles/bars";
import { Layout, Space, Button, List } from "antd";
import React from "react";
import {
	CompassOutlined,
	HeartOutlined,
	HomeOutlined,
	LogoutOutlined,
	SearchOutlined,
	SettingOutlined,
	UserOutlined,
	WechatWorkOutlined,
} from "@ant-design/icons";

export type SidebarItemProps = {
	name: string;
	icon: typeof UserOutlined;
};

const sidebarItemsWrapperStyles: React.CSSProperties = {
	padding: 12,
	justifyContent: 'left'
}

const SidebarItem: React.FC<SidebarItemProps> = ({ name, icon: Icon }) => {
	return (
		<List.Item>
			<Button
				type="text"
				size="large"
				style={{ fontSize: 18, width: "100%", justifyContent: "left" }}
			>
				<Icon style={{ fontSize: 24, marginRight: 12 }} />
				{name}
			</Button>
		</List.Item>
	);
};

const mockdata = [
	{ name: "Главная", icon: HomeOutlined },
	{ name: "Поисковый запрос", icon: SearchOutlined },
	{ name: "Интересное", icon: CompassOutlined },
	{ name: "Уведомления", icon: HeartOutlined },
	{ name: "Сообщения", icon: WechatWorkOutlined },
	{ name: "Настройки", icon: SettingOutlined },
	{ name: "Аккаунт", icon: UserOutlined },
	{ name: "Выйти", icon: LogoutOutlined },
];

const Sidebar: React.FC = () => {
	return (
		<Layout style={sidebarStyle}>
			<Space direction="vertical" style={sidebarItemsWrapperStyles}>
				<List>
					{mockdata.map((values, index) => (
						<SidebarItem key={index} {...values} />
					))}
				</List>
			</Space>
		</Layout>
	);
};

export default Sidebar;
