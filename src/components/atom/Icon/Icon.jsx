import Logo from "./assets/logo";
import Ship from "./assets/ship";
import Medium from "./assets/medium";
import Twitter from "./assets/twitter";
import Haulage from "./assets/finance";
import Finance from "./assets/finance";
import Receipt from "./assets/receipt";
import Facebook from "./assets/facebook";
import Linkedin from "./assets/linkedin";
import LogoMain from "./assets/logo-main";
import Instagram from "./assets/instagram";
import LogoBlack from "./assets/logo-black";
import ChevronLeft from "./assets/chevron-left";
import ChevronRight from "./assets/chevron-right";
import ChevronRightBlue from "./assets/chevron-right-blue";

export const Icon = ({ name, ...props }) => {
  switch (name) {
    case "logo": {
      return <Logo {...props} />;
    }
    case "right": {
      return <ChevronRight {...props} />;
    }
    case "ship": {
      return <Ship {...props} />;
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
