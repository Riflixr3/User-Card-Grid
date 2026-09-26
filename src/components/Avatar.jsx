const Avatar = ({image}) => {
  return (
    <div>
      <img src={image} alt="" className="w-20 sm:w-25 rounded-full " />
    </div>
  );
};

export default Avatar;
