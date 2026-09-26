import ProfileCard from "./ProfileCard";

const UserGrid = ({ users,viewProfile }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
      {users.map((user) => (
        <ProfileCard key={user.id} user={user} viewProfile={viewProfile} />
      ))}
    </div>
  );
};

export default UserGrid;
