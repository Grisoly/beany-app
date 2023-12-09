import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UseClipboardOptions, useClipboard } from "use-clipboard-copy";


export const Memegenerated = () => {

  const [copied, setCopied] = useState(false);

  const clipboard = useClipboard();
  const navigate = useNavigate();
  const location = useLocation();
  const url = new URLSearchParams(location.search).get('url');

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  }

  return(
  <div className="container">
    <button onClick={()=> navigate('/')} className="morememe">Generate More Memes</button>
    {url && <img alt="meme" src={url}/>}
    <button onClick={copyLink} className="copy">
      {copied ? 'Link copied' : 'Copy link'}
    </button>
  </div>);
};