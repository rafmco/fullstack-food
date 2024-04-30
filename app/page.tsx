import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import PromoBanner from "./_components/promo-banner";
import Search from "./_components/search";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <PromoBanner
          src="/promo-banner-01.png"
          alt="Até 30% de desconto em pizzas!"
        />
      </div>
    </>
  );
};

export default Home;
