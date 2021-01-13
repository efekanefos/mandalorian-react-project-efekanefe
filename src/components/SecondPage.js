import React from "react";

function SecondPage() {
  return (
    <div id="characters" className="container-fluid text-center m-0 p-0">
      <h3 className="text-white pb-3 pt-4">Choose Your Character!</h3>
      <div className="container">
        <div className="row pt-2 pb-5">
          <div className="col-sm pb-3">
            <a href="#mando">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/TheMandalorian.jpg/220px-TheMandalorian.jpg"
                alt="player1"
              />
            </a>
          </div>
          <div className="col-sm pb-2">
            <a href="#moff">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Moff_Gideon_Star_Wars.jpg/220px-Moff_Gideon_Star_Wars.jpg"
                alt="player2"
              />
            </a>
          </div>
          <div className="col-sm pb-2">
            <a href="#yoda">
              <img
                src="https://external-preview.redd.it/U4E8qzYOMzaryya9V-3744w8bCmslarXwRZM06ky8jM.jpg?auto=webp&s=a63aee4557f6a3734f50641c9392cf7ef5489d3b"
                alt="player3"
              />
            </a>
          </div>
          <div className="col-sm pb-2">
            <a href="#kuil">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Kuiil_Star_Wars.jpg/220px-Kuiil_Star_Wars.jpg"
                alt="player4"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
