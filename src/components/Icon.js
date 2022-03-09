import "./Icon.css";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinIcon,
  LinkedinShareButton,
  LineShareButton,
  LineIcon,
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

function Icon() {
  // const currentUrl = "https://www.youtube.com/watch?v=2BnTYEafRQc&t=91s";
  const currentUrl = window.location.href;
  console.log(currentUrl);

  return (
    <div className="icon d-flex justify-content-end">
      <i
        className="bi bi-link text-black icon-item"
        data-bs-toggle="modal"
        data-bs-target="#other-share"
      ></i>

      <div
        className="modal fade "
        id="other-share"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Share Other Social Media
              </h5>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <RedditShareButton url={currentUrl} className="icon-item">
                <RedditIcon size={45} round />
              </RedditShareButton>

              <EmailShareButton url={currentUrl} className="icon-item">
                <EmailIcon size={45} round />
              </EmailShareButton>

              <LinkedinShareButton url={currentUrl} className="icon-item">
                <LinkedinIcon size={45} round />
              </LinkedinShareButton>

              <LineShareButton url={currentUrl} className="icon-item">
                <LineIcon size={45} round />
              </LineShareButton>

              <TelegramShareButton url={currentUrl} className="icon-item">
                <TelegramIcon size={45} round />
              </TelegramShareButton>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <FacebookShareButton url={currentUrl} className="icon-item">
        <FacebookIcon size={45} round />
      </FacebookShareButton>

      <TwitterShareButton url={currentUrl} className="icon-item">
        <TwitterIcon size={45} round />
      </TwitterShareButton>

      <WhatsappShareButton url={currentUrl} className="icon-item">
        <WhatsappIcon size={45} round />
      </WhatsappShareButton>
    </div>
  );
}

export default Icon;
