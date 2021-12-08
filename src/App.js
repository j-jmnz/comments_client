import React from 'react';
import { commentsApi } from './app/api';
import CommentCard from './components/CommentCard';
import CommentInput from './components/CommentInput';

function App() {
    const { data } = commentsApi.endpoints.getAllComments.useQuery();
    return (
        <div className='app'>
            <div>
                <div className='comments-container'>
                    {data?.map(comment => (
                        <CommentCard key={comment.createdDate} data={comment} />
                    ))}
                </div>

                <CommentInput />
            </div>
        </div>
    );
}

export default App;
