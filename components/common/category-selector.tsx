import { categoryTable } from "@/db/schema";

import { Button } from "../ui/button";

interface CategorySelectorPorps {
    categories: (typeof categoryTable.$inferInsert)[];
}

const CategorySelector = ({ categories }: CategorySelectorPorps) => {
    return (
        <div className="rounded-3xl bg-[#F4EFFF] p-6 mx-5">
            <div className="grid-cols-2 grid gap-3">
                {categories.map(categorie => (
                    <Button key={categorie.id} variant={"ghost"} className="bg-white">
                        {categorie.name}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default CategorySelector;
