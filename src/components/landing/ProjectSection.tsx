import { myProjectList } from "@/app/data/myProjectList";
import Image from "next/image";

export default function ProjectSection() {
  return (
    <div className="flex h-fit items-center justify-center py-12 lg:h-screen">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {myProjectList.map(({ src, id, name, tech, desc }) => {
          return (
            <div key={id} className="flex flex-col gap-4 p-4">
              <div className="relative h-[200px] w-full border-2 border-slate-900 [box-shadow:4px_4px_0_0_#0f172a]">
                <Image
                  priority
                  sizes="(max-width: 1200px) 50vw, 33vw" // Lower than 1200px can be 50vw, above 1200px can be 33vw
                  className="object-contain"
                  fill
                  src={src ?? "https://picsum.photos/200/300"}
                  alt=""
                />
              </div>
              <div className="border-2 border-slate-900 p-2 [box-shadow:4px_4px_0_0_#0f172a]">
                <h2 className="text-3xl">{name}</h2>
                <h3 className="text-xl text-slate-500">
                  {desc === "" &&
                    "Et voluptate adipisicing eu amet veniam aute"}
                </h3>
                <ul className="flex gap-8 text-xl">
                  {!tech.length &&
                    [4, 5, 6].map((num, idx) => {
                      return (
                        <li key={idx} className="rounded bg-indigo-300 px-8">
                          {num}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
