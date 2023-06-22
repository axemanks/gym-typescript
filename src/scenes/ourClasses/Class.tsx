type Props = {
    name: string;
    description?: string;
    image: string;
  };
  // overlayStyles is what enables the text on top of the image - z-30
  const Class = ({ name, description, image }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;
  
    return (
        // overlayStyles is what enables the text on top of the image
      <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
          <p className="text-2xl">{name}</p>
          <p className="mt-5">{description}</p>
        </div>
        <img alt={`${image}`} src={image} />
      </li>
    );
  };
  
  export default Class;