import { listStyles } from "../styles/comment";
import { List } from "antd";
import React, { useEffect } from "react";
import Post from "./Post";
import { postAPI } from "../services/postService";


const PostsList: React.FC = () => {
    const {data: posts,refetch} = postAPI.useFetchAllPostsQuery(null)

    useEffect(() => {
		refetch()
    },[refetch])

	return (
		<List style={listStyles}>
			{posts && posts.length > 0 ? (
				posts.map((value) => (
					<List.Item key={value.id}>
						<Post {...value} />
					</List.Item>
				))
			) : (
				null
			)}
		</List>
	);
};

export default PostsList;
