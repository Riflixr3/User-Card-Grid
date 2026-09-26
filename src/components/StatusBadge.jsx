const StatusBadge = ({ status }) => {
  if (status === "online") {
    return <span className="bg-green-500 text-white px-3 py-1 rounded-full">Online</span>;
  }

  if (status === "busy") {
    return <span className="bg-yellow-500 text-white px-3 py-1 rounded-full">Busy</span>;
  }

  if (status === "offline") {
    return <span className="bg-gray-400 text-white px-3 py-1 rounded-full">Offline</span>;
  }
};

export default StatusBadge;
