import React from 'react'

function Post({title,content,autthor}) {
    return (
        <div>
            <h3>{title}</h3>
            <div>{content}</div>
            <br/>
            <i>Written by <b>{autthor}</b></i>
        </div>
    )
}

export default Post
