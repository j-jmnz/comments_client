import moment from 'moment';

const CommentCard = ({ data }) => {
    return (
        <div className='comment-card'>
            <p className='comment-content'>{data.text}</p>
            <div className='comment-footer'>
                <p>
                    {moment(Number(data.createdDate)).format(
                        'MM.DD. hh:mm YYYY'
                    )}
                </p>
                <p>{data.author}</p>
            </div>
        </div>
    );
};

export default CommentCard;
