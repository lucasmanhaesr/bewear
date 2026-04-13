import { Button } from "@/components/ui/button";

const home = () => {
    return (
        <div className="h-screen w-screen bg-black">
            <h1 className="text-white">Home</h1>
            <Button variant={"outline"}>Click me</Button>
        </div>
    )
};

export default home;
