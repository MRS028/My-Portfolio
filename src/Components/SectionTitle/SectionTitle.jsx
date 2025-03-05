const SectionTitle = ({ title, subtitle }) => {

    return (
      <div className="text-center my-4 mb-8 ">
        <h2 className="text-4xl font-bold text-green-600 uppercase transform transition duration-300 hover:scale-105">
          {title}
        </h2>
        {subtitle && (
          <p className="text-green-500 mt-2 italic">{subtitle}</p>
        )}
        <div className="w-32 h-1 bg-green-500 mx-auto mt-2 rounded "></div>
      </div>
    );
  };
  
  export default SectionTitle;
  