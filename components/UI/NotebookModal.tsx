"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props{
    open:boolean;
    onClose:()=>void;
}

export default function NotebookModal({
open,
onClose
}:Props){

return(

<AnimatePresence>

{open&&(

<>

<motion.div
className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
onClick={onClose}
/>

<motion.div

className="fixed left-1/2 top-1/2
-translate-x-1/2
-translate-y-1/2
z-50
w-[92%]
max-w-2xl
rounded-3xl
bg-[#FFFDF8]
shadow-2xl
overflow-hidden"

initial={{
scale:.7,
rotate:-5,
opacity:0
}}

animate={{
scale:1,
rotate:0,
opacity:1
}}

exit={{
scale:.9,
opacity:0
}}

>

<div className="grid grid-cols-2">

<div className="border-r p-10">

<h2 className="text-2xl font-bold mb-6">
Dear You,
</h2>

<p className="leading-8">

This is where
your handwritten
letters will live.

Every page
will hold
a different memory.

</p>

</div>

<div className="p-10">

<h2 className="text-2xl font-bold mb-6">
Page Two
</h2>

<p className="leading-8">

We&apos;ll eventually
add page turning,
photos,
stickers
and memories here.

</p>

</div>

</div>

<div className="flex justify-end p-6">

<button
onClick={onClose}
className="rounded-xl bg-[#E7C7B5] px-4 py-2"
>

Close

</button>

</div>

</motion.div>

</>

)}

</AnimatePresence>

);

}