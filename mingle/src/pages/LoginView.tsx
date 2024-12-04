import { UserLoginI } from "../interfaces";
import { userAPI } from "../services/userService";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Layout, message, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	setAccessToken,
	setAuth,
	setRefreshToken,
} from "../store/features/slices/auth";
import CustomSpin from "../components/CustomSpin";

const LoginView: React.FC = () => {
	const isAuth = useAppSelector((state) => state.auth.isAuth);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [login, { isLoading, isError, error }] = userAPI.useLoginMutation();
	useEffect(() => {
		if (isAuth) {
			navigate("/");
		}
	}, [isAuth, navigate]);

	const onFinish = async (values: UserLoginI) => {
		try {
			const response = await login(values).unwrap();
			dispatch(
				setAccessToken({
					access: response.access,
				})
			);
			dispatch(
				setRefreshToken({
					refresh: response.refresh,
				})
			);
			dispatch(
				setAuth({
					flag: true,
				})
			);
			navigate("/");
		} catch (err) {
			message.error("Неправильный пароль или имя пользователя.");
		}
	};

	if (isLoading) {
		return <CustomSpin />;
	}

	return (
		<Layout
			style={{
				height: "100vh",
				width: "100%",
				alignItems: "center",
				padding: 12,
				justifyContent: "center",
			}}
		>
			<Typography.Title>Авторизация</Typography.Title>
			<Form
				name="login"
				initialValues={{ remember: true }}
				style={{ maxWidth: 360, width: "100%" }}
				onFinish={onFinish}
			>
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: "Обязательное поле!",
						},
					]}
				>
					<Input
						prefix={<UserOutlined />}
						placeholder="Имя пользователя"
					/>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: "Обязательное поле!",
						},
					]}
				>
					<Input
						prefix={<LockOutlined />}
						type="password"
						placeholder="Пароль"
					/>
				</Form.Item>
				<Form.Item>
					<Flex justify="space-between" align="left">
						<a href="">Забыл пароль?</a>
					</Flex>
				</Form.Item>

				<Form.Item>
					<Button block type="primary" htmlType="submit">
						Войти
					</Button>
					или{" "}
					<Typography.Link onClick={() => navigate("/signup/")}>
						Зарегистрироваться сейчас!
					</Typography.Link>
				</Form.Item>
			</Form>
		</Layout>
	);
};

export default LoginView;
