import { UserCreationI } from "../interfaces";
import { userAPI } from "../services/userService";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Layout, message, Typography } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomSpin from "../components/CustomSpin";

const SignupView: React.FC = () => {
	const isAuth = useAppSelector((state) => state.auth.isAuth);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [signup, { isLoading, isError, error }] = userAPI.useSignupMutation();
	useEffect(() => {
		if (isAuth) {
			navigate("/");
		}
	}, [isAuth, navigate]);

	const onFinish = async (values: UserCreationI) => {
		try {
			const response = await signup(values).unwrap();
			navigate("/");
		} catch (err) {
			message.error("Не удалось зарегистрироваться в системе.");
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
			<Typography.Title>Регистрация</Typography.Title>
			<Form
				name="signup"
				initialValues={{}}
				style={{ maxWidth: 360, width: "100%" }}
				onFinish={onFinish}
			>
				<Form.Item
					name="first_name"
					rules={[
						{
							required: true,
							message: "Обязательное поле!",
						},
					]}
				>
					<Input placeholder="Имя" />
				</Form.Item>
				<Form.Item
					name="last_name"
					rules={[
						{
							required: true,
							message: "Обязательное поле!",
						},
					]}
				>
					<Input placeholder="Фамилия" />
				</Form.Item>
				<Form.Item
					name="email"
					rules={[
						{
							required: true,
							message: "Обязательное поле!",
						},
					]}
				>
					<Input prefix={<MailOutlined />} placeholder="Почта" />
				</Form.Item>
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
					<Button block type="primary" htmlType="submit">
						Зарегистрироваться
					</Button>
					или {"  "}
					<Typography.Link onClick={() => navigate("/login/")}>
						Войти
					</Typography.Link>
				</Form.Item>
			</Form>
		</Layout>
	);
};

export default SignupView;
