import { Avatar } from "@mui/material"
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useState } from 'react'

function MessageSender() {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        setInput('')
        setImageUrl('')
    }
  return (
    <div className='message-sender'>
        <div className="message-sender-top">
            <Avatar />
            <form>
                <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                className="message-sender-input" placeholder={"What's on your mind?"}/>
                <input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="image URL (Optional)" />
                <button onClick={handleSubmit} type="submit">Hidden Submit</button>
            </form>
        </div>
        <div className="message-sender-bottom">
            <div className="message-sender-option">
                <VideocamIcon style={{color: 'red'}}/>
                <h3>Live Video</h3>
            </div>
            <div className="message-sender-option">
                <PhotoLibraryIcon style={{color: 'green'}}/>
                <h3>Photo/Video</h3>
            </div>
            <div className="message-sender-option">
                <InsertEmoticonIcon style={{color: 'orange'}}/>
                <h3>Feeling/Activity</h3>
            </div>
            
        </div>
    </div>
  )
}

export default MessageSender