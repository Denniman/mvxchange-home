import Talk from "./assets/talk";
import Logo from "./assets/logo";
import Close from "./assets/close";
import Ship from "./assets/ship";
import House from "./assets/house";
import Medium from "./assets/medium";
import Freight from "./assets/freight";
import Twitter from "./assets/twitter";
import Haulage from "./assets/finance";
import Finance from "./assets/finance";
import Receipt from "./assets/receipt";
import Facebook from "./assets/facebook";
import Linkedin from "./assets/linkedin";
import Hamburger from "./assets/hamburger";
import LogoMain from "./assets/logo-main";
import Instagram from "./assets/instagram";
import ArrowDown from "./assets/arrow-down";
import LogoBlack from "./assets/logo-black";
import ChevronLeft from "./assets/chevron-left";
import ChevronRight from "./assets/chevron-right";
import MobileUpArrow from "./assets/mobile-up-arrow";
import DeliveryTruck from "./assets/delivery-truck";
import ChevronRightBlue from "./assets/chevron-right-blue";

export const Icon = ({ name, ...props }) => {
  switch (name) {
    case "logo": {
      return <Logo {...props} />;
    }
    case "talk": {
      return <Talk {...props} />;
    }
    case "right": {
      return <ChevronRight {...props} />;
    }
    case "close": {
      return <Close {...props} />;
    }

    case "hamburger": {
      return <Hamburger {...props} />;
    }
    case "delivery-truck": {
      return <DeliveryTruck {...props} />;
    }
    case "mobile-up": {
      return <MobileUpArrow {...props} />;
    }
    case "freight": {
      return <Freight {...props} />;
    }
    case "house": {
      return <House {...props} />;
    }
    case "ship": {
      return <Ship {...props} />;
    }

    case "arrow-down": {
      return <ArrowDown {...props} />;
    }

    case "logo-main": {
      return <LogoMain {...props} />;
    }
    case "twitter": {
      return <Twitter {...props} />;
    }
    case "right-blue": {
      return <ChevronRightBlue {...props} />;
    }
    case "facebook": {
      return <Facebook {...props} />;
    }

    case "linkedin": {
      return <Linkedin {...props} />;
    }
    case "instagram": {
      return <Instagram {...props} />;
    }
    case "medium": {
      return <Medium {...props} />;
    }

    case "logo-black": {
      return <LogoBlack {...props} />;
    }

    case "finance": {
      return <Finance {...props} />;
    }

    case "receipt": {
      return <Receipt {...props} />;
    }

    case "haulage": {
      return <Haulage {...props} />;
    }
    case "left": {
      return <ChevronLeft {...props} />;
    }

    default:
      return null;
  }
};
