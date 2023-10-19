import { useState, useCallback } from "react";
import COONTACTPOPUP from "./pop ups/contact";
import PortalPopup from "./pop ups/portalPop";
// import SIGNUP from "../compon";
import { useNavigate } from "react-router-dom";
import Component4 from "../components/Component4";

const SIGNIN = () => {
  const [isCOONTACTPOPUPOpen, setCOONTACTPOPUPOpen] = useState(false);
  const [isSIGNUPOpen, setSIGNUPOpen] = useState(false);
  const navigate = useNavigate();

  const onComponent2ContainerClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onHOMETextClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onComponent1ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLOGINTextClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const openSIGNUP = useCallback(() => {
    setSIGNUPOpen(true);
  }, []);

  const closeSIGNUP = useCallback(() => {
    setSIGNUPOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-darkseagreen w-full h-[1024px] overflow-hidden text-center text-xl text-color-black font-inter">
        <div className="absolute top-[-7px] left-[0px] bg-mediumseagreen w-[1440px] h-[166px]" />
        <i className="absolute top-[207px] left-[568px] text-[48px] font-medium">
          Welcome
        </i>
        <div className="absolute top-[404px] left-[497px] inline-block w-[157px]">
          USERNAME
        </div>
        <div className="absolute top-[432px] left-[511px] rounded-11xl bg-background-color-light w-[444px] h-16" />
        <div className="absolute top-[747px] left-[631px] rounded-11xl bg-olivedrab w-[210px] h-16" />
        <div className="absolute top-[597px] left-[511px] rounded-11xl bg-background-color-light w-[444px] h-16" />
        <div className="absolute top-[567px] left-[511px] text-lg text-left inline-block w-[141px] h-[23px]">
          PASSWORD
        </div>
        <div
          className="absolute top-[761px] left-[694px] text-lg inline-block w-[79px] cursor-pointer"
          onClick={onLOGINTextClick}
        >
          LOGIN
        </div>
        <div className="absolute top-[330px] left-[610px] text-13xl inline-block w-[168px] h-10">
          SIGN IN
        </div>
        <div className="absolute top-[876px] left-[83px] flex items-center justify-center w-[294px]">
          FORGOT PASSWORD?
        </div>
        <Component4
          onComponent2ContainerClick={onComponent2ContainerClick}
          onHOMETextClick={onHOMETextClick}
          onComponent1ContainerClick={onComponent1ContainerClick}
        />
        <div
          className="absolute top-[876px] left-[921px] cursor-pointer"
          onClick={openSIGNUP}
        >
          DON’T HAVE AN ACCOUNT SIGNUP
        </div>
        <img
          className="absolute top-[307px] left-[773px] w-[68px] h-[86px] overflow-hidden"
          alt=""
          src="/signin-1.svg"
        />
      </div>
      {/* {isSIGNUPOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSIGNUP}
        >
          <SIGNUP onClose={closeSIGNUP} />
        </PortalPopup>
      )} */}
    </>
  );
};

export default SIGNIN;
