import Image from "next/image";

export default function Home() {
  return (
    <div id={"homepage"}>
        <h1> Chris' Website </h1>
        <p>
            This website is intended to showcase my full stack development skills and improve my skills with React
            and Next.js. It will also be a repository of stuff that interests me.
        </p>
        <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
        />
    </div>
  );
}
