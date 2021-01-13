import React from "react";

function Footer() {
  return (
    <div id="footer" className="container-fluid">
      <h3 className="text-center pt-3">
        If you want us to let you know when the new Season is out
      </h3>
      <p className="text-center pb-3">
        Just give us your email adress and wait :)
      </p>
      <div className="mb-3">
        <input
          type="email"
          className="form-control mx-auto d-block"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
        <br />
        <button type="submit" className="btn btn-danger d-block mx-auto">
          Send
        </button>
      </div>
      <div className="container-fluid pt-3 pb-1">
        <div className="row text-center">
          <div className="col-sm">
            <ul className="list-group">
              <a href="#">
                <li>
                  <strong className="fs-3">Characters</strong>
                </li>
              </a>
              <a href="#mando">
                <li>The Mandalor</li>
              </a>
              <a href="#moff">
                <li>Moff Gideon</li>
              </a>
              <a href="#yoda">
                <li>Baby Yoda</li>
              </a>
              <a href="#kuil">
                <li>Kuill</li>
              </a>
            </ul>
          </div>
          <div className="col-sm">
            <ul className="list-group">
              <a href="#">
                <li>
                  <strong className="fs-3">Races</strong>
                </li>
              </a>
              <a href="#">
                <li>Human</li>
              </a>
              <a href="#">
                <li>Yoda's species</li>
              </a>
              <a href="#">
                <li>Togruta</li>
              </a>
              <a href="#">
                <li>Ugnaught</li>
              </a>
            </ul>
          </div>
          <div className="col-sm">
            <ul className="list-group">
              <a href="#">
                <li>
                  <strong className="fs-3">Technology</strong>
                </li>
              </a>
              <a href="#">
                <li>Beskar</li>
              </a>
              <a href="#">
                <li>Dark Saber</li>
              </a>
              <a href="#">
                <li>Razor Crest</li>
              </a>
              <a href="#">
                <li>Dark Trooper</li>
              </a>
            </ul>
          </div>
          <h5 className="pt-4 text-center">
            2020 &copy; - Built by{" "}
            <a
              className="text-danger"
              href="https://www.linkedin.com/in/efekan-efe/"
            >
              EfekanEfe
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
