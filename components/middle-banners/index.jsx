import Image from "next/image";

const MiddleBanner = () => {
  return (
    <section className="container mx-auto flex justify-between items-center">
      <Image
        alt="alt"
        className="rounded-xl"
        width={600}
        height={200}
        src={"/images/banner-insta.jpg"}
        objectFit="cover"
        layout="fixed"
      />
      <Image
        alt="alt"
        className="rounded-xl"
        width={600}
        height={200}
        src={"/images/banner-insta.jpg"}
        objectFit="cover"
        layout="fixed"
      />
    </section>
  );
};

export default MiddleBanner;
