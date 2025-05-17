import WishList, { type WishListProps } from "@/components/main/WIshList";

function Home() {
  const dummy: WishListProps = {
    category: ["플라스틱", "유리병"],
    company: "No plastic sunday",
    title: "럭키 키링",
    price: 13000,
    min: 100,
    max: 1980,
  };
  return (
    <div className="flex h-full w-full flex-col">
      <WishList {...dummy} />
    </div>
  );
}
export default Home;
