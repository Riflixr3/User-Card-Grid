const ProfileInfo = ({name,role,bio}) => {
  return (
    <div className="flex flex-col items-center text-center mt-2">
      <h1 className="text-2xl sm:text-3xl font-bold">{name}</h1>
      <h3 className="text-xl font-semibold text-gray-400">{role}</h3>

      <p className="mt-8 max-w-md text-lg text-gray-500">{bio}</p>
    </div>
  );
};

export default ProfileInfo;
