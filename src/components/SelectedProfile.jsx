const SelectedProfile = ({ user, onClose }) => {
  if (!user) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-slate-400 hover:text-slate-700 cursor-pointer"
        >
          &times;
        </button>

        <img
          src={user.image}
          alt={user.name}
          className="mx-auto h-24 w-24 rounded-full object-cover"
        />

        <h2 className="mt-4 text-2xl font-bold text-slate-800">
          {user.name}
        </h2>

        <p className="mt-1 font-semibold text-blue-500">
          {user.role}
        </p>

        <p className="mt-4 text-slate-600">
          {user.bio}
        </p>

        <div className="mt-5">
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
            Status: {user.status}
          </span>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href={user.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>

          <a
            href={user.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>

          <a
            href={user.socials.website}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Website
          </a>
        </div>

      </div>
    </div>
  );
};

export default SelectedProfile;