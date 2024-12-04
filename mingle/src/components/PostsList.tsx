import { listStyles } from "../styles/comment";
import { Empty, List } from "antd";
import React, { useEffect } from "react";
import Post from "./Post";
import { postAPI } from "../services/postService";
import CustomSpin from "./CustomSpin";


const PostsList: React.FC = () => {
    const {data: posts,refetch,isLoading} = postAPI.useFetchAllPostsQuery()

    useEffect(() => {
		refetch()
    },[refetch])

	if (isLoading) {
		return <CustomSpin />;
	}
	return (
		<List style={listStyles}>
			{posts && posts.length > 0 ? (
				posts.map((value) => (
					<List.Item key={value.id}>
						<Post {...value} />
					</List.Item>
				))
			) : (
				<Empty description={"Нет постов"} />
			)}
		</List>
	);
};

export default PostsList;
