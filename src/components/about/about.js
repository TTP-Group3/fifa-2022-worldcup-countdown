import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="steph">
      <div className="about-s">
        <div className="about-s-info">
          <h1>
            About the <span>World Cup</span>
          </h1>
          <p>
            {" "}
            The FIFA World Cup, often simply called the World Cup, is an
            international association football competition contested by the
            senior men's national teams of the members of the Fédération
            Internationale de Football Association (FIFA), the sport's global
            governing body. The championship has been awarded every four years
            since the inaugural tournament in 1930. The current champion is
            France, which won its second title at the 2018 tournament in
            Russia.The current format involves a qualification phase, which
            takes place over the preceding three years, to determine which teams
            qualify for the tournament phase.
          </p>
          <p>
            In the tournament phase, 32 teams, including the automatically
            qualifying host nation(s), compete for the title at venues within
            the host nation(s) over about a month.17 countries have hosted the
            World Cup. Brazil, France, Italy, Germany, and Mexico have each
            hosted twice, while Uruguay, Switzerland, Sweden, Chile, England,
            Argentina, Spain, the United States, Japan and South Korea
            (jointly), South Africa, and Russia have each hosted once. Qatar
            will host the 2022 tournament, and 2026 will be jointly hosted by
            Canada, the United States, and Mexico, which will give Mexico the
            distinction of being the first country to host games in three World
            Cups.{" "}
          </p>
          <br />
          <br />
          <a
            href="https://en.wikipedia.org/wiki/2022_FIFA_World_Cup"
            target="_blank">
            Read More..
          </a>
        </div>

        <div className="about-s-border">
          <div className="about-s-home-img">
            <a href="#">
              <img src={require("../images/home.png")} />
            </a>
          </div>

          <h1>---ABOUT US</h1>
        </div>

        <div className="about-s-img">
          <img src={require("../images/world_cup.jpeg")} />
        </div>

      </div><br/>
    </div>
  );
}
