import { useEffect, useState } from "react";

interface IGallery {
  images: Array<string>;
}

export const ProductGallery = ({ images }: IGallery) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
      <h2 className="sr-only">Images</h2>

      <div className="h-full w-full object-cover object-center sm:rounded-lg">
        <img src={images[0]} />
        {matches && (
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 lg:gap-8 mt-4">
            {images.map((img) => (
              <img src={img} key={img} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
