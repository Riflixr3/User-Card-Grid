import github from "../assets/github.png";
import link from "../assets/link.png";
import twitter from "../assets/twitter.png";

const SocialLinks = ({ socials }) => {
  return (
    <div className="flex gap-5 mt-5">
      <a href={socials.github}>
        <img
          src={github}
          alt="GitHub"
          className="w-12 rounded-2xl cursor-pointer hover-effect"
        />
      </a>

      <a href={socials.twitter}>
        <img
          src={twitter}
          alt="Twitter"
          className="w-12 rounded-2xl cursor-pointer hover-effect"
        />
      </a>

      <a href={socials.website}>
        <img
          src={link}
          alt="Website"
          className="w-12 rounded-2xl cursor-pointer hover-effect"
        />
      </a>
    </div>
  );
};

export default SocialLinks;