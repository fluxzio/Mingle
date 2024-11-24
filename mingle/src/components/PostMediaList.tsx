import { MutedOutlined, PauseCircleOutlined, PlayCircleOutlined, SoundOutlined } from "@ant-design/icons";
import { MediaContentI } from "../interfaces";
import { Carousel, Image, Layout, List } from "antd";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const carouselItemStyles: React.CSSProperties = {
	width: "100%",
	height: "100%",
	borderRadius: 10,
};

const carouselStyles: React.CSSProperties = {
	width: "100%",
	height: "100%",
	borderRadius: 10,
};
const playerWrapperStyles: React.CSSProperties = {
	display: "flex",
	justifySelf: "center",
	position: "relative",
};

const ButtonStyles: React.CSSProperties = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	fontSize: 24,
	color: "#fff",
	background: "rgba(0, 0, 0, 0.5)", // Затемненный фон для кнопки
	borderRadius: "50%", // Круглая форма кнопки
	padding: "16px", // Пространство вокруг иконки
	cursor: "pointer",
	zIndex: 2, // Убедитесь, что кнопка выше плеера
};

const muteButtonStyles: React.CSSProperties = {
	position: "absolute",
	top: "95%",
	left: "90%",
	transform: "translate(-50%, -50%)",
	fontSize: 16,
	color: "#fff",
	background: "rgba(0, 0, 0, 0.5)",
	borderRadius: "50%",
    padding: 8,
	cursor: "pointer",
	zIndex: 2,
}; 

const CarouselItem: React.FC<MediaContentI> = ({ file, content_type }) => {
	const [playing, setPlaying] = useState(false);
    const [muted,setMuted] = useState(false);

	return (
		<div style={carouselItemStyles}>
			{content_type === "image" ? (
				<Image src={file} style={{ borderRadius: 10 }} />
			) : (
				<Layout
					style={playerWrapperStyles}
					onClick={() => setPlaying(false)}
				>
					<ReactPlayer
						url={file}
						height={600}
						playing={playing}
                        muted={muted}
						onPause={() => setPlaying(false)}
						onEnded={() => setPlaying(false)}
					/>
					{playing ? null : (
						<PlayCircleOutlined
							style={ButtonStyles}
							onClick={(e) => {
								e.stopPropagation();
								setPlaying(true);
							}}
						/>
					)}
					{muted ? (
						<MutedOutlined
							style={muteButtonStyles}
							onClick={(e) => {
								e.stopPropagation();
                                setMuted(false)
							}}
						/>
					) : (
						<SoundOutlined
							style={muteButtonStyles}
							onClick={(e) => {
								e.stopPropagation();
                                setMuted(true);
							}}
						/>
					)}
				</Layout>
			)}
		</div>
	);
};

const PostMediaList: React.FC<{ mediaList: MediaContentI[] }> = ({
	mediaList,
}) => {
	return (
		<Carousel style={carouselStyles} arrows draggable>
			{mediaList && mediaList.length > 0 ? (
				mediaList.map((values) => (
					<CarouselItem key={values.id} {...values} />
				))
			) : (
				<List />
			)}
		</Carousel>
	);
};

export default PostMediaList;
