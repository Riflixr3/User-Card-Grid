import Avatar from "./Avatar";
import ProfileInfo from "./ProfileInfo";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import StatusBadge from "./StatusBadge";

const ProfileCard = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg shadow-slate-300/50">
      <div className="flex flex-col items-center gap-2">
        <Avatar image={user.image} />
        <StatusBadge status={user.status} />
      </div>

      <ProfileInfo name={user.name} role={user.role} bio={user.bio} />

      <SocialLinks socials={user.socials} />

      <Button />
    </div>
  );
};

export default ProfileCard;
