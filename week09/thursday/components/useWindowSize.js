//Danny Radosevich
//Adv Web Apps
//Lecture 6


function useWindowSize() 
{
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const resize = () => 
    {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    useLayoutEffect(() => 
    {
        window.addEventListener("resize", resize);
        resize();
        return () => window.removeEventListener("resize", resize);
    }, []);
    return [width, height];
};

export default useWindowSize;