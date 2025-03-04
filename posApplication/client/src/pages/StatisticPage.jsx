import { Header } from "../components/header/Header";
import StatisticCard from "../components/statistics/StatisticCard";
import { Area, Pie } from "@ant-design/plots";

const StatisticPage = () => {
  const areaConfig = {
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/aapl.json",
    },
    xField: "date",
    yField: "close",
    xAxis: {
      range: [0, 1],
      tickCount: 5,
      label: {
        autoHide: true, // Gereksiz etiketleri gizler
      },
    },
    smooth: true,
    areaStyle: () => ({
      fill: "l(270) 0:#1890ff 1:#ffffff",
    }),
  };
  
  

  const pieConfig = {
    data: [
      { type: "Kategori 1", value: 27 },
      { type: "Kategori 2", value: 25 },
      { type: "Kategori 3", value: 18 },
      { type: "Kategori 4", value: 15 },
      { type: "Kategori 5", value: 10 },
      { type: "Diğer", value: 5 },
    ],
    angleField: "value",
    colorField: "type",
    innerRadius: 0.6, // Pie chart iç boşluk oluşturur
    label: {
      text: "value",
      style: {
        fontSize: 14,
        fontWeight: "bold",
      },
    },
    legend: {
      position: "right",
    },
  };

  return (
    <>
      <Header />
      <div className="px-6 select-none md:pb-0 pb-20">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistiklerim</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            Hoş Geldin{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>
          </h2>
          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
            <StatisticCard
              title="Toplam Müşteri"
              amount="10"
              img="images/user.png"
            />
            <StatisticCard
              title="Toplam Kazanç"
              amount="660.96₺"
              img="images/money.png"
            />
            <StatisticCard
              title="Toplam Satış"
              amount="6"
              img="images/sale.png"
            />
            <StatisticCard
              title="Toplam Ürün"
              amount="28"
              img="images/product.png"
            />
          </div>
          <div className="flex justify-between gap-10 lg:flex-row flex-col items-center ">
            <div className="lg:w-1/2 lg:h-full h-72">
              <Area {...areaConfig} />
            </div>
            <div className="lg:w-1/2 lg:h-full h-72">
              <Pie {...pieConfig} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
