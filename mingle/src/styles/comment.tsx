export const commentCardStyles: React.CSSProperties = {
	width: "100%",
	backgroundColor: "transparent",
};

export const commentSectionStyles: React.CSSProperties = {
	display: "flex",
	flexDirection: "column",
	rowGap: 24,
	padding: 12,
	backgroundColor: "transparent",
	height: "100%",
};

export const contentStyle: React.CSSProperties = {
	display: "flex",
	height: "100%",
	width: "100%",
	boxSizing: "border-box",
};
export const contentWrapperStyle: React.CSSProperties = {
	overflow: "auto",
	display: "flex",
	height: "100%",
	width: "100%",
	boxSizing: "border-box",
	marginLeft: 8,
	scrollbarWidth: "thin", // for Firefox
	scrollbarColor: "rgba(0, 0, 0, 0.5) rgba(255, 255, 255, 0.2)", // for Firefox (thumb, track)
};
export const listStyles: React.CSSProperties = {
	display: "flex",
	justifyContent: "center",
};