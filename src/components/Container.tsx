
const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className=" max-w-[1920px] mx-auto">
        {children}
        </div>;
};

export default Container;
