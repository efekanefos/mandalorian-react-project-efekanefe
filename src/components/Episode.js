import React from "react";

function Episode() {
  return (
    <div id="epback" className="pt-5 pb-5">
      <h1 className="text-center">Episode List</h1>
      <div data-aos="zoom-in" id="episode" className="container">
        <div className="row">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <span>Season 1</span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <span>Season 2</span>
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <ul id="s1list" className="float-start list-group">
                <a href="#">
                  <li className="list-item">Chapter 1: The Mandalorian</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 2: The Child</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 3: The Sin</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 4: Sanctuary</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 5: The Gunslinger</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 6: The Prisoner</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 7: The Reckoning</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 8: Redemption</li>
                </a>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <ul id="s2list" className="float-start list-group">
                <a href="#">
                  <li className="list-item">Chapter 9: The Marshal</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 10: The Passenger</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 11: The Heiress</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 12: The Siege</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 13: The Jedi</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 14: The Tragedy</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 15: The Believer</li>
                </a>
                <a href="#">
                  <li className="list-item">Chapter 16: The Rescue</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episode;
