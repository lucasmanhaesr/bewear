import Image from "next/image";

import Header from "@/components/common/header";
import ProducList from "@/components/common/product-list";
import { db } from "@/db";
const home = async () => {

    const products = await db.query.productTable.findMany({
        with: {
            variants: true
        }
    });

    console.log(products);

    return (
        <>
            <Header />
            <div className="space-y-6">
                <Image
                    src={"/banner-01.png"}
                    alt={""}
                    width={0}
                    height={0}
                    sizes={"100vw"}
                    className="h-auto w-full px-5"
                />

                <ProducList title="Mais vendidos" products={products} />

                <Image
                    src={"/banner-02.png"}
                    alt={""}
                    width={0}
                    height={0}
                    sizes={"100vw"}
                    className="h-auto w-full px-5"
                />
            </div>
        </>
    );
};

export default home;
