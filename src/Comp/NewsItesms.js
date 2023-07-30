import React from "react";

function NewsItesms(props) {
  const { title, desc, imgurl, newsurl, date, author } = props;

  return (
    <div> 
      <div className="card" >
        <img
          src={
            !imgurl
              ? "https://elements-video-cover-images-0.imgix.net/94648fae-462a-4ea8-a262-5e601328632b/video_preview/video_preview_0000.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=62b56c59f4de5a8b10f03e6b2cfda879"
              : imgurl
          }
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} On {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsurl} target="" className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItesms;
