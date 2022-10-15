const PostCard = ({
    authorName,
    publishDate,
    postCopy
}) => {
    return (
    <div style={{margin: "40px 80px"}}>
        <div style={{ borderRadius:"5px", padding:"20px", backgroundColor:"white"}}>
            <p>{postCopy}</p>
            <p style={{color: "#741AF6"}}>{`- ${authorName}`}</p>
        </div>
        <p style={{marginLeft: "10px", color: "white"}}>{`Posted ${publishDate}`}</p>
    </div>
    ); 
}

export default PostCard; 
