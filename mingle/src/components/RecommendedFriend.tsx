import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Layout, Space, Typography } from 'antd'
import React from 'react'

export const RecommendedFriendStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    background: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
}

const RecommendedFriend: React.FC = () => {
  return (
		<Layout style={RecommendedFriendStyles}>
			<Space>
				<Avatar>
					<UserOutlined />
				</Avatar>
				<Space direction="vertical" style={{ rowGap: 0 }}>
					<Typography.Text>Пользователь</Typography.Text>
					<Typography.Text>Астана, Казахстан</Typography.Text>
				</Space>
			</Space>
			<Button type="primary">Подписаться</Button>
		</Layout>
  );
}

export default RecommendedFriend