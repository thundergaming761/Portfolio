import Image from "next/image";
import profileImg from "@/assets/images/kushagra.jpeg"

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center mt-[100px]">
        <div className="mt-[100px] ml-[200px] space-x-4 animate-fade-slide-in-left">
          <Image
            src={profileImg}
            alt="Profile picture"
            className="w-[200px] h-[200px] rounded-full"
          />
        </div>
        <div className="w-[900px] animate-fade-slide-in-right mt-[100px] ml-[60px] mr-[50px]">
          <h1 className=" text-[#EEEEEE]">
            <span className="text-5xl text-[#00ADB5] font-bold">Hi</span>, I&apos;m
            Kushagra Pandey, a Computer Science student specializing in
            Artificial Intelligence and Machine Learning. Currently pursuing my
            B.Tech at the University of Petroleum and Energy Studies, I have
            hands-on experience in web development and data analysis. My
            projects range from creating interactive games like
            &apos;Aimlabs&apos; to developing an accident detection system using
            machine learning. Additionally, I interned at HERE Technologies,
            where I contributed to data extraction and analysis for store
            locations. I am proficient in Python, Java, and React, among other
            technologies.
          </h1>
        </div>
      </div>
    </main>
  );
}
