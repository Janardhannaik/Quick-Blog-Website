const Homeposts = () => {
  return (
    <div className="w-full flex mt-8  space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          First Internship on CODSOFT!!! For web development
        </h1>

        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between  md:mb-4">
          <p>@jnhgjjnn</p>
          <div className="flex items-center justify-between mt-2 md:mt-4">
            <p>17/5/2024</p>
            <p>16:45</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quam
          vero quia error hic libero quasi, possimus modi dicta totam officiis?
          Quibusdam tempore amet possimus eum ipsa maiores, reprehenderit
          suscipit.
        </p>
      </div>
    </div>
  );
};

export default Homeposts;
