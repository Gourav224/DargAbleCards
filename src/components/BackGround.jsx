const BackGround = () => {
    return (
        <>
            <div className="fixed w-full h-screen z-[2]">
                <div className="absolute top-[5%] flex justify-center text-zinc-600 font-semibold text-xl w-full py-10">
                    Documents
                </div>
                <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter font-semibold text-zinc-900">
                    Docs.
                </h1>
            </div>
        </>
    );
};

export default BackGround;
