import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon
} from "react-share";

import config from "../../../content/meta/config";

const PostShare = props => {
  const {
    post: {
      uid,
      slugs,
      data: { title, text }
    },
    theme
  } = props;

  const url = config.siteUrl + config.pathPrefix + uid;
  const excerpt = text.text.slice(0, 200);
  const iconSize = 36;
  const filter = count => (count > 0 ? count : "");
  const cssStyles = css`
    .share {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .links {
      display: flex;
      flex-direction: row;

      .SocialMediaShareButton {
        margin: 0 0.8em;
        cursor: pointer;
      }
    }

    .label {
      font-size: 1.2em;
      margin: 0 1em 1em;
    }

    @media (min-width: 768px) {
      .share {
        flex-direction: row;
        margin: ${theme.space.inset.l};
      }
      .label {
        margin: ${theme.space.inline.m};
      }
    }
  `;

  return (
    <React.Fragment>
      <div className={cssStyles}>
        <div className="share">
          <span className="label">SHARE</span>
          <div className="links">
            <TwitterShareButton
              url={url}
              title={title.text}
              additionalProps={{
                "aria-label": "Twitter share"
              }}
            >
              <TwitterIcon round size={iconSize} />
            </TwitterShareButton>
            <GooglePlusShareButton
              url={url}
              additionalProps={{
                "aria-label": "Google share"
              }}
            >
              <GooglePlusIcon round size={iconSize} />
              <GooglePlusShareCount url={url}>
                {count => <div className="share-count">{filter(count)}</div>}
              </GooglePlusShareCount>
            </GooglePlusShareButton>
            <FacebookShareButton
              url={url}
              quote={`${title.text} - ${excerpt}`}
              additionalProps={{
                "aria-label": "Facebook share"
              }}
            >
              <FacebookIcon round size={iconSize} />
              <FacebookShareCount url={url}>
                {count => <div className="share-count">{filter(count)}</div>}
              </FacebookShareCount>
            </FacebookShareButton>
            <LinkedinShareButton
              url={url}
              title={title.text}
              description={excerpt}
              additionalProps={{
                "aria-label": "LinkedIn share"
              }}
            >
              <LinkedinIcon round size={iconSize} />
              <LinkedinShareCount url={url}>
                {count => <div className="share-count">{filter(count)}</div>}
              </LinkedinShareCount>
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

PostShare.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default PostShare;
