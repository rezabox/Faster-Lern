import Image from "next/image";

const MiddleBanner = () => {
  return (
    <section className="container mx-auto md:flex md:justify-between p-5 md:p-0 justify-center items-center">
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
        className="rounded-xl mt-5 md:mt-0"
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
