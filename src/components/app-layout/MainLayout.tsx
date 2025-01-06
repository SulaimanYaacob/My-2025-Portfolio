import React from "react";
import Header from "./Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="-z-10">
      <Header />
      {/* <div className="absolute right-1/2 top-28 w-[250px] translate-x-1/2 transform bg-cyan-700 p-4 text-center">
        <h2 className="text-2xl font-bold">Reminder</h2>
        <div className="my-2 flex justify-between text-start font-semibold">
          <div>
            <p>Primary</p>
            <p>Secondary</p>
          </div>
          <div className="text-end">
            <p className="text-violet-400">violet-400</p>
            <p className="text-slate-900">slate-900</p>
          </div>
        </div>
      </div> */}
      <div className="mx-auto">{children}</div>
    </div>
  );
}

//* Notes to Remember

// Someting inline, like text? Lookup MDN, inline things: span, a, em, i, b, del, sup
// Something like a box?: div, section, main, nav
// Something for listing?
// Is it ordered: ol (ordered list)
// Is it unordered: ul
// is it with a label and some value related to it? dl (definition list), with a dt (definition title) and 0 or many dd (definition data)
// Is it in a form, use a form. What fields in that form, make input inside that form, don't go funky! That's when crappy HTML happens! Want to tell what that input[id=fname] is for, add a label[for=fname]. Want to submit the form, use a button, or input[type=submit].
// Want to not change how the form behaves. Like not changing page. Don't use form[method=get], unless you want URL with ?fname=bob. Use instead method post. But then addEventListener on form, then use e.preventDefault().
// Then CSS can help rearrange things. Maybe you want the a to be a "box" (or flex, now). That's when you add CSS.
