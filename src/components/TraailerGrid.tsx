

const TrailersGrid = () => {
  return (
    <div className="trailers grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

      <a href="https://youtu.be/nW948Va-l10?si=oLbpzaOqIXFB3Lfx" className="group col-span-1 sm:col-span-2 lg:col-span-2 row-span-2">
        <img
          className="w-full h-96 sm:h-[400px] object-cover rounded-xl transition-transform transform group-hover:scale-105 shadow-xl"
          src="https://i.pinimg.com/736x/f4/d7/52/f4d752135521d78610fbca98efe32992.jpg"
          alt="Loki Trailer 1"
        />
      </a>


      <a href="https://youtu.be/dug56u8NN7g?si=2imjo1TzJstdrwX6" className="group">
        <img
          className="w-full h-52 object-cover rounded-xl transition-transform transform group-hover:scale-105 shadow-lg"
          src="https://i.pinimg.com/736x/62/c1/cd/62c1cd549290c21f5afc2ca95167bf8b.jpg"
          alt="Loki Trailer 2"
        />
      </a>


      <a href="https://youtu.be/rg8pCyrZYaA?si=U9fNzh9FSTujnncc" className="group">
        <img
          className="w-full h-52 object-cover rounded-xl transition-transform transform group-hover:scale-105 shadow-lg"
          src="https://i.pinimg.com/736x/82/51/42/825142c560fe00e4139028c985bbadad.jpg"
          alt="Loki Trailer 3"
        />
      </a>
    </div>
  );
};

export default TrailersGrid;
