import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
    const color = data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600";
    console.log(color);
    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.1 }}
            dragElastic={0.1}
            dragTransition={{ bounceDamping: 20, bounceStiffness: 200 }}
            className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] overflow-hidden text-white px-8 py-10"
        >
            <FaRegFileAlt />
            <p className="text-sm leading-tight mt-5 font-semibold ">
                {data.desc}
            </p>
            <div className="footer absolute bottom-0  w-full   left-0">
                <div className="flex items-center justify-between px-8 py-3 mb-5">
                    <h5>{data.filesize}</h5>
                    <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
                        {data.close ? (
                            <IoClose size={".7em"} color="#fff" />
                        ) : (
                            <LuDownload size={".7em"} color="#fff" />
                        )}
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div
                        className={`tag w-full py-4 ${color} flex items-center justify-center`}
                    >
                        <h1 className="text-sm font-semibold">
                            {data.tag.tagTitle}
                        </h1>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Card;
