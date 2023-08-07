import { IPost } from '../models/IPost'
import { Post } from './Post';
//Material UI
import List from '@mui/material/List';
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import styled from "@emotion/styled";
import Grid from '@mui/material/Unstable_Grid2';

type Props = {
    postList: IPost[],
    loading: boolean,
    handleDelete:any,
}

//Style
const MyButton = styled(Button)({
    minWidth: '100px',
    marginLeft: '10px'
});

export const PostList: React.FC<Props> = ({ postList, loading, handleDelete }) => {
    return (
        <>
            <Grid container spacing={2} justifyContent='center'>
                <Grid xs={8}>
                    <h1>Lista Posts</h1>
                    {loading ? <h2>Caricamento</h2> :
                        <List>
                            {postList.map((post: IPost) => {
                                return (
                                    <>
                                        <div className='post-container'>
                                            <Post key={post.id} post={post} {...post} />
                                            <MyButton onClick={() => handleDelete(post.id)} variant="outlined" color="error" startIcon={<DeleteIcon />}>
                                                Cancella
                                            </MyButton>
                                        </div>
                                        <hr />
                                    </>
                                )
                            })}
                        </List>
                    }
                </Grid>
            </Grid>
        </>
    )
}