import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed(props) {
    return (
        <div className="feed">
            <StoryReel />
            {/* StoryReel */}
            <MessageSender />
            {/* MessageSender */}
            {/* Post */}
        </div>
    )
}

export default Feed