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
import { useAppDispatch } from "../store/hooks";
import { clearAll } from "../store/features/slices/auth";

export type SidebarItemProps = {
	name: string;
	icon: typeof UserOutlined;
	onClick?: () => void;
};

const sidebarItemsWrapperStyles: React.CSSProperties = {
	padding: 12,
	justifyContent: "left",
};

const SidebarItem: React.FC<SidebarItemProps> = ({
	name,
	icon: Icon,
	onClick,
}) => {
	return (
		<List.Item>
			<Button
				type="text"
				size="large"
				style={{ fontSize: 18, width: "100%", justifyContent: "left" }}
				onClick={onClick} // Привязка onClick
			>
				<Icon style={{ fontSize: 24, marginRight: 12 }} />
				{name}
			</Button>
		</List.Item>
	);
};

const Sidebar: React.FC = () => {
	const dispatch = useAppDispatch(); // Хук вызывается внутри компонента

	const mockdata = [
		{ name: "Главная", icon: HomeOutlined },
		{ name: "Поисковый запрос", icon: SearchOutlined },
		{ name: "Интересное", icon: CompassOutlined },
		{ name: "Уведомления", icon: HeartOutlined },
		{ name: "Сообщения", icon: WechatWorkOutlined },
		{ name: "Настройки", icon: SettingOutlined },
		{ name: "Аккаунт", icon: UserOutlined },
		{
			name: "Выйти",
			icon: LogoutOutlined,
			onClick: () => {
				dispatch(clearAll()); // Вызываем dispatch для очистки
			},
		},
	];

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
