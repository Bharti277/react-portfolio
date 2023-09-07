import React from "react";
import "./Project.css";

function Project({ id, image, name, stack, live, source, desc }) {
  return (
    <div className="project_container">
      <div className="card" style={{ maxWidth: "450px" }}>
        <div className="">
          <div className="card__image">
            <img src={image} className="" alt={name} />
          </div>
          <div className="">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{desc}</p>
              <div className="mt-5 align-text-bottom">
                <p className="card-text">{stack}</p>
                <p className="card-text d-flex gap-4">
                  <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Live Site
                  </a>
                  <a
                    href={source}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Source Code
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
