import { useState } from 'react';
import { commentsApi } from '../app/api';

const CommentInput = () => {
    const [value, setValue] = useState('');
    const [postComment] = commentsApi.endpoints.postComment.useMutation();
    const { refetch } = commentsApi.endpoints.getAllComments.useQuery();

    const onChange = e => {
        setValue(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        postComment({
            text: value,
            author: 'hardcoded author',
        }).then(() => {
            setValue('');
            refetch();
        });
    };

    const onKeyDown = e => {
        if (e.key === 'Escape') setValue('');
    };

    return (
        <div className='comments-input'>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    value={value}
                    onChange={onChange}
                    placeholder='Type your comment...'
                    onSubmit={onSubmit}
                    onKeyDown={onKeyDown}
                />
            </form>
        </div>
    );
};

export default CommentInput;
