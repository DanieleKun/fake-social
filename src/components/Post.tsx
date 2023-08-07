import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import styled from "@emotion/styled";
import { IPost } from "../models/IPost";

type Props= {
    post: IPost
}

// Style
const MyListId = styled(ListItemAvatar)({
    marginRight: '30px'
});

export const Post: React.FC<Props> = ({ post }) => {
        //const [loadingPost, setLoadingPost] = useState<boolean>(false)

    return (
        <>
            <ListItem>
                <MyListId>
                    User ID {post.userId}
                </MyListId>
                <ListItemText
                    primary={post.title}
                    secondary={post.body}
                />
            </ListItem>
        </>
    )
}

// }
// function Post(post: IPost) {


// export default Post