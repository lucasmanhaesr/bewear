import { desc } from "drizzle-orm";
import Image from "next/image";

import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ProducList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable } from "@/db/schema";
const home = async () => {
    const products = await db.query.productTable.findMany({
        with: {
            variants: true,
        },
    });

    const categories = await db.query.categoryTable.findMany({});

    const newlyCreatedProducts = await db.query.productTable.findMany({
        orderBy: [desc(productTable.createdAt)],
        with: {
            variants: true,
        },
    });

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

                <CategorySelector categories={categories} />

                <Image
                    src={"/banner-02.png"}
                    alt={""}
                    width={0}
                    height={0}
                    sizes={"100vw"}
                    className="h-auto w-full px-5"
                />

                <ProducList title="Adicionados recentemente" products={newlyCreatedProducts} />

                <Footer />
                
            </div>
        </>
    );
};

export default home;
