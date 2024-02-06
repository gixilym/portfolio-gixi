"use client";
import * as SVG from "../svgs.jsx";

function Technologies() {
  return (
    <div className="flex w-full px-6 sm:px-0 justify-center items-center">
      <SVG.ReactSVG />
      <SVG.NodeSVG />
      <SVG.NextSVG />
      <SVG.MongoSVG />
      <SVG.JSSVG />
      <SVG.HtmlSVG />
      {/* <SVG.GithubSVG /> */}
      <SVG.GitSVG />
      <SVG.FirebaseSVG />
      <SVG.ExpoSVG />
      <SVG.CSSSVG />
      <SVG.StyledSVG />
      <SVG.TailwindSVG />
      <SVG.ViteSVG />
    </div>
  );
}

export default Technologies;
