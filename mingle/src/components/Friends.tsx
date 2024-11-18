import { friendsStyle } from '../styles/bars';
import { Layout, Space, Typography } from 'antd'
import React from 'react'
import RecommendedFriend from './RecommendedFriend';



const Friends: React.FC = () => {
  return (
		<Layout style={friendsStyle}>
			<Typography.Title level={5}>Рекомендуемые для вас</Typography.Title>
			<Space direction='vertical' style={{rowGap: 12}}>
				<RecommendedFriend />
				<RecommendedFriend />
				<RecommendedFriend />
			</Space>
		</Layout>
  );
}

export default Friends