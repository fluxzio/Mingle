import { listStyles } from "../styles/comment";
import { List } from "antd";
import React from "react";
import Post from "./Post";
import { postsI } from "@/interfaces";


const PostsList: React.FC = () => {
    const [posts, setPosts] = React.useState<postsI[] | null>(null);
	return (
		<List style={listStyles}>
            {posts? (			
            <List.Item>
                {posts.map(
                    (value) => <Post key={value.id} {...value} />
                )}
            </List.Item>
            ) : null }
		</List>
	);
};

export default PostsList;
