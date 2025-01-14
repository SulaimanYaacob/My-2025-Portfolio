"use client";
import { PiArrowsInLineHorizontal, PiCode, PiLightbulb } from "react-icons/pi";

const offers = [
  {
    id: 0,
    title: "Responsive Web Design",
    icon: <PiArrowsInLineHorizontal className="text-violet-500" size={64} />,
    desc: "Make your website usable across devices and screen sizes",
  },
  // {
  //   id: 1,
  //   title: "Minimalist Design",
  //   icon: <PiLayout className="text-violet-500" size={64} />,
  //   desc: "Reduce the amount of unnecessary elements for a better user experience",
  // },
  {
    id: 1,
    title: "Full Stack Development",
    icon: <PiCode className="text-violet-500" size={64} />,
    desc: "Build a full-stack application from the scratch",
  },
  {
    id: 2,
    title: "Problem Solving",
    icon: <PiLightbulb className="text-violet-500" size={64} />,
    desc: "Identify and solve complex problems effectively",
  },
];

export default function OfferSection() {
  // const [displayBar, setDisplayBar] = useState(0);

  return (
    <section className="flex w-full flex-col justify-center border-slate-900 bg-violet-200 py-12 text-center lg:h-fit">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 p-4">
        {/* <h1 className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text font-bold text-transparent lg:text-5xl"> */}
        <h1 className="text-4xl font-bold lg:text-5xl">
          What I can provide for you
        </h1>
        <div className="z-0 mx-auto flex flex-col gap-8 lg:flex-row">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="flex max-w-xs flex-col gap-4 rounded border-2 border-slate-900 bg-white p-4 text-start [box-shadow:4px_4px_0_0_#0f172a]"
            >
              {offer.icon}
              <div className="flex flex-col gap-2">
                <p className="text-2xl">{offer.title}</p>
                <p className="text-lg text-slate-500">{offer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// {offers.map((offer, idx) => (
//   <div key={idx} className="flex gap-4">
//     <div>
//       <button
//         className={`z-10 h-14 border-2 border-slate-900 transition-all ${idx === offers.length - 1 && "z-20"} bg-slate-50 [box-shadow:4px_4px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0px_0_0_#0f172a]`}
//         onClick={() => setDisplayBar(offer.id)}
//       >
//         <MdArrowForwardIos
//           color={`${displayBar === offer.id ? "#8b5cf6" : "#0f172a"}`}
//           size={40}
//         />
//       </button>
//     </div>
//     <div
//       className={`-z-10 h-full w-full overflow-hidden whitespace-nowrap border-2 border-slate-900 p-2 text-xl transition-all duration-500 [box-shadow:4px_4px_0_0_#0f172a] md:text-3xl ${displayBar === offer.id ? "max-w-full opacity-100" : "max-w-0 opacity-0"}`}
//     >
//       <h2>{offer.title} </h2>
//       {/* <p>123123123213123</p> */}
//     </div>
//   </div>
// ))}
