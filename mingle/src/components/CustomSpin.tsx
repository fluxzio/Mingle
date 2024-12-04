import { LoadingOutlined } from "@ant-design/icons";
import { Layout, Spin } from "antd";
import React from "react";

const CustomSpin: React.FC = () => {
	return (
		<Layout
			style={{
				width: "100%",
				height: "100vh",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Spin indicator={<LoadingOutlined spin />} size="large" />
		</Layout>
	);
};

export default CustomSpin;
