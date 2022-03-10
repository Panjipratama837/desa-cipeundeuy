import { useState } from "react";

import "./Icon.css";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

import { CopyToClipboard } from "react-copy-to-clipboard";

function Icon() {
  // const currentUrl = "https://www.youtube.com/watch?v=2BnTYEafRQc&t=91s";
  const currentUrl = window.location.href;
  console.log(currentUrl);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 300);
  };

  return (
    <div className="icon d-flex justify-content-end">
      <CopyToClipboard text={currentUrl} onCopy={handleCopy}>
        {copied ? (
          <i className="bi bi-check2 icon-item"></i>
        ) : (
          <i className="bi bi-clipboard icon-item"></i>
        )}
      </CopyToClipboard>

      <FacebookShareButton url={currentUrl} className="icon-item">
        <FacebookIcon size={35} round />
      </FacebookShareButton>

      <TwitterShareButton url={currentUrl} className="icon-item">
        <TwitterIcon size={35} round />
      </TwitterShareButton>

      <WhatsappShareButton url={currentUrl} className="icon-item">
        <WhatsappIcon size={35} round />
      </WhatsappShareButton>
    </div>
  );
}

export default Icon;
