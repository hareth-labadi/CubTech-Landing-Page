import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="max-container flex flex-col items-center gap-2 px-2 bg-silver pb-5">
      <h1 className="text-primary">Whoops!</h1>
      <p className="text-primary">404 Page Not Found</p>
        <Image src={"/error.png"} width={400} height={400} />
      <h2 className="text-primary text-center">
        Looks like this page went on vacation.
      </h2>
      <p className="text-primary">
        Try{" "}
        <Link href={"/"} className="underline text-amber-700">
          homepage
        </Link>{" "}
        instead.
      </p>
    </section>
  );
};

export default NotFound;
