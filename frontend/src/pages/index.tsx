import { useRouter } from "next/navigation";
import { ImagesComponents } from "@/services/ImagesService";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleCreate = () => {
    router.push("/create");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <Image src={ImagesComponents.logoImg} alt="logo" />
      <div className="flex items-center justify-center flex-wrap-reverse justify-between w-full max-w-[700px]">
        <div>
          <h1 className="text-xl font-medium">
            Learn new concepts
            <br /> for each question
          </h1>

          <button
            className="bg-yellow-400 shadow-lg text-black px-4 py-2 rounded mt-10 hover:bg-yellow-500 cursor-pointer"
            onClick={handleCreate}
          >
            Create Quiz
          </button>
        </div>

        <Image src={ImagesComponents.quizPeople} alt="quizPeople" />
      </div>
    </div>
  );
}
