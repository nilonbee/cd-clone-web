import Image from "next/image";
import splitDescription from "@utils/subtring";

interface AboutParagraphTypes {
  image: any;
  description: string;
}

export const AboutParagraph: React.FC<AboutParagraphTypes> = ({
  image,
  description,
}) => {
  // Divide the description into sections of 6 lines each
  const descriptionSections = splitDescription(description);

  return (
    <article className="block md:flex md:justify-evenly py-4 bg-gray-50 space-x-6">
      <div className="col-span-2 md:col-span-1 flex justify-start items-start">
        <Image
          height={20}
          width={460}
          src={image}
          alt={`aboutimg-${image}`}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="col-span-2 md:col-span-3 pt-4 w-2/3">
        {descriptionSections.map((section, index) => (
          <p key={index}>{section}</p>
        ))}
      </div>
    </article>
  );
};
